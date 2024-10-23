import requests

# Set the URL for the Flask app
url = 'http://127.0.0.1:5000/predict'  # Assuming your Flask app runs locally

# Path to the test image
image_path = 'images/20170711-115741-0.jpg'  # Replace with the path to your test image

# Input values for Application_Rate and Effectiveness
application_rate = "1.2 L/ha"  # Example value for Application_Rate
effectiveness = "Medium"     # Example value for Effectiveness

# Prepare the payload for the request
# The file needs to be sent as a file object, and other values as form data
files = {'file': open(image_path, 'rb')}
data = {
    'Application_Rate': application_rate,
    'Effectiveness': effectiveness
}

# Send the POST request to the Flask app
response = requests.post(url, files=files, data=data)

# Check the status code and print the response
if response.status_code == 200:
    print("Success! The prediction is:")
    print(response.json())
else:
    print(f"Failed with status code {response.status_code}")
    print(response.text)
