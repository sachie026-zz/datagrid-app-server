const express = require("express");
const router = express.Router();

const roomController = require("../controllers/customers.controller");
const CUSTOMERS_BASE = "/customers";

router.post(`${CUSTOMERS_BASE}`, roomController.create);
router.get(`${CUSTOMERS_BASE}`, roomController.findAll);
router.delete(`${CUSTOMERS_BASE}/:id`, roomController.deleteCustomer);
router.put(`${CUSTOMERS_BASE}/:id`, roomController.updateCustomer);
module.exports = router;
