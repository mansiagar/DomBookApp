import { baseUrl } from "./baseUrl.js";

window.onload = () => {
  let data = JSON.parse(localStorage.getItem("loginData"));
  if (data) {
    alert(`Welcome`);
  } else {
    alert("Admin not logged in");
    window.location.href = "/index.html";
  }
};
// form
let form = document.getElementById("bookform");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let author = form.author.value;

  let category = form.category.value;
  let bookObj = { author };
  fetch(`${baseUrl}/book`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(bookObj),
  })
    .then(() => {
      alert("success");
    })
    .catch((err) => {
      console.log(err);
    });
});

// async function getdata() {
//   let res = fetch(`https://fluorescent-prism-flavor.glitch.me/book`);
//   let data = res.json();
//   console.log(data);
// }
// getdata();
