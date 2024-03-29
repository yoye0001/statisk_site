const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

const url = "https://kea-alt-del.dk/t7/api/products?category=" + category;

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
  myClone.querySelector(".produktimg").src = `https://kea-alt-del.dk/t7/images/webp/640/${oneProduct.id}.webp`;
  myClone.querySelector(".price").textContent = oneProduct.price + " DKK";

  myClone.querySelector(".articletype").textContent = oneProduct.articletype;

  var discountPrice = oneProduct.price * ((100 - oneProduct.discount) / 100).toFixed(2);
  if (oneProduct.discount) {
    myClone.querySelector(".read-more").setAttribute("href", `produkt.html?id=${oneProduct.id}`);
    myClone.querySelector(".discount").textContent = discountPrice.toFixed(2);
  }

  if (oneProduct.soldout) {
    //produkt er udsolgt
    myClone.querySelector("article").classList.add("soldOut");
  }

  const parentElement = document.querySelector("main");
  parentElement.appendChild(myClone);
}
