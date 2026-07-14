document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  var form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("多謝查詢！我們的團隊將盡快與您聯絡。\n（此為示範表格，請接駁至您的電郵服務或後端系統以正式接收查詢。）");
      form.reset();
    });
  }
});
