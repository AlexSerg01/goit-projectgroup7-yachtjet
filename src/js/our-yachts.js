export function rotateYachtsList() {
  var yachtsList = document.querySelector('.yachts-list');
  var prevButton = document.querySelector('.rotate-left');
  var nextButton = document.querySelector('.rotate-right');

  var currentIndex = 0; // Поточний індекс видимого елемента

  var intervalId = setInterval(function () {
    rotateList(yachtsList, 1); // Передача 1 для руху вліво
  }, 10000);

  prevButton.addEventListener('click', function () {
    rotateList(yachtsList, -1); // Передача -1 для руху вправо
    clearInterval(intervalId);
  });

  nextButton.addEventListener('click', function () {
    rotateList(yachtsList, 1); // Передача 1 для руху вліво
    clearInterval(intervalId);
  });

  function rotateList(list, direction) {
    var items = list.children;
    var firstItem = items[0];
    var lastItem = items[items.length - 1];

    // Визначення напрямку руху
    if (direction === 1) {
      currentIndex = (currentIndex + 1) % items.length;
    } else {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
    }

    list.style.transition = 'transform 0.5s ease-in-out';
    list.style.transform =
      'translateX(-' + currentIndex * firstItem.offsetWidth + 'px)';

    // Оновлення видимого елемента
    list.insertBefore(lastItem, firstItem);

    // Зняття анімації після завершення перегортання
    setTimeout(function () {
      list.style.transition = 'none';
      list.style.transform = 'translateX(0)';
    }, 500);
  }
}
