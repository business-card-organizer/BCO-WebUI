var animateHTML = function() {
  const elements = document.querySelectorAll('.hide');
  const windowHeight = window.innerHeight;
  function init() {
    addEventHandlers();
    checkPosition();
  }
  function addEventHandlers() {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  }
  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var positionFromTop = elements[i].getBoundingClientRect().top;
      // console.log(elements[i], positionFromTop, windowHeight);
      // console.log(positionFromTop - windowHeight <= 10);
      if (positionFromTop - windowHeight <= -350) {
        elements[i].className = elements[i].className.replace(
          'hide',
          'fade-in-element'
        );
        // console.log(elements[i].className)
      }
    }
  }
  return {
    init: init
  };
};

const refactorHeight = function(){
  elements = document.querySelectorAll('.hide');
  Array.from(elements).map(element => element.style.height = `${window.innerHeight - 100}px`);
}
refactorHeight();
animateHTML().init();
