const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const userController = require("./controllers/userController");
const productController = require("./controllers/productController");
const billController = require("./controllers/billController");
const transactionController = require("./controllers/transactionController");

app.get("/", (req, res) => {
  res.send("Hello welcone to api")
})

//user
app.post("/api/user/create", (req, res) => userController.create(req, res));
app.get("/api/user/list", (req, res) => userController.list(req, res));
app.put("/api/user/update/:id", (req, res) => userController.update(req, res));
app.delete("/api/user/delete/:id", (req, res) =>
  userController.delete(req, res)
);
app.post("/api/user/login", (req, res) => userController.Login(req, res));

// product
app.post("/api/product/create", (req, res) =>
  productController.create(req, res)
);
app.get("/api/product/list", (req, res) => productController.list(req, res));
app.put("/api/product/update/:id", (req, res) => productController.update(req, res));
app.delete("/api/product/delete/:id", (req, res) => productController.delete(req, res));

// bill
app.post("/api/bill/payment", (req, res) => billController.create(req, res));
app.get("/api/bill/list/:id", (req, res) => billController.list(req, res));

// transaction
app.post("/api/transaction/list", (req, res) =>
  transactionController.list(req, res)
);

app.listen(3002, () => {
  console.log("server is running on port 3001");
});
