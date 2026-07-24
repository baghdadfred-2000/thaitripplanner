/* =========================================================
   ThaiTripPlanner — SHARED SITE JS
   Injects the shared footer (with MailerLite subscribe form) on every
   page so footer edits happen in ONE place.
   Each page uses, in place of the old inline <footer>:
     <div id="site-footer"></div>
     <script src="/assets/site.js" defer></script>  (before </body>)
   Uses absolute paths so it works from / and /destinations/ alike.
   ========================================================= */

/* MailerLite subscribe block (same form/list as the other sites, tagged
   Company=ThaiTripPlanner so signups are traceable to this site). */
function subscribeHTML() {
  return `
        <div id="mlb2-44063259" class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-44063259 mt-6 max-w-xs">
          <div class="ml-form-embedWrapper">
            <div class="ml-form-embedBody row-form">
              <h3 class="font-semibold text-white mb-1 text-sm">Subscribe</h3>
              <p class="text-xs text-sand-100/60 mb-3">Thailand travel tips, new destination guides and exclusive offers.</p>
              <form class="ml-block-form" action="https://assets.mailerlite.com/jsonp/2528952/forms/193796763912504673/subscribe" data-code="" method="post" target="_blank">
                <div class="ml-form-fieldRow">
                  <input aria-label="email" aria-required="true" type="email" name="fields[email]" placeholder="Enter your email" autocomplete="email" required
                    class="w-full px-4 py-2.5 rounded-md bg-sand-100 text-night-900 placeholder-night-900/50 text-sm border border-transparent focus:outline-none focus:ring-2 focus:ring-teal-300">
                </div>
                <input type="hidden" name="fields[company]" value="ThaiTripPlanner">
                <input type="hidden" name="ml-submit" value="1">
                <div class="ml-form-embedSubmit mt-3">
                  <button type="submit" class="primary inline-flex items-center justify-center px-6 py-2.5 rounded-md bg-night-800 text-white text-sm font-semibold border border-white/25 hover:border-teal-300 hover:text-teal-300 transition-colors">Subscribe</button>
                  <button disabled="disabled" style="display:none" type="button" class="loading inline-flex items-center justify-center px-6 py-2.5 rounded-md bg-night-800 text-white text-sm font-semibold border border-white/25">
                    <div class="ml-form-embedSubmitLoad"></div><span class="sr-only">Loading...</span>
                  </button>
                </div>
                <input type="hidden" name="anticsrf" value="true">
              </form>
            </div>
            <div class="ml-form-successBody row-success" style="display:none">
              <div class="ml-form-successContent">
                <h3 class="font-semibold text-white mb-1 text-sm">Subscribe</h3>
                <p class="text-sm text-teal-300 font-medium">Thank you — you're on the list! 🎉</p>
              </div>
            </div>
          </div>
        </div>`;
}

function footerHTML() {
  var showSignup = !(document.body && document.body.hasAttribute('data-no-signup'));
  return `
  <footer class="bg-night-900 text-sand-100/80 pt-14 pb-8 border-t border-white/10">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid gap-10 md:grid-cols-3">
        <div>
          <a href="/index.html" class="flex items-center gap-2"><span class="text-2xl">🪷</span><span class="font-display text-xl font-bold text-white">Thai<span class="text-teal-300">TripPlanner</span></span></a>
          ${showSignup ? subscribeHTML() : ''}
        </div>
        <div>
          <h3 class="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Explore</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="/about.html" class="hover:text-teal-300">About</a></li>
            <li><a href="/index.html#planner" class="hover:text-teal-300">Start Planning</a></li>
            <li><a href="/destinations.html" class="hover:text-teal-300">Destinations</a></li>
            <li><a href="/contact.html" class="hover:text-teal-300">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 class="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Network Sites</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="https://thaithuk.com" target="_blank" rel="noopener" class="hover:text-teal-300">ThaiThuk</a></li>
            <li><a href="https://thaivisafinder.com" target="_blank" rel="noopener" class="hover:text-teal-300">ThaiVisaFinder</a></li>
            <li><a href="https://thaiholidaybudget.com" target="_blank" rel="noopener" class="hover:text-teal-300">ThaiHolidayBudget</a></li>
            <li><a href="https://thailetters.com" target="_blank" rel="noopener" class="hover:text-teal-300">ThaiLetters</a></li>
            <li><a href="https://thailotterynumbers.com" target="_blank" rel="noopener" class="hover:text-teal-300">ThaiLotteryNumbers</a></li>
          </ul>
        </div>
      </div>
      <div class="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-sand-100/60">
        <p>© 2026 Genext Information Systems. All rights reserved.</p>
        <nav class="flex flex-wrap gap-4 justify-center" aria-label="Legal">
          <a href="/privacy.html" class="hover:text-teal-300">Privacy</a>
          <a href="/terms.html" class="hover:text-teal-300">Terms</a>
          <a href="/disclaimer.html" class="hover:text-teal-300">Disclaimer</a>
          <a href="/cookies.html" class="hover:text-teal-300">Cookies</a>
          <a href="/accessibility.html" class="hover:text-teal-300">Accessibility</a>
          <a href="/cookie-settings.html" class="hover:text-teal-300">Cookie Settings</a>
        </nav>
      </div>
    </div>
  </footer>`;
}

/* Extra CSS the Tailwind theme doesn't cover (spinner + a11y helper). */
var TTP_STYLE = `
.ml-form-embedSubmitLoad{display:inline-block;width:20px;height:20px}
.ml-form-embedSubmitLoad:after{content:" ";display:block;width:11px;height:11px;margin:1px;border-radius:50%;border:3px solid #fff;border-color:#fff #fff #fff transparent;animation:ttp-sub-spin 1.2s linear infinite}
@keyframes ttp-sub-spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}
.ml-subscribe-form .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}
`;

/* MailerLite success callback (swaps form for the thank-you message). */
window.ml_webform_success_44063259 = function () {
  var $ = window.ml_jQuery || window.jQuery;
  if ($) {
    $('.ml-subscribe-form-44063259 .row-success').show();
    $('.ml-subscribe-form-44063259 .row-form').hide();
  } else {
    document.querySelectorAll('.ml-subscribe-form-44063259 .row-success')
      .forEach(function (el) { el.style.display = ''; });
    document.querySelectorAll('.ml-subscribe-form-44063259 .row-form')
      .forEach(function (el) { el.style.display = 'none'; });
  }
};

function initMailerLite() {
  if (!document.querySelector('.ml-subscribe-form-44063259')) return;
  if (!document.getElementById('ml-webforms-js')) {
    var s = document.createElement('script');
    s.id = 'ml-webforms-js';
    s.src = 'https://groot.mailerlite.com/js/w/webforms.min.js?v83147fa8ce2d95cb73ece7f28b469519';
    s.async = true;
    document.body.appendChild(s);
  }
  try {
    fetch('https://assets.mailerlite.com/jsonp/2528952/forms/193796763912504673/takel');
  } catch (e) {}
}

/* ---------- BOOT ---------- */
document.addEventListener('DOMContentLoaded', function () {
  if (!document.getElementById('ttp-footer-css')) {
    var st = document.createElement('style');
    st.id = 'ttp-footer-css';
    st.textContent = TTP_STYLE;
    document.head.appendChild(st);
  }
  var f = document.getElementById('site-footer');
  if (f) f.outerHTML = footerHTML();
  initMailerLite();
});
