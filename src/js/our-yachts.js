export function rotateYachtsList() {
  // Функція обертання
  function rotate() {
    var yachtsList = document.querySelector('.yachts-list');
    var firstItem = yachtsList.firstElementChild;
    yachtsList.appendChild(firstItem);
  }

  // Функція, яка визначає, чи слід виконувати обертання
  function shouldRotate() {
    return window.innerWidth <= 1279;
  }

  // Зберігаємо початковий порядок елементів
  var initialOrder = Array.from(document.querySelectorAll('.yachts-list > li'));

  // Запускаємо обертання при завантаженні сторінки
  rotate();

  // Викликати функцію обертання та відновлення початкового порядку при зміні розміру вікна
  window.addEventListener('resize', function () {
    var yachtsList = document.querySelector('.yachts-list');

    if (shouldRotate()) {
      rotate();
    } else {
      // Відновлюємо початковий порядок елементів
      yachtsList.innerHTML = '';
      initialOrder.forEach(function (item) {
        yachtsList.appendChild(item);
      });
    }
  });

  // Запускаємо обертання кожні 5 секунд, якщо розмір екрану відповідає умові
  setInterval(function () {
    if (shouldRotate()) {
      rotate();
    }
  }, 5000);
}
