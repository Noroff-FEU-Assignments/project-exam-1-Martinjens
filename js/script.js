const baseUrl = "https://gamerage.schoolwork.one/wp-json/wp/v2/posts";
const productDetailtContainer1 = document.querySelector(".product");

async function getProductDetails(url, id) {
  const response = await fetch(url);
  //console.log(response);
  const products = await response.json();
  //console.log(products);
  for (i = 0; i < products.length; i++) {
    const product = products[i];
    if (product.id == id) {
      productDetailtContainer1.innerHTML += `<div class="flex-item">
    <h1 class="product">${product.title.rendered}</h1>
    <p class="product">${product.content.rendered}</p></div>`;

      break;
    }
  }
}

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
const productId = getParameterByName("id");

getProductDetails(baseUrl, productId);
