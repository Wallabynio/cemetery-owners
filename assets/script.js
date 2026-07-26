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

  // ---------------------------------------------------------------
  // Slide decks — the "Presentation copy option" block on every page.
  // Progressive enhancement: the deck only becomes a carousel once this
  // runs and adds .ready. Without JS the slides just stack and read.
  // Nav: arrow buttons, left/right keyboard keys, touch swipe, dots.
  // ---------------------------------------------------------------
  var decks = [];

  document.querySelectorAll('[data-deck]').forEach(function (deck) {
    var stage = deck.querySelector('.deck-stage');
    var track = deck.querySelector('.deck-track');
    var slides = Array.prototype.slice.call(deck.querySelectorAll('.slide'));
    if (!stage || !track || slides.length < 2) return;

    var prev = deck.querySelector('.deck-nav.prev');
    var next = deck.querySelector('.deck-nav.next');
    var dotsWrap = deck.querySelector('.deck-dots');
    var curOut = deck.querySelector('[data-deck-cur]');
    var totalOut = deck.querySelector('[data-deck-total]');
    var index = 0;
    var dots = [];

    if (totalOut) totalOut.textContent = String(slides.length);

    slides.forEach(function (s, i) {
      s.setAttribute('role', 'group');
      s.setAttribute('aria-roledescription', 'slide');
      s.setAttribute('aria-label', 'Slide ' + (i + 1) + ' of ' + slides.length);

      if (dotsWrap) {
        var d = document.createElement('button');
        d.type = 'button';
        d.className = 'deck-dot';
        d.setAttribute('role', 'tab');
        d.setAttribute('aria-label', 'Go to slide ' + (i + 1));
        d.addEventListener('click', function () { go(i); });
        dotsWrap.appendChild(d);
        dots.push(d);
      }
    });

    function go(i, focusStage) {
      index = Math.max(0, Math.min(slides.length - 1, i));
      track.style.transform = 'translateX(' + (-100 * index) + '%)';

      slides.forEach(function (s, n) {
        var off = n !== index;
        s.setAttribute('aria-hidden', off ? 'true' : 'false');
        if (off) { s.setAttribute('inert', ''); } else { s.removeAttribute('inert'); }
      });
      dots.forEach(function (d, n) {
        d.setAttribute('aria-selected', n === index ? 'true' : 'false');
      });

      if (prev) prev.disabled = index === 0;
      if (next) next.disabled = index === slides.length - 1;
      if (curOut) curOut.textContent = String(index + 1);
      if (focusStage) stage.focus({ preventScroll: true });
    }

    if (prev) prev.addEventListener('click', function () { go(index - 1); });
    if (next) next.addEventListener('click', function () { go(index + 1); });

    // Touch swipe
    var x0 = null, y0 = null;
    stage.addEventListener('touchstart', function (e) {
      x0 = e.changedTouches[0].clientX;
      y0 = e.changedTouches[0].clientY;
    }, { passive: true });
    stage.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      var dy = e.changedTouches[0].clientY - y0;
      // Horizontal intent only, so vertical scrolling inside a slide still works
      if (Math.abs(dx) > 44 && Math.abs(dx) > Math.abs(dy) * 1.5) {
        go(index + (dx < 0 ? 1 : -1));
      }
      x0 = null; y0 = null;
    }, { passive: true });

    stage.setAttribute('tabindex', '0');
    deck.classList.add('ready');
    go(0);

    // Track whether this deck is on screen, so the arrow keys only drive
    // the deck the reader is actually looking at.
    deck._visible = true;
    if ('IntersectionObserver' in window) {
      deck._visible = false;
      new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { deck._visible = en.isIntersecting; });
      }, { threshold: 0.35 }).observe(stage);
    }

    decks.push({ el: deck, go: function (i) { go(i); }, at: function () { return index; } });
  });

  if (decks.length) {
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      var t = e.target;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;

      var target = decks.filter(function (d) { return d.el._visible; })[0] || (decks.length === 1 ? decks[0] : null);
      if (!target) return;
      target.go(target.at() + (e.key === 'ArrowRight' ? 1 : -1));
      e.preventDefault();
    });
  }

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
