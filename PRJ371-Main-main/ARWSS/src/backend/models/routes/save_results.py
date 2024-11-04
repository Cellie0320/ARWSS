import requests
import json

def save_results(analytics):
    url = "http://127.0.0.1:5000/api/data"  # Your API endpoint
    headers = {'Content-Type': 'application/json'}

    try:
        # Prepare the payload
        payload = {
            "analytics": analytics
        }

        # Send the POST request
        response = requests.post(url, headers=headers, data=json.dumps(payload))

        # Check the response
        if response.status_code == 200:
            print("Data saved successfully:", response.json())
        else:
            print(f"Failed to save data. Status code: {response.status_code}, Response: {response.text}")

    except requests.exceptions.RequestException as e:
        print("An error occurred:", e)

if __name__ == "__main__":
    # Sample analytics data to send
    sample_analytics = {
        "2022": {"plastics": 10, "paper": 5, "metals": 3},
        "2023": {"plastics": 20, "paper": 15, "metals": 5},
        "2024": {"plastics": 30, "paper": 10, "metals": 7},
    }

    save_results(sample_analytics)
