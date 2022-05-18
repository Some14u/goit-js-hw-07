import { galleryItems } from './gallery-items.js';
// Change code below this line

const CAPTION_DELAY = 250;

let modal;
const gallery = document.querySelector("ul.gallery");
const galleryMockup = buildGalleryMockup(galleryItems);

gallery.innerHTML = galleryMockup.join("\n");

new SimpleLightbox(
  'ul.gallery a',
  {
    captions: true,
    captionsData: "alt",
    captionDelay: CAPTION_DELAY,
    disableScroll: false, // Пришлось отключить, потому что у них оно коряво реализовано, и сдвигает всю галлерею
  }
);

function buildGalleryMockup(items) {
  return items.map(makeItemMockup);
};

function makeItemMockup ({preview, original, description}) {
  // Вынужден был добавить инлайн-стили, иначе вылезают косяки с разметкой
  return `
  <li>
    <a class="gallery__item" href="${original}" style="display: block; height: 100%">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>`
};

