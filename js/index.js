const baseUrlOne = "https://gamerage.schoolwork.one/wp-json/wp/v2/posts";
const slidesContainer = document.getElementById("slider-container");

async function displayCarousel() {
  try {
    slidesContainer.innerHTML = "";
    const response = await fetch(baseUrlOne);
    const product = await response.json();

    product.forEach(function (product) {
      slidesContainer.innerHTML += `<li class="slide"><a href="news-specific.html?id=${product.id}" class="recipes-carousel">
            <h2>${product.name}</h2>
            <img class="carousel-recipes-image" src="${product.content.rendered}">
            </div>`;
    });

    activateSlide();
  } catch (error) {
    console.log(error);
  }
}

displayCarousel();

function activateSlide() {
  const prevBtn = document.getElementById("previous-btn");
  const nextBtn = document.getElementById("next-btn");
  const slide = document.querySelector(".slide");

  nextBtn.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
  });

  prevBtn.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
  });
}
