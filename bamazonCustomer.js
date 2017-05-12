//Require node packages

var mysql = require("mysql");
var prompt = require("prompt");

//Create mysql connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "y2324482",
    database: "Bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
});

var start = function() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        displayTable(res);
        prompt.get(["Product", "Quantity"], function(error, result) {
            var chosenItem = result.Product;
            var chosenQuantity = result.Quantity;
            checkInventory(chosenItem, chosenQuantity);
        });
    });
};

function displayTable(items) {
    for (var i = 0; i < items.length; i++) {
        console.log("================");
        console.log("Item ID: " + items[i].item_id);
        console.log("Product Name: " + items[i].product_name);
        console.log("Price: " + items[i].price);
        console.log("================");
    };
};

function checkInventory(id, quant) {
    connection.query("SELECT * FROM products where item_id =" + id, function(err, res) {
      if (err) throw err;
      var totalCost = res[0].price * quant;
      var newStock = res[0].stock_quantity - quant;

      if (newStock < 0) {
        console.log("Insufficient quantity! There are only " + res[0].stock_quantity + " left.");
      } else {
        console.log("Total cost is $" + totalCost);
        stockUpdate(id, newStock);
      };
    });
};

function stockUpdate(id, quantity) {
  connection.query("UPDATE products SET stock_quantity = " + quantity + " WHERE item_id = " + id, function(err, res) {
    if (err) throw err;
  });
};
start();
