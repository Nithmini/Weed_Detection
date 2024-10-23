from flask import Flask, request, jsonify
import joblib
import pandas as pd
from flask_cors import CORS

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Step 1: Load the saved random forest model and label encoders
loaded_model = joblib.load('random_forest_model.pkl')
loaded_label_weed = joblib.load('label_encoder_weed.pkl')
loaded_label_effect = joblib.load('label_encoder_effect.pkl')
loaded_label_region = joblib.load('label_encoder_region.pkl')
loaded_label_target = joblib.load('label_encoder_target.pkl')

# Define a route to handle predictions
@app.route('/predictHerb', methods=['POST'])
def predict():
    try:
        # Get the JSON data from the request
        data = request.get_json()

        # Step 2: Input new sample data
        sample_data = pd.DataFrame({
            'Weed_Variety': [data['Weed_Variety']],
            'Application_Rate_Numeric': [data['Application_Rate']],
            'Effectiveness': [data['Effectiveness']],
            'Region': [data['Region']]
        })

        # Step 3: Preprocess the sample input (apply LabelEncoders)
        sample_data['Weed_Variety_Encoded'] = loaded_label_weed.transform(sample_data['Weed_Variety'])
        sample_data['Effectiveness_Encoded'] = loaded_label_effect.transform(sample_data['Effectiveness'])
        sample_data['Region_Encoded'] = loaded_label_region.transform(sample_data['Region'])

        # Step 4: Ensure the column order matches X used in training
        X_columns = ['Weed_Variety_Encoded', 'Effectiveness_Encoded', 'Region_Encoded', 'Application_Rate_Numeric']
        X_sample = sample_data[X_columns]

        # Step 5: Make predictions using the loaded Random Forest model
        rf_prediction = loaded_model.predict(X_sample)

        # Convert the numeric prediction back to the original target label (Herbicide_Name)
        rf_predicted_label = loaded_label_target.inverse_transform(rf_prediction)

        # Step 6: Return the predicted output as JSON
        return jsonify({
            'success': True,
            'predicted_herbicide': rf_predicted_label[0]
        })

    except Exception as e:
        # Handle any errors during prediction
        return jsonify({
            'success': False,
            'error': str(e)
        })

# Start the Flask app
if __name__ == '__main__':
    app.run(debug=True, port=8001)
