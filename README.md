# Tech stack

- NodeJS (Developement)
- Express (Server)
- MongoDB (Database)

# `yarn install or npm install`

To download all the required dependency packages.

# `yarn start or npm start`

Runs the app in the development mode.\
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# Deployment

Currently, this app is deployed on heroku
[https://datagrid-server.herokuapp.com/](https://datagrid-server.herokuapp.com/)

# Environmental Variables

Added Just two variables for the basic configuration purpose.

- `MONGOOSE_CONNECTION_URL` : To connect the associated mongodb database
- `CORS_ALLOW_URLS` : To disable CORS for few internal app urls

# REST details

REST API access url and allowed methods:

URL: `https://datagrid-server.herokuapp.com/v1/customers`

Methods:

- POST
- PUT
- DELETE
- GET

Parameters:

- POST  
request body : `{ name, due_amount, total_products }`

- DELETE
`url/<customerid>`

- PUT
`url/<customerid>`
request body : `{ name, due_amount, total_products }`