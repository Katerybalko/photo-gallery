const loadBtn = document.getElementById("loadBtn");
const loader = document.getElementById("loader");
const container = document.getElementById("imageContainer");

const API_URL = "https://dog.ceo/api/breeds/image/random/12"; 

async function loadImages() {
  loader.classList.remove("hidden");
  container.innerHTML = ""; 

  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    const images = data.message || []; 

    images.forEach(url => {
      const img = document.createElement("img");
      img.src = url;
      img.alt = "Пёсик";
      img.classList.add("gallery__image");
      container.appendChild(img);
    });
  } catch (error) {
    console.error("Ошибка при загрузке изображений:", error);
    container.innerHTML = `<p>Ошибка при загрузке картинок :(</p>`;
  } finally {
    loader.classList.add("hidden");
  }
}

loadBtn.addEventListener("click", loadImages);
