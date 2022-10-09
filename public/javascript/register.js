function validateForm() {
  const email = document.getElementById("email").value;
  const uname = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const cpassword = document.getElementById("cpassword").value;
  console.log(email, uname, password, cpassword);
  if (uname != "") {
    if (!email || email) {
      if (password != "") {
        if (password == cpassword) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
