{/* <script> */}
  document.querySelector("#login").addEventListener("click", Loginpage);

  function Loginpage(event) {
    event.preventDefault();
    window.location.href = "login.html";
  }

  document.querySelector("#signup").addEventListener("click", SignupPage);

  function SignupPage(event) {
    event.preventDefault();
    window.location.href = "signup.html";
  }

  document.querySelector("#home").addEventListener("click", Homepage);

  function Homepage(event) {
    event.preventDefault();
    window.location.href = "index.html";
  }
{/* </script> */}