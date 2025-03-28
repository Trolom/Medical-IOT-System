from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from .models import IoTData, Records, CustomUser
from .serializers import IoTDataSerializer, RecordsSerializer, DoctorSerializer, PatientSerializer


from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated


from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny

@api_view(['POST'])
@permission_classes([AllowAny])
def login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(username=username, password=password)

    if user:
        login(request, user)
        if user.role == 'doctor':
            serializer = DoctorSerializer(user)
        elif user.role == 'patient':
            serializer = PatientSerializer(user)
        else:
            return JsonResponse({'error': 'Invalid role'}, status=400)
        return JsonResponse({'user': serializer.data}, status=200)
    return JsonResponse({'error': 'Invalid credentials'}, status=400)

@api_view(['POST'])
def logout_view(request):
    logout(request)
    return JsonResponse({'message': 'Successfully logged out'}, status=200)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def current_user_view(request):
    user = request.user
    if user.role == 'doctor':
        serializer = DoctorSerializer(user)
    elif user.role == 'patient':
        serializer = PatientSerializer(user)
    else:
        return JsonResponse({'error': 'Invalid role'}, status=400)
    return JsonResponse({'user': serializer.data}, status=200)

@api_view(['POST'])
@permission_classes([AllowAny])
def register_view(request):
    role = request.data.get('role')
    if role == 'doctor':
        serializer = DoctorSerializer(data=request.data)
    elif role == 'patient':
        serializer = PatientSerializer(data=request.data)
    else:
        return JsonResponse({'error': 'Invalid role'}, status=400)
    
    if serializer.is_valid():
        user = serializer.save()
        user.set_password(request.data.get('password'))  # Hash the password
        user.save()
        return JsonResponse({'user': serializer.data}, status=201)
    return JsonResponse(serializer.errors, status=400)

@csrf_exempt
@api_view(['POST'])
def receive_iot_data(request):
    if request.method == "POST":
        serializer = IoTDataSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "IoT data received successfully."}, status=201)
        return Response(serializer.errors, status=400)

@api_view(['GET'])
def list_iot_data(request):
    iot_data = IoTData.objects.order_by('-timestamp')[:10]
    serializer = IoTDataSerializer(iot_data, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def add_records(request):
    serializer = RecordsSerializer(data=request.data)
    if serializer.is_valid():
        instance = serializer.save()  # Save the new row
        return Response(RecordsSerializer(instance).data, status=status.HTTP_201_CREATED)  # Return the created data
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def list_records(request):
    imaging_data = Records.objects.order_by('-timestamp')
    serializer = RecordsSerializer(imaging_data, many=True)
    return Response(serializer.data)
