# Invoice App

Invoice App is an invoice management system. It allows users to create and view their invoices. The app is built using React and Node.js. The backend is built using Express and MongoDB. The frontend is built using React and TailwindCSS.

## Links

First start the backend API and then start the frontend app.

[Invoice Frontend APP](https://invoice-blog.netlify.app/)

[Invoice Backend APP](https://invoice-backend-ruln.onrender.com/)

## Testing

- npm install
- npm run start

## .env

    DB_NAME=
    DB_PASSWORD=
    DB_USERNAME=
    DB_CLUSTER=
    DB_URL=localhost:
    JWT_SECRET=
    GMAIL_EMAIL=
    GMAIL_PASSWORD=
    CLIENT_URL_LOCAL=<http://localhost:5173>
    CLIENT_URL_CLOUD=<https://invoice-blog.netlify.app>
    isLOCAL=true

## API's

### Auth API

- /api/auth/login - Login
- /api/auth/signup - Register
- /api/auth/logout - Logout

### Invoice API

- /api/invoice/create-invoice - Create Invoice
- /api/invoice/get-invoices - Get Invoices

## Git Repository

[Backend Repository](https://github.com/automationblog/invoice_backend)

[Frontend Repository](https://github.com/automationblog/invoice_frontend)
