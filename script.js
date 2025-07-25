// Oddiy forma yuborish alerti
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Xabaringiz yuborildi! Tez orada javob beramiz.");
  this.reset();
});
