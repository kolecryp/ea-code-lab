const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}
document.querySelectorAll('[data-year]').forEach(el => {
  el.textContent = new Date().getFullYear();
});
const form = document.querySelector('#contact-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const recipient = 'YOUR_EMAIL_ADDRESS_HERE';
    if (recipient === 'YOUR_EMAIL_ADDRESS_HERE') {
      alert('Before publishing, replace YOUR_EMAIL_ADDRESS_HERE in assets/main.js with your business email address.');
      return;
    }
    const subject = encodeURIComponent('EA Code Lab enquiry: ' + data.get('topic'));
    const body = encodeURIComponent(
      'Name: ' + data.get('name') + '\n' +
      'Email: ' + data.get('email') + '\n' +
      'Topic: ' + data.get('topic') + '\n\n' +
      'Project details:\n' + data.get('message')
    );
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  });
}
