Reservation System
Overview

The Reservation System is a simple web application built using Spring Boot that allows users to make reservations. It provides a form where users can input their name, email, desired date, and time for the reservation. Upon submission, a confirmation number is generated and displayed to the user.
Features

    User-friendly reservation form.
    Validation for input fields to ensure data integrity.
    Automatic generation of confirmation numbers for each reservation.
    Display of reservation details including the confirmation number.

Technologies Used

    Java
    Spring Boot
    Thymeleaf (for server-side HTML rendering)
    Lombok (for reducing boilerplate code)
    Maven (for project management and dependency handling)

Setup Instructions

    Clone the Repository: Clone the repository to your local machine using Git:

    bash

git clone https://github.com/yourusername/reservation-system.git

Build the Project: Navigate to the project directory and build the project using Maven:

bash

cd reservation-system
mvn clean install

Run the Application: Run the Spring Boot application using Maven:

arduino

    mvn spring-boot:run

    Access the Application: Open a web browser and go to http://localhost:8080 to access the Reservation System.

Usage

    Make a Reservation: Fill out the reservation form with your name, email, desired date, and time. Then, click on the submit button.
    Confirmation: Upon successful submission, you will receive a confirmation message along with a unique confirmation number.
    View Reservations: You can view your reservations and their details on the reservation confirmation page.
