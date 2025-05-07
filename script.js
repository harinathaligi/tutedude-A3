// Email regex function
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z]{2,4})+$/;
    return regex.test(email);
  }
  
  // Password format: min 8 characters, one uppercase, one lowercase, one number
  function isValidPassword(password) {
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
  }
  
  $("#submitbutton").click(function () {
    var errormessage = "";
    var missingfeild = "";
  
    $("#errors").html("");
    $("#success").html("");
  
    const email = $("#Email").val();
    const phone = $("#phoneno").val();
    const password = $("#password").val();
    const confirmPassword = $("#confirmpassword").val();
  
    // Check for empty fields
    if (email === "") missingfeild += "<p>Email not filled</p>";
    if (phone === "") missingfeild += "<p>Phone number not filled</p>";
    if (password === "") missingfeild += "<p>Password not filled</p>";
    if (confirmPassword === "") missingfeild += "<p>Confirm password not filled</p>";
  
    // Email format
    if (email && !isEmail(email)) errormessage += "<p>Email id is not valid</p>";
  
    // Phone validation: numeric and 10 digits
    if (phone && (!$.isNumeric(phone) || phone.length !== 10))
      errormessage += "<p>Phone number must be exactly 10 digits</p>";
  
    // Password strength
    if (password && !isValidPassword(password))
      errormessage +=
        "<p>Password must be at least 8 characters and include uppercase, lowercase, and a number</p>";
  
    // Password match
    if (password !== confirmPassword)
      errormessage += "<p>Passwords do not match</p>";
  
    if (errormessage === "" && missingfeild === "") {
      $("#success").html("You are registered");
    } else {
      $("#errors").html(errormessage + missingfeild);
    }
  });
  
  // Toggle password visibility
  $("#togglePassword").click(function () {
    const field = $("#password");
    const type = field.attr("type") === "password" ? "text" : "password";
    field.attr("type", type);
  });
  