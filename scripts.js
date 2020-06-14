const products = [
  {
    productName: "product1",
    productQuantity: 1,
  },
  {
    productName: "product2",
    productQuantity: 2,
  },
];
///////
function validateProduct(name, quantity) {
  if (typeof name !== "string") {
    throw new Error("product name must be a string");
  } else if (typeof quantity !== "number") {
    throw new Error("product quantity must be a number");
  }
}

/////////
function getAllProducts(productsList) {
  console.log(productsList);
}
getAllProducts(products);

/////////
function addProduct(productName, productQuantity) {
  validateProduct(productName, productQuantity);
  const newProducts = [...products];
  newProducts.push({ productName, productQuantity });
  getAllProducts(newProducts);
}
addProduct("product3", 3);

/////////
function modifyProduct(productName, productQuantity) {
  validateProduct(productName, productQuantity);
  const newProducts = [...products];
  for (let i = 0; i <= newProducts.length - 1; i++) {
    if (newProducts[i].productName === productName) {
      newProducts[i].productQuantity = productQuantity;
      break;
    }
  }
  getAllProducts(newProducts);
}
modifyProduct("product1", 888);
