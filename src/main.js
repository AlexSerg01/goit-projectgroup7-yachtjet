// У файлі script2.js
import { rotateYachtsList } from './js/our-yachts';

// Викликайте функцію, імпортовану з іншого файлу, коли DOM готовий
document.addEventListener('DOMContentLoaded', function () {
  rotateYachtsList();
});
