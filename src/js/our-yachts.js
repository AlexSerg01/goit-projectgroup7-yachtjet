export function rotateYachtsList() {
  
  function rotate() {
    var yachtsList = document.querySelector('.yachts-list');
    var firstItem = yachtsList.firstElementChild;
    yachtsList.appendChild(firstItem);
  }

  
  function shouldRotate() {
    return window.innerWidth <= 1279;
  }

  
  var initialOrder = Array.from(document.querySelectorAll('.yachts-list > li'));

  
  rotate();

  
  window.addEventListener('resize', function () {
    var yachtsList = document.querySelector('.yachts-list');

    if (shouldRotate()) {
      rotate();
    } else {
      
      yachtsList.innerHTML = '';
      initialOrder.forEach(function (item) {
        yachtsList.appendChild(item);
      });
    }
  });

  
  setInterval(function () {
    if (shouldRotate()) {
      rotate();
    }
  }, 5000);
}
