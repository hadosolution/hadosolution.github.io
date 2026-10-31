(function () {
  var root = document.documentElement;
  var header = document.querySelector('.site-header');
  var navToggle = document.querySelector('.nav-toggle');
  var themeToggle = document.querySelector('.theme-toggle');

  // Mobile menu
  function setNav(open) {
    header.classList.toggle('nav-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
  }
  if (navToggle) {
    navToggle.addEventListener('click', function () {
      setNav(!header.classList.contains('nav-open'));
    });
    document.querySelectorAll('.nav-menu a').forEach(function (link) {
      link.addEventListener('click', function () { setNav(false); });
    });
  }

  // Theme toggle
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  // Footer year
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
