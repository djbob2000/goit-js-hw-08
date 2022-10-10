// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainerRef = document.querySelector('.gallery');
const markupGallery = createMarkupGallery(galleryItems);
galleryContainerRef.insertAdjacentHTML('beforeend', markupGallery);
// запускаем лайтбокс
initializeLightbox();

function initializeLightbox() {
  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
    captionPosition: 'bottom',
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
  });
}

function createMarkupGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
      `;
    })
    .join('');
}
