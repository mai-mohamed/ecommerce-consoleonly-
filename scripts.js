const products = [
  {
    productName: "product1",
    productQuantity: "1",
    productPrice: "1000",
  },
  {
    productName: "product2",
    productQuantity: "2",
    productPrice: "2000",
  },
  {
    productName: "product3",
    productQuantity: "3",
    productPrice: "3000",
  },
];

function getAllProducts() {
  console.log(products);
}
//add

function addProduct(pName, pQuantity, pPrice) {
  const newProduct = {
    productName: pName,
    productQuantity: pQuantity,
    productPrice: pPrice,
  };
  products.push(newProduct);
  getAllProducts();
}
//modify 

function modifyProduct(selectedProductName, newModifiedQuantity) {
  products.forEach((product) => {
    product.productName === selectedProductName
      ? (product.productQuantity = newModifiedQuantity)
      : null;
  });

  getAllProducts();
}

//data

addProduct("product4", "1000", "50");
modifyProduct("product2", 800);
