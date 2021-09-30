const Customer = require("../models/customer");

exports.create = async (req, res) => {
  let data = req.body;

  let customer = new Customer({
    due_amount: data.due_amount,
    name: data.name,
    joined_at: new Date(),
    total_products: data.total_products,
  });
  customer.save(function (err) {
    if (err) {
      return console.error(err);
    }
    res.send("Customer added successfully!");
  });
};

exports.findAll = (req, res) => {
  const { pageNumber, limit } = req.query;
  let totalCustomers = null;

  Customer.estimatedDocumentCount()
    .then((count) => (totalCustomers = count))
    .catch((err) => {
      console.log("err while retrieving the total count: ", err);
      totalCustomers = 0;
    });

  Customer.find()
    .skip((parseInt(pageNumber) - 1) * parseInt(limit))
    .limit(parseInt(limit))
    .sort({ joined_at: -1 })
    .then((customers) => {
      res.send({ data: customers, totalCount: totalCustomers });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error occurred while retrieving customers.",
      });
    });
};

exports.updateCustomer = (req, res) => {
  const data = req.body;
  let customer = {};

  if (data.name !== (null || undefined)) customer.name = data.name;
  if (data.due_amount !== (null || undefined))
    customer.due_amount = data.due_amount;
  if (data.total_products !== (null || undefined))
    customer.total_products = data.total_products;

  Customer.updateOne({ _id: req.params.id }, { $set: customer }, (err) => {
    if (err)
      return res
        .status(500)
        .send({ message: err || "Unable to update the customer" });
    return res.send("Customer updted");
  });
};

exports.deleteCustomer = async (req, res) => {
  const dataId = req.params.id;

  Customer.deleteOne({ _id: dataId }, (err, customer) => {
    if (err)
      return res.status(500).send({
        message: err.message || "Error occured, Customer not deleted",
      });
    return res.status(200).send("Customer successfully deleted!");
  });
};
