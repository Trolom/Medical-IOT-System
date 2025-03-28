from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.postgres.fields import ArrayField  # For storing medical history as a list


class CustomUser(AbstractUser):
    USER_ROLES = [
        ('doctor', 'Doctor'),
        ('patient', 'Patient'),
    ]

    role = models.CharField(max_length=10, choices=USER_ROLES)
    name = models.CharField(max_length=100)  # Name of the user
    age = models.PositiveIntegerField(null=True, blank=True)  # Optional age field

    # Doctor-specific field
    specialization = models.CharField(max_length=100, blank=True, null=True)

    # Patient-specific fields
    patient_id = models.CharField(max_length=20, blank=True, null=True, unique=True)
    medical_history = ArrayField(
        models.TextField(),
        blank=True,
        default=list  # Initializes an empty list for medical history
    )


class IoTData(models.Model):
    temperature = models.FloatField()
    heart_rate = models.IntegerField()
    timestamp = models.DateTimeField(auto_now_add=True)

class Records(models.Model):
    tumor_size = models.FloatField()
    biopsy_result = models.TextField()
    imaging_date = models.DateField()
    doctor_name = models.TextField(default='Unknown')
    notes = models.TextField(blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        # Append biopsy_result to patient's medical_history
        if self.patient and self.biopsy_result:
            self.patient.medical_history.append(self.biopsy_result)
            self.patient.save()
        super().save(*args, **kwargs)