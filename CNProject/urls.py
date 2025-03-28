from django.urls import path
from diagnostics.views import receive_iot_data, list_iot_data, add_records, list_records
from diagnostics.views import login_view, logout_view, current_user_view, register_view
from django.contrib import admin
from django.views.generic import TemplateView


urlpatterns = [
    path('iot-data/', receive_iot_data, name='iot_data'),
    path('iot-data/list/', list_iot_data, name='list_iot_data'),
    path('imaging-data/add/', add_records, name='add_records'),
    path('imaging-data/list/', list_records, name='list_records'),
    path('admin/', admin.site.urls),
    path('login/', login_view, name='login'),
    path('logout/', logout_view, name='logout'),
    path('current-user/', current_user_view, name='current_user'),
    path('register/', register_view, name='register'),
]