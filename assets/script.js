// Nav toggle (mobile)
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('nav.main');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Simple tab switcher: elements with [data-tab-group] / [data-tab] and [data-tab-target]
  document.querySelectorAll('[data-tab-target]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var group = btn.closest('[data-tab-group]');
      if (!group) return;
      group.querySelectorAll('.tab-btn').forEach(function (b) { b.classList.remove('active'); });
      group.querySelectorAll('.tab-panel').forEach(function (p) { p.classList.remove('active'); });
      btn.classList.add('active');
      var target = group.querySelector('#' + btn.getAttribute('data-tab-target'));
      if (target) target.classList.add('active');
    });
  });

  // Scroll reveal: fade/slide in cards, steps, stats and callouts as they enter view.
  // Class is added entirely from JS so pages render normally with JS disabled.
  var revealEls = document.querySelectorAll('.card, .step, .stat, .callout, .rubric-card');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el, i) {
      el.classList.add('reveal');
      el.style.transitionDelay = (Math.min(i % 6, 5) * 0.06) + 's';
      io.observe(el);
    });
  }
});
