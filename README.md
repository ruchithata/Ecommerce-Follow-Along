# Ecommerce-Follow-Along

## Project Description

The **Ecommerce Follow Along** project is designed to help developers build a full-stack e-commerce web application using the **MERN stack** (MongoDB, Express, React, and Node.js). This project follows a hands-on approach, where you will learn and implement key concepts such as **user authentication**, **product management**, and **order handling** through **RESTful APIs**. By the end of the project, you will have built a functioning e-commerce platform with core features, using JavaScript across both the client and server side.

The MERN stack allows for a seamless and efficient development process, providing a unified language (JavaScript) for the entire stack, making it easier for developers to build, scale, and maintain web applications.

## Milestone 1: Project Overview

In this milestone, we introduced the foundations of building a full-stack e-commerce application using the MERN stack. Key topics covered include:

### 1. **Overview of the MERN Stack**
   - The **MERN** stack is a popular set of technologies used for building modern, scalable, and fast web applications. The stack consists of:
     - **MongoDB** (database)
     - **Express.js** (backend framework)
     - **React.js** (frontend library)
     - **Node.js** (JavaScript runtime)
   - The key advantage of MERN is its **JavaScript-only** approach, where both the front-end and back-end are built using JavaScript, making development easier and more efficient.

### 2. **REST API Structure and Endpoints**
   - We explored **REST APIs** (Representational State Transfer) and their role in allowing communication between the client and server.
   - Key API endpoints were introduced to handle:
     - **User Authentication**: Register and log in users with secure authentication.
     - **Product Management**: Add, update, and retrieve product data.
     - **Order Handling**: Manage customer orders from creation to checkout.
   - These APIs interact with the database, responding with data in JSON format.

### 3. **Basics of Database Schema Design**
   - In MongoDB, **schema design** involves defining the structure of data stored in the database, including relationships between different collections such as **users**, **products**, and **orders**.
   - The schema plays a critical role in ensuring data consistency and making it easier to query.

### 4. **Role of Authentication in Web Applications**
   - Authentication verifies the identity of a user before granting access to certain features or data.
   - In this project, we focused on building **secure authentication** mechanisms, allowing users to register, log in, and manage their orders.
   - We implemented techniques like **JWT (JSON Web Tokens)** to securely handle user sessions.

## Features Implemented

- **User Authentication**:
  - Sign up and login features using JWT for secure sessions.
  
- **Product Management**:
  - Add, update, and view products within the e-commerce platform.

- **Order Management**:
  - Create, update, and view customer orders.

---

## *Milestone 2: Frontend Setup (Login Page)*

In this milestone, the *Login Page* was built using React’s CRA. For an improved interface, *Tailwind CSS* was integrated for styling and *React-Icons* for visual enhancements. Tailwind’s utility-first approach ensures a responsive and modern design.

The Login Page includes fields for email and password, form validation, state management, and error handling. Icons enhance usability and the overall experience.

---

## *Milestone 3: Backend Setup and Project Structure*

We established the foundational structure for the backend as follows:

