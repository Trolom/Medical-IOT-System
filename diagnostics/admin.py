from django.contrib import admin
from .models import IoTData, Records, CustomUser    

@admin.register(IoTData)
class IoTDataAdmin(admin.ModelAdmin):
    list_display = ('temperature', 'heart_rate', 'timestamp') 
    ordering = ('-timestamp',)

@admin.register(Records)
class RecordsAdmin(admin.ModelAdmin):
    list_display = ('tumor_size', 'biopsy_result', 'imaging_date', 'doctor_name', 'notes', 'timestamp') 
    ordering = ('-timestamp',) 

@admin.register(CustomUser)
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ('username', 'role', 'name', 'age', 'specialization', 'patient_id', 'medical_history') 
    ordering = ('-id',)