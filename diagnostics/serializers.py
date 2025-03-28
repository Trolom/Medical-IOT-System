from rest_framework import serializers
from .models import IoTData, Records, CustomUser

class IoTDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = IoTData
        fields = ['temperature', 'heart_rate', 'timestamp']

class RecordsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Records
        fields = ['tumor_size', 'biopsy_result', 'imaging_date', 'doctor_name', 'notes', 'timestamp']


class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'name', 'age', 'specialization']

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'name', 'age', 'patient_id', 'medical_history']
