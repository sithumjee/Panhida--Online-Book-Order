# Panhida Ebook Shop

Panhida is an online ebook shop built using Vite and JavaScript for the frontend and admin panel, and Node.js for the backend. The platform allows users to browse and order books online, with payment processing handled by Stripe. The backend utilizes MongoDB for data storage.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Steps](#steps)
- [Usage](#usage)
  - [Frontend](#frontend)
  - [Admin Panel](#admin-panel)
  - [Backend API](#backend-api)
- [API Documentation](#api-documentation)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features
- Browse and search for books by category or author
- View detailed book information, including descriptions, ratings, and reviews
- Add books to a shopping cart and proceed to checkout
- Secure payment processing using Stripe
- Admin panel for managing books, orders, and user accounts

## Installation

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB (version 4.4 or higher)

### Steps
1. Clone the repository:
--git clone https://github.com/your-username/panhida-ebook-shop.git

2. Install the dependencies for the frontend and backend:
-cd panhida-ebook-shop/frontend
-npm install
-cd ../backend
-npm install


## Usage

### Frontend
1. Access the frontend application in your browser at `http://localhost:3000`.
2. Browse and search for books using the category or author filters.
3. Click on a book to view its detailed information, including descriptions, ratings, and reviews.
4. Add books to your shopping cart and proceed to checkout.
5. Complete the payment process using Stripe.

### Admin Panel
1. To access the admin panel, navigate to `http://localhost:3000/admin`.
2. Log in using your admin credentials.
3. Manage books, orders, and user accounts through the admin interface.

### Backend API
The Panhida Ebook Shop backend provides a RESTful API for interacting with the platform. You can find the detailed API documentation in the `backend/docs` directory.

## API Documentation
The API documentation for the Panhida Ebook Shop backend can be found in the `backend/docs` directory. This includes information on the available endpoints, request and response formats, and authentication requirements.

## Technologies Used
- Frontend:
- Vite
- JavaScript
- HTML
- CSS
- Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose
- Payment:
- Stripe

## Contributing
We welcome contributions to the Panhida Ebook Shop project. If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository.

## License
This project is licensed under the [MIT License](LICENSE).
