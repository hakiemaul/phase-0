var usernameInput = document.getElementById('username');
var usernameValue = usernameInput.value;
usernameInput.addEventListener('input', function(event) {
  usernameValue = event.target.value;
});

var passInput = document.getElementById('password');
var passValue = passInput.value;
passInput.addEventListener('input', function(event) {
  passValue = event.target.value;
});

var passConfInput = document.getElementById('password-conf');
var passConfValue = passConfInput.value;
passConfInput.addEventListener('input', function(event) {
  passConfValue = event.target.value;
});

var emailInput = document.getElementById('email');
var emailValue = emailInput.value;
emailInput.addEventListener('input', function(event) {
  emailValue = event.target.value;
});

var emailConfInput = document.getElementById('email-conf');
var emailConfValue = emailConfInput.value;
emailConfInput.addEventListener('input', function(event) {
  emailConfValue = event.target.value;
});

var mainForm = document.getElementById('main-form');

var regex = /[\d\w]{7,}/g;

mainForm.addEventListener('submit', function(event) {
  event.preventDefault();
  if(usernameValue==='') {
    alert('Username tidak boleh kosong');
    return false;
  }
  if(passValue==='') {
    alert('Password tidak boleh kosong');
    return false;
  }
  if(!regex.test(passValue)) {
    alert('Password minimal 8 karakter huruf atau angka');
    return false;
  }
  if(passConfValue==='') {
    alert('Password Confirmation tidak boleh kosong');
    return false;
  }
  if(emailValue==='') {
    alert('Email tidak boleh kosong');
    return false;
  }
  if(emailConfValue==='') {
    alert('Email Confirmation tidak boleh kosong');
    return false;
  }
  if(passValue!==passConfValue) {
    alert('Password Confirmation tidak sesuai!');
    return false;
  }
  if(emailValue!==emailConfValue) {
    alert('Email Confirmation tidak sesuai!');
    return false;
  }
  alert('Sukses Submit!');
});
