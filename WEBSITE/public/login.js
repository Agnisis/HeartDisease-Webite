// login.js

document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const form = document.getElementById('LoginForm');
  
    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Get the input field values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      // Do something with the data
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Password:', password);
  
      // You can perform further actions here, such as making an API request or validating the data.
    });
  });
  