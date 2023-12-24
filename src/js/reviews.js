export function rotateYachtsListSection() {
  function rotateYachts() {
    const yachtsList = document.querySelector('.reviews-customers-list'); // Оновлений клас
    const firstItem = yachtsList.firstElementChild;
    yachtsList.appendChild(firstItem);
  }

  function shouldRotateYachts() {
    return window.innerWidth <= 1279;
  }

  const initialYachtsOrder = Array.from(
    document.querySelectorAll('.reviews-customers-list-item')
  );

  rotateYachts();

  window.addEventListener('resize', function () {
    const yachtsList = document.querySelector('.reviews-customers-list'); // Оновлений клас

    if (shouldRotateYachts()) {
      rotateYachts();
    } else {
      yachtsList.innerHTML = '';
      initialYachtsOrder.forEach(function (item) {
        yachtsList.appendChild(item);
      });
    }
  });

  setInterval(function () {
    if (shouldRotateYachts()) {
      rotateYachts();
    }
  }, 5000);
}
