import { baseUrl } from "./baseUrl.js";

let form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let email = form.email.value;
  let password = form.password.value;
  let adminobj = { email, password };

  // fetch api
  fetch(`${baseUrl}/admin`)
    .then((res) => res.json())
    .then((data) => {
      let user = data.filter((el) => el.Email == email);
      if (user.lenght != 0) {
        if (user[0].password == password) {
          alert("Logged in as admin ");
          localStorage.setItem("loginData", JSON.stringify(user[0]));
          window.location.href = "/DomBookApp/admin.html";
        } else {
          alert("password incorrect");
        }
      } else {
        alert("admin not present");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
// user login form
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let email = form.email.value;
  let password = form.password.value;
  let adminobj = { email, password };

  // fetch api
  fetch(`${baseUrl}/user`)
    .then((res) => res.json())
    .then((data) => {
      let user = data.filter((el) => el.Email == email);
      if (user.lenght != 0) {
        if (user[0].password == password) {
          alert("Logged in as user ");
          localStorage.setItem("loginData", JSON.stringify(user[0]));
          window.location.href = "/DomBookApp/books.html";
        } else {
          alert("password incorrect");
        }
      } else {
        alert("User not present");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