- **src/ Directory:** Contains server-side source files.
  - **config/**: Holds environment configuration like MongoDB URL and port.
  - **controllers/**: Handles request logic for different routes.
  - **database/**: Connects to MongoDB via db.js.
  - **middleware/**: Contains custom middleware like centralized error handling.
  - **models/**: Defines Mongoose schemas.
  - **routes/**: Sets up API endpoints.
  - **utils/**: Includes helper functions like ErrorHandler.js.

The **index.js** file sets up the Express app, basic routing, and server listener.

---

## *Milestone 4: User Model, Controller, and Multer Integration*

We created the *User Model* and its controller, then integrated *Multer* for handling file uploads.

---

## *Milestone 5: Missing Number Task (Small Task)*

This milestone focused on solving the missing number problem in an array.

---

## *Milestone 6: Password Encryption and User Data Storage*

- *Password Hashing:* Implemented *bcrypt* to encrypt passwords during signup, storing only hashed versions in the database.
- *User Data Management:* Ensured all user information (like name and email) is stored securely, with password encryption maintained throughout.

---

## *Milestone 7: Login Endpoint Development*

- *User Authentication:* The endpoint accepts user credentials, retrieves user data, and verifies the password using bcrypt.
- *Password Validation:* Hashed passwords are compared for secure authentication.

---

## *Milestone 8: Product Display Components*

Two React components were created:
- *Home.jsx:* Displays the product list.
- *ProductCard.jsx:* Acts as a template for individual product information.

Products are dynamically mapped and displayed based on database content.

---

## *Milestone 9: Product Form Creation*

- *Frontend Form:* A user-friendly form to input product details like name, price, description, category, and images.
- *Form File:* Created *ProductForm.jsx* for data collection and validation.

---

## *Milestone 10: Product Schema and API Integration*

- *Schema:* Defined *ProductModel.js* using Mongoose.
- *API:* Developed an endpoint to handle POST requests for adding product data to MongoDB.
- *File Upload:* Utilized *Multer* middleware for image handling.

---

## *Milestone 11 & 12: Frontend-Backend Integration*

- *Data Fetching:* Updated *Products.js* to retrieve product data from MongoDB and pass it to *Home.jsx*.
- *Form Submission:* Enhanced the product form to send data to the database.

---

## *Milestone 13: Product Update Feature*

- *Edit Functionality:* Created an endpoint to update product data with a PUT request.
- *Frontend Enhancements:* Added edit and delete buttons, with role-based visibility for sellers.

---

## *Milestone 14: Product Deletion and Bug Fixes*

- *Delete Feature:* Implemented an endpoint to delete products by ID.
- *Bug Fixes:* Resolved unexpected behavior and optimized routing.

...

## *Milestone 15: Navigation Bar Implementation*

Navbar Creation: Developed a persistent navigation bar that appears on all pages, enhancing user navigation.
NavLinks Added: Included links to Home, Product Form, Login, and Sign Up pages for easy access.
Styling: Utilized Tailwind CSS to ensure a responsive and visually appealing design.

## *Milestone 16: Single Product Detail Page*

SingleProduct.jsx: Developed a dedicated page to display detailed information about individual products.
Routing: Configured routes to navigate to the Single Product page from the product listings.
Enhancements: Made minor adjustments to improve user experience across the site.

## *Milestone 17 & 18: Cart Functionality Development*

Cart Schema: Extended the existing schema to include cart details for each user.
Post Request: Created an endpoint to handle adding products to the user's cart and storing them in the database.
Multer Integration: Ensured image uploads function correctly within the cart system.

---

## *Milestone 19: Cart Page & Quantity Management*

In this milestone, we built the cart page for our e-commerce app.  
- Displayed products inside the cart using the existing backend API.  
- Added + and - buttons to increase and decrease product quantity.  
- Created backend endpoints to handle quantity updates.  
- Connected frontend buttons with the backend API for real-time updates.

---

## *Milestone 20 - User Profile Endpoint *

- Implemented the `/profile` endpoint to fetch user data and store it in an object. 
- Created `profile.jsx` to dynamically display all user details.  
- Ensured proper data handling and integration between frontend and backend.
- Planned future improvements like profile editing, authentication, and UI enhancements.  

---

## *Milestone 21: Address Form Creation*

Address.jsx: Developed a form for users to input address details, including country, state, and pincode.
State Management: Utilized useState hook to manage form inputs.
Form Submission: Implemented Axios to send address data to the backend and navigate to the profile page upon submission.

---

## *Milestone 22: Address Data Handling*

Backend Endpoint: Created an endpoint to receive and store address data from the frontend.
JWT Authentication: Implemented JSON Web Tokens to authenticate address submissions securely.

---

## *Milestone 23: Order Placement Workflow*

Place Order Button: Added functionality in the cart page to initiate the order placement process.
Select Address Page: Developed a page displaying all user addresses with an option to select a delivery address.
Address Retrieval: Created a backend endpoint to fetch all addresses associated with a user.

---

## *Milestone 24: Order Summary and Confirmation*

Order Summary: Displayed all products included in the order along with selected delivery address and total cart value.
Place Order Button: Implemented a final confirmation button to place the order, completing the purchase process.

---

## *Milestone 25: Order Creation*

- Developed an endpoint to receive products, user details, and address details.
- Retrieved the user's _id from the database using their email.
- Created separate orders for each product, all linked to the same address.
- Stored order details in the MongoDB orders collection using the defined Order Schema.

---

## *Milestone 26: Fetch User Orders*

- Built an endpoint that accepts the user's email as input.
- Used the email to retrieve the corresponding user _id.
- Queried the database to fetch all orders associated with that user.
- Returned the user's order history in the response.

---

## *Milestone 27: My Orders Page*

We created a "My Orders" page for the frontend of the Ecommerce-Follow-Along project. This page displays all the orders placed by the user.