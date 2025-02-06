// script.js
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário
  
    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;
  
    if (username && password) {
      alert(`Welcome, ${username}!`);
    } else {
      alert('Please fill in all fields.');
    }
  });