import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imagesList = document.querySelector(".gallery");

const createGallery = galleryItems.map(
  (image) => `<div class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
  </div>`
);

imagesList.insertAdjacentHTML(`beforeend`, createGallery.join(""));

//////////

imagesList.addEventListener(`click`, onPictureClick);

function onPictureClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains(`gallery__image`)) {
    return;
  }

  const openPicture = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" >
    `);

  openPicture.show();

  window.addEventListener(`keydown`, modalClose);

  function modalClose(evt) {
    if (evt.code === "Escape") {
      openPicture.close();
      window.removeEventListener("keydown", modalClose);
    }
  }
}
