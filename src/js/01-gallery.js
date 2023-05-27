import { galleryItems } from "./gallery-items.js";
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const ulLink = document.querySelector(".gallery");
ulLink.insertAdjacentHTML("beforeend", createImageGallery(galleryItems));

function createImageGallery(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>
        `).join("");
}

const myGallery = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 300,
});