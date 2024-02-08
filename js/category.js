fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((res) => res.json())
  .then(showCategories);

function showCategories(cats) {
  cats.forEach(showCategory)();
}

function showCategory(cat) {
  console.log(cat);
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);
  clone.querySelector("a").textContent = cat.category;
  clone.querySelector("a").href = `produktliste2.html?category=${cat.category}`;
  document.querySelector(".letterGroup ol").appendChild(clone);
}
