const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();

const mongoClient = require("./common/mongoUtil");
const corsDelegate = require("./common/corsDelegateUtil");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);
app.use(cors());

// Mongoose db connections
let db = mongoClient.connectMongooseServer();
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Add CORS handling for local and frontend app access
let corsOptionsDelegate = corsDelegate;

// Add routes for modules
const customersRoutes = require("./routes/customers.routes");
app.use("/v1/", cors(corsOptionsDelegate), customersRoutes);

app.listen(PORT, () =>
  console.log("Express server is running on localhost:", PORT)
);
