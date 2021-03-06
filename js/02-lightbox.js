import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imagesList = document.querySelector(".gallery");

const createGallery = galleryItems.map(
  (image) => `<a class="gallery__item" href="${image.original}">
  <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a>`
);

imagesList.insertAdjacentHTML(`beforeend`, createGallery.join(""));

////

const lightbox = new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});
