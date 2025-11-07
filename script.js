var aboutMe = ["Computer Systems Engineering Student", "Software Developer"];
var p = document.querySelector(".about-me");
var i = 0,
  isAdding = true,
  typed = 0;

function typing() {
  setTimeout(
    function () {
      p.innerText = aboutMe[typed].slice(0, i);
      if (isAdding) {
        if (i > aboutMe[typed].length) {
          isAdding = false;
          setTimeout(function () {
            typing();
          }, 2000);
          return;
        } else {
          i++;
        }
      } else {
        if (i === 0) {
          isAdding = true;
          typed = (typed + 1) % aboutMe.length;
        } else {
          i--;
        }
      }
      typing();
    },
    isAdding ? 120 : 60
  );
}

typing();

AOS.init();

window.addEventListener("load", function () {
  AOS.refresh();
});
