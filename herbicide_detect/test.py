import requests

# Define the URL for the prediction endpoint
url = 'http://127.0.0.1:8001/predictHerb'

# Sample input data
sample_data = {
    "Weed_Variety": "Cyperus rotundus",          # Replace with an actual sample value
    "Application_Rate": 1.2,                     # Replace with an actual sample value
    "Effectiveness": "Medium",                   # Replace with an actual sample value
    "Region": "Eastern Province"                 # Replace with an actual sample value
}

# Send a POST request to the Flask app
response = requests.post(url, json=sample_data)

# Print the response from the Flask app
if response.status_code == 200:
    print(response.json())
else:
    print("Error:", response.status_code, response.text)
