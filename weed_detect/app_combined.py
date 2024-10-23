from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np
import os
import json
import cv2
import joblib
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load the weed classification model
MODEL_PATH = 'weed_classification_model.h5'
weed_model = load_model(MODEL_PATH)

# Load the class labels for weed classification
with open('class_labels.json', 'r') as f:
    class_labels = json.load(f)

# Load the herbicide prediction model and encoders
herbicide_model = joblib.load('logistic_regression_model.pkl')
label_encoder = joblib.load('label_encoder.pkl')
onehot_encoded_columns = joblib.load('onehot_encoder_columns.pkl')

# Image size expected by the weed classification model
IMG_SIZE = (128, 128)

# Preprocessing function to prepare the image for the weed model
def preprocess_image(image_path, target_size):
    img = cv2.imread(image_path)
    if img is not None:
        img = cv2.resize(img, target_size)
        img = img.astype('float32') / 255.0  # Normalize
        img = np.expand_dims(img, axis=0)  # Add batch dimension
    return img

@app.route('/predict', methods=['POST'])
def predict():
    # Check for the image file in the request
    if 'file' not in request.files:
        return jsonify({'error': 'No image file found'}), 400
    
    file = request.files['file']
    
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    
    if file:
        # Save the uploaded image to a temporary directory
        filepath = os.path.join('uploads', file.filename)
        file.save(filepath)
        
        # Preprocess the image for the weed classification model
        img = preprocess_image(filepath, IMG_SIZE)
        
        # Make prediction using the weed classification model
        predictions = weed_model.predict(img)
        predicted_class_idx = np.argmax(predictions)
        predicted_weed_variety = class_labels[predicted_class_idx]  # Get class name from index
        
        # Delete the saved file
        os.remove(filepath)
        
        # Now get the additional inputs for the herbicide prediction model
        data = request.form
        if not data or 'Application_Rate' not in data or 'Effectiveness' not in data:
            return jsonify({'error': 'Missing input data for herbicide prediction'}), 400
        
        application_rate = data['Application_Rate']
        effectiveness = data['Effectiveness']
        
        # Prepare input for herbicide prediction model
        input_data = pd.DataFrame({
            'Weed_Variety': [predicted_weed_variety],
            'Application_Rate': [application_rate],
            'Effectiveness': [effectiveness]
        })

        # One-hot encode the input data using saved one-hot encoded column structure
        input_data_encoded = pd.get_dummies(input_data).reindex(columns=onehot_encoded_columns, fill_value=0)

        # Make the herbicide prediction
        predicted_class = herbicide_model.predict(input_data_encoded)

        # Decode the predicted class back to the original herbicide name
        predicted_herbicide = label_encoder.inverse_transform(predicted_class)

        # Return the predicted weed variety and the herbicide
        return jsonify({
            'success': True,
            'predicted_weed_variety': predicted_weed_variety,
            'predicted_herbicide': predicted_herbicide[0]
        })
    
    return jsonify({'error': 'Invalid request'}), 400

if __name__ == '__main__':
    if not os.path.exists('uploads'):
        os.makedirs('uploads')  # Create uploads directory if it doesn't exist
    app.run(debug=True)
