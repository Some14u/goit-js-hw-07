import { galleryItems } from './gallery-items.js';
// Change code below this line

let modal;
const gallery = document.querySelector("div.gallery");
const galleryMockup = buildGalleryMockup(galleryItems);

console.log(VK_CONTROL);

gallery.innerHTML = galleryMockup.join("\n");

gallery.addEventListener("click", showBigImage);

function showBigImage(event) {
  event.preventDefault();
  modal = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`,
    {
      onShow: addEscCallback,
      onClose: removeEscCallback,
    }
  );
  modal.show();
}

function addEscCallback() {
  window.addEventListener("keydown", keydownEscHandler)
};

function removeEscCallback() {
  window.removeEventListener("keydown", keydownEscHandler)
};

function keydownEscHandler({key}) {
  if (key === "Escape") modal.close();
};

function buildGalleryMockup(items) {
  return items.map(makeItemMockup);
};

function makeItemMockup ({preview, original, description}) {
  return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`
};

