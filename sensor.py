import time
import requests
import random
from datetime import datetime

API_URL = "http://127.0.0.1:8000/iot-data/"

def generate_mock_data():
    """Generate mock data for temperature, heart rate, and timestamp."""
    data = {
        "temperature": round(random.uniform(36.0, 39.0), 1),  # Simulated body temperature
        "heart_rate": random.randint(60, 100),  # Simulated heart rate
        "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M")  # Current timestamp
    }
    return data

def send_data():
    #Send mock data to the API every 5 seconds.
    while True:
        data = generate_mock_data()
        try:
            response = requests.post(API_URL, json=data)
            if response.status_code == 201:
                print(f"Data sent successfully: {data}")
            else:
                print(f"Failed to send data: {response.status_code}, {response.text}")
        except requests.exceptions.RequestException as e:
            print(f"Error sending data: {e}")
        time.sleep(5)

if __name__ == "__main__":
    send_data()