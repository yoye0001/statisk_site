const url = "https://kea-alt-del.dk/t7/api/products";

https: fetch(url)
  .then((response) => response.json())
  .then(dataRecieved);

function dataRecieved(data) {
  console.log(data);
  data.forEach(listProducts);
}

function listProducts(oneProduct) {
  console.log("listProducts");
  const product = document.querySelector("template").content;
  const myClone = product.cloneNode(true);

  myClone.querySelector(".productdisplayname").textContent = oneProduct.productdisplayname;
  myClone.querySelector(".gender").textContent = oneProduct.gender;
  myClone.querySelector(".price").textContent = oneProduct.price;

  myClone.querySelector(".articletype").textContent = oneProduct.articletype;

  const parentElement = document.querySelector("main");
  parentElement.appendChild(myClone);

  //copy.querySelector(".read-more").setAttribute("href", `produkt.html?id=${product.id}`);
}
