const baseUrl = "https://gamerage.schoolwork.one/wp-json/wp/v2/posts";
const productDetailtContainer = document.querySelector(".product-details");

async function getProductDetails(url) {
  const response = await fetch(url);
  const products = await response.json();
  console.log(products);
  for (i = 0; i < products.lengt; i++) {
    const product = products[i];
    if (product.id == id) {
      productDetailtContainer.innerHTML += `
        <div class="product"><p>${product.rendered}</p></div>`;
      break;
    }
  }
}

getProductDetails(baseUrl);
