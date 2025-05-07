$(document).ready(function () {
    const form = $('#validationForm');
    const messageBox = $('#messageBox');
  
    // Toggle password visibility
    $('#togglePassword').on('click', function () {
      const passwordInput = $('#password');
      const type = passwordInput.attr('type') === 'password' ? 'text' : 'password';
      passwordInput.attr('type', type);
      $(this).text(type === 'password' ? 'Show' : 'Hide');
    });
  
    // Validate email with regex
    function isValidEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
  
    // Validate password format
    function isValidPassword(password) {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
      return regex.test(password);
    }
  
    // Show message
    function showMessage(type, text) {
      messageBox.removeClass('error success').addClass(type).text(text).slideDown();
    }
  
    form.on('submit', function (e) {
      e.preventDefault();
  
      const name = $('#name').val().trim();
      const email = $('#email').val().trim();
      const phone = $('#phone').val().trim();
      const password = $('#password').val().trim();
  
      // Validation checks
      if (!name || !email || !phone || !password) {
        return showMessage('error', 'All fields are required.');
      }
  
      if (!isValidEmail(email)) {
        return showMessage('error', 'Please enter a valid email.');
      }
  
      if (!/^\d{10}$/.test(phone)) {
        return showMessage('error', 'Phone number must be 10 digits.');
      }
  
      if (!isValidPassword(password)) {
        return showMessage('error', 'Password must be at least 6 characters with uppercase, lowercase, and a number.');
      }
  
      showMessage('success', 'Form submitted successfully!');
      form[0].reset(); // Clear form
      $('#togglePassword').text('Show');
    });
  });
  