# Orders API

The application uses JSON Web Tokens (JWT) for authentication and Bcrypt.js for password hashing. MongoDB is used as the database to store user and order data. The application integrates the following features :

---

User Registration:

-   URL: /add-user (POST request)
-   Description: This endpoint allows new users to register by sending a POST request with the following data:
    -   Name: The name of the user.
    -   Phone Number: The phone number of the user.
    -   Password: A new password chosen by the user.
-   Upon receiving the request, the server will securely hash the password using Bcrypt.js and store the user's information in the MongoDB database. The password will not be stored in plain text for security reasons.

---

User Login:

-   URL: /login-user (POST request)
-   Description: This endpoint enables users to log in by sending a POST request with the following data:
    -   Phone Number: The phone number of the user.
    -   Password: The corresponding password for the user.
-   The server will validate the provided credentials by comparing the hashed password stored in the database with the submitted password using Bcrypt.js. If the credentials are valid, the server will generate a JWT and return it as a response. This token will be used for subsequent authenticated requests.

---

Add New Order:

-   URL: /add-order (POST request)
-   Description: Authenticated users can create a new order by sending a POST request with the following data:
    -   User ID: The ID of the user placing the order.
    -   Subtotal: The total cost of the order.
    -   Phone Number: The phone number associated with the order.
-   The server will verify the authenticity of the JWT provided in the request's authorization header. If the token is valid, the server will store the order details, including the user ID, subtotal, and phone number, in the MongoDB database.

---

Get Order Details:

-   URL: /get-order (GET request)
-   Description: This endpoint allows authenticated users to retrieve their order details by sending a GET request with the following data:
    -   User ID: The ID of the user whose order details are being requested.
-   The server will verify the JWT in the authorization header to ensure that the user is authenticated. If the token is valid, the server will query the MongoDB database for the order details associated with the provided user ID and return the relevant information.

With the above functionality, users can register and log in to the application, create new orders, and retrieve their order details securely using JWT authentication and Bcrypt.js for password hashing. MongoDB serves as the reliable database for storing user and order data.

---

APIs for the Project : [link](https://api.postman.com/collections/23714144-f106f859-73eb-450d-89dd-0ad0c4d9298f?access_key=PMAT-01H40P2695VMFHQ87HPJNHCHVV)
