/* ═══════════════════════════════════════════════════════════════
   SEMESTER TECHNOLOGIES — Theme Toggle + Scroll Reveal + Counters
   ═══════════════════════════════════════════════════════════════ */

(function () {
  "use strict";

  /* ── Theme Toggle ── */
  const STORAGE_KEY = "sem-theme";

  function getPreferred() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }

  // Apply immediately (before DOMContentLoaded to prevent flash)
  applyTheme(getPreferred());

  document.addEventListener("DOMContentLoaded", function () {
    // Inject toggle button
    var toggle = document.createElement("button");
    toggle.className = "theme-toggle";
    toggle.setAttribute("aria-label", "Toggle light/dark theme");
    toggle.innerHTML =
      '<span class="icon-sun">\u2600\uFE0F</span><span class="icon-moon">\uD83C\uDF19</span>';
    document.body.appendChild(toggle);

    toggle.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme");
      applyTheme(current === "dark" ? "light" : "dark");
    });

    /* ── Scroll Reveal ── */
    var reveals = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale"
    );

    if (reveals.length === 0) {
      // Auto-assign reveal classes to major sections
      var sections = document.querySelectorAll(
        ".section-header, .service-card, .feature2-card, .project-card, " +
        ".how-we-do-card, .testimonial-item-body, .hero-company-box, " +
        ".arch-card, .pillar-card, .case-card, .stat-card, .bundle-card, " +
        ".tech-card, .career-box, .contact-info-box, .quiz-box, " +
        ".tri-cta-card, .logo-tile, .workflow-step, .svc-item, " +
        ".faq-item, .story-loop"
      );
      sections.forEach(function (el) {
        el.classList.add("reveal");
      });

      // Re-query after adding classes
      reveals = document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right, .reveal-scale"
      );
    }

    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
      );

      reveals.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      // Fallback: show everything
      reveals.forEach(function (el) {
        el.classList.add("visible");
      });
    }

    /* ── Animated Counters ── */
    var counters = document.querySelectorAll(".counter, [data-count]");

    if (counters.length > 0) {
      var counterObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              animateCounter(entry.target);
              counterObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.3 }
      );

      counters.forEach(function (el) {
        counterObserver.observe(el);
      });
    }

    function animateCounter(el) {
      var target = parseInt(el.getAttribute("data-count") || el.textContent, 10);
      if (isNaN(target)) return;

      var suffix = el.textContent.replace(/[\d,]/g, "").trim();
      var duration = 1800;
      var start = 0;
      var startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        var current = Math.floor(eased * target);
        el.textContent = current.toLocaleString() + suffix;
        if (progress < 1) requestAnimationFrame(step);
      }

      requestAnimationFrame(step);
    }

    /* ── Smooth scroll for anchor links ── */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener("click", function (e) {
        var target = document.querySelector(this.getAttribute("href"));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  });
})();
