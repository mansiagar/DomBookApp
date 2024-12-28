import { baseUrl } from "./baseUrl.js";

window.onload = () => {
  let data = JSON.parse(localStorage.getItem("loginData"));
  if (data) {
    alert(`Welcome`);
  } else {
    alert("User not logged in");
    window.location.href = "/index.html";
  }
};
