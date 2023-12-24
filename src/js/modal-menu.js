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
  var menuItems = document.querySelectorAll('.mobile-menu-item-link');

  menuItems.forEach(function (item) {
    item.addEventListener('click', function () {
      closeModal();
    });
  });

  function closeModal() {
    var modal = document.querySelector('[data-modal]');
    if (modal) {
      modal.classList.remove('is-open');
    }
  }
});
