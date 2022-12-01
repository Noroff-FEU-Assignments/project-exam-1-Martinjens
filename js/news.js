const baseUrl = "https://gamerage.schoolwork.one/wp-json/wp/v2/posts";
const productDetailtContainer = document.querySelector(".product-details");
const perPage = document.querySelector(".per-page-selection");

async function getProductDetails(url) {
  const response = await fetch(url);
  //console.log(response);
  const products = await response.json();
  //console.log(products);
  for (i = 0; i < products.length; i++) {
    const product = products[i];

    productDetailtContainer.innerHTML += `<div class="flex-item">
     <h1 class="product">${product.title.rendered}</h1>
       <p class="product">${product.content.rendered}</p>
      <a href="../news-specific.html?id=${product.id}">Read more</a></div>`;
  }
}

getProductDetails(baseUrl);

perPage.onchange = function (event) {
  const newUrl = baseUrl + `?per_page=${event.target.value}`;
  productDetailtContainer.innerHTML = "";
  getProductDetails(newUrl);
};
