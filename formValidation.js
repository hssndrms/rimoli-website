// This script handles the form Validation
document.addEventListener('DOMContentLoaded', function() {
  const formEl = document.querySelector('#contact form');
  if (formEl) {
    formEl.addEventListener('submit', function(e) {
      const name = formEl.querySelector('#name');
      const company = formEl.querySelector('#company');
      const email = formEl.querySelector('#email');
      const phone = formEl.querySelector('#phone');
      const subject = formEl.querySelector('#subject');
      const message = formEl.querySelector('#message');
      // E-posta format kontrolü için regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      // Türkiye için telefon numarası kontrolü (başında 0 veya +90 olabilir, 10 hane rakam)
      const phoneRegex = /^(?:\+90|0)?\s?\d{10}$/;
      if (
        !name.value.trim() ||
        !company.value.trim() ||
        !email.value.trim() ||
        //!phone.value.trim() ||
        !subject.value.trim() ||
        !message.value.trim()
      ) {
        e.preventDefault();
        alert('Lütfen tüm alanları doldurunuz.');
        return false;
      }
      if (!emailRegex.test(email.value.trim())) {
        e.preventDefault();
        alert('Lütfen geçerli bir e-posta adresi giriniz.');
        email.focus();
        return false;
      }
      if (phone.value.trim()!='' && !phoneRegex.test(phone.value.replace(/\D/g, ''))) {
        e.preventDefault();
        alert('Lütfen geçerli bir telefon numarası giriniz. (Örn: 05321234567 veya +905321234567)');
        phone.focus();
        return false;
      }
    });
  }
});
