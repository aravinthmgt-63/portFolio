    // Tab switching
    var taplinks = document.getElementsByClassName("tab-links");
    var tapcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname) {
      for (var tl of taplinks) tl.classList.remove("active-links");
      for (var tc of tapcontents) tc.classList.remove("active-tab");
      event.currentTarget.classList.add("active-links");
      document.getElementById(tabname).classList.add("active-tab");
    }

    // Mobile menu
    function toggleMenu() {
      document.getElementById('hamburger').classList.toggle('open');
      document.getElementById('mobileNav').classList.toggle('open');
    }
    function closeMenu() {
      document.getElementById('hamburger').classList.remove('open');
      document.getElementById('mobileNav').classList.remove('open');
    }

    // Contact form
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxO9YNGSkIUGj6Yh41XkRg4SI-rsfHa48ofbZUpOoA_sX0r_FQ5ZjdDI2OgCnMjxFyq/exec';
    const form = document.forms['submit-to-google-sheet'];
    const mess = document.getElementById("mess");
    form.addEventListener('submit', e => {
      e.preventDefault();
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(() => {
          mess.innerHTML = "✓ Message sent successfully!";
          setTimeout(() => { mess.innerHTML = ""; }, 6000);
          form.reset();
        })
        .catch(err => console.error('Error!', err.message));
    });
