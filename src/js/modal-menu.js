(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }
})();
document.addEventListener('DOMContentLoaded', function () {
  // Знаходимо елементи списку меню
  var menuItems = document.querySelectorAll('.mobile-menu-item-link');

  // Додаємо обробник події для кожного елемента меню
  menuItems.forEach(function (item) {
    item.addEventListener('click', function () {
      // Закриваємо модальне вікно при натисканні на елемент меню
      closeModal();
    });
  });

  // Функція для закриття модального вікна
  function closeModal() {
    var modal = document.querySelector('[data-modal]');
    if (modal) {
      modal.classList.remove('is-open');
    }
  }
});
