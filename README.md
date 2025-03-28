# Interoperable Medical IoT Systems for Breast Cancer Diagnostics
RĂȘCANU Dragoș & GRĂPINOIU Codrin-Emilian

The project involves developing an application that continuously collects and centralizes data from a
smart device (eventually connected via a computer network). The application receives vital information,
but standard information, about the user latest status:

•Heart rate
•Body temperature
•Time of reading

In addition to real-time data, the application allows users to upload and check relevant medical
information from their doctor’s appointment about their health status (from an eventual
mammography):

•Tumor size (in centimeters)
•Biopsy results
•Date of appointment
•Name of the doctor
•Possible notes to take into consideration
•Time of data input

## A. Continuous monitoring of vital parameters

The smart device is configured to send data at regular intervals (every 10 seconds) about heart
rate and body temperature. This data is transmitted over the network to a central server where
it is stored in the database of the project.

## B. Anomaly detection

The application is not structured for anomaly detection, as the sensor of the device is a
simulation of a real device, such as a bracelet or smartwatch, and is limited to the normal
results. This can be enhanced when truly connected to this kind of a device and algorithm can be
made so that alerts can go on if something out of place is to happen in a longer time span.

## C. Integration of historical medical data

The user can upload medical test results and reports (e.g., mammography results). These are
centralized in a digital medical record accessible via the application. The app lets you compare
historical data with current data to provide a risk assessment.

![Screenshot from 2025-03-28 23-13-26](https://github.com/user-attachments/assets/262c49d0-d6a3-4c76-b3b1-8bb120dba484)

![Screenshot from 2025-03-28 23-14-12](https://github.com/user-attachments/assets/1858022d-4f94-4da2-8b4d-df75eda6748c)

![Screenshot from 2025-03-28 23-14-21](https://github.com/user-attachments/assets/c6376547-e827-49ba-b215-1fb54f1d039a)

