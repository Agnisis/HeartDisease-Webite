// register.js

document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    registrationForm.addEventListener('submit', handleRegistration);
  });
  
  function handleRegistration(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Send the registration data to the server
    fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        // Registration was successful, redirect to login page
        window.location.href = '/login.html';
      } else {
        // Registration failed, display an error message
        const errorElement = document.createElement('p');
        errorElement.textContent = data.message;
        registrationForm.appendChild(errorElement);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  