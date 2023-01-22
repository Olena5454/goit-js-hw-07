import { galleryItems } from "./gallery-items.js";
// Change code below this line



console.log(galleryItems);
const containerGallery = document.querySelector(".gallery");

function galleryItemsCards(galleryItems) {
    return galleryItems
        .map(
            ({ preview, original, description }) =>
                `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`
        )
        .join("");

}

containerGallery.insertAdjacentHTML(
    "beforeend",
    galleryItemsCards(galleryItems)
);

containerGallery.addEventListener("click", onClickItemsCards);

function onClickItemsCards(e) {
    if (e.target.nodeName !== "IMG") {
        return;
    }
    e.preventDefault();

    const instance = basicLightbox.create(`
          <img src="${e.target.dataset.source}" width="800" height="600">
   `);

    instance.show();
    window.addEventListener("keydown", onEscapePress);
    function onEscapePress(e) {
        if (e.code === "Escape") {
            window.removeEventListener("keydown", onEscapePress);
            instance.close();
        }
    }
};





