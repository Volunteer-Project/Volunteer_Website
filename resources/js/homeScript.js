function passwordToggle() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function confirmToggle() {
  var x = document.getElementById("confirm");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

