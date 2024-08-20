var header = document.getElementById('Header');

window.addEventListener('scroll', ()=> {

    var scroll = window.scrollY

    if(scroll>10) {
        header.style.backgroundColor = 'rgba(24, 24, 24, 0.95)'
    } else {
        header.style.backgroundColor = 'transparent'
    }
})

var toggles = document.querySelectorAll(".c-hamburger");

for (var i = toggles.length - 1; i >= 0; i--) {
  var toggle = toggles[i];
  toggleHandler(toggle);
};

function toggleHandler(toggle) {
  toggle.addEventListener("click", function(e) {
    e.preventDefault();
    if (this.classList.contains("is-active") === true) {
      this.classList.remove("is-active");
      $('.open').removeClass('oppenned');
    } else {
      this.classList.add("is-active");
      $(".open").addClass('oppenned');
    }
  });
}
$(".sub-menu li a").click(function(event) {
  $(".open").removeClass('oppenned');
  $(".c-hamburger").removeClass('is-active');
});