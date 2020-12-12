// DOM
const profileImg = document.getElementById('profile-img');

// PROFILE HOVER
profileImg.addEventListener('mouseenter', () => {
  profileImg.classList.add('enlarge');
});
profileImg.addEventListener('mouseleave', () => {
  profileImg.classList.remove('enlarge');
});

const scrollLink = $('.scroll');

scrollLink.click(function(e) {
  e.preventDefault();
  $('body,html').animate(
    {
      scrollTop: $(this.hash).offset().top
    },
    700
  );
});

const scrollLinkFast = $('.scroll-fast');

scrollLinkFast.click(function(e) {
  e.preventDefault();
  $('body,html').animate(
    {
      scrollTop: $(this.hash).offset().top
    },
    300
  );
});

const scrollLinkSlow = $('.scroll-slow');

scrollLinkSlow.click(function(e) {
  e.preventDefault();
  $('body,html').animate(
    {
      scrollTop: $(this.hash).offset().top
    },
    1000
  );
});
