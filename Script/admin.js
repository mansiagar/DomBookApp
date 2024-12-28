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
  let title = form.title.value;

  let author = form.author.value;

  let category = form.category.value;
  let bookObj = { title, author, category };
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
window.onload = async function () {
  let arr = await getdata();
  displaydata(arr);
};
async function getdata() {
  try {
    let res = await fetch(`${baseUrl}/book`);
    let dataoj = res.json();
    return dataoj;
  } catch (err) {
    console.log(err);
  }
}

// display data arr
let displaydata = (arr) => {
  let container = document.getElementById("container");
  container.innerHTML = "";
  arr.map((el, i) => {
    let card = document.createElement("div");

    let title = document.createElement("h4");
    title.textContent = `Name : ${el.title}`;

    let author = document.createElement("h4");
    author.textContent = `Name : ${el.author}`;

    let category = document.createElement("h4");
    category.textContent = `Name : ${el.category}`;

    let btn1 = document.createElement("button");
    btn1.textContent = "Verify Book  ";
    btn1.addEventListener("click", function () {
      prompt("Are you sure to verify....?");
    });

    let btn2 = document.createElement("button");
    btn2.textContent = "Delete  Book  ";
    btn2.addEventListener("click", function () {
      prompt("Are you sure to Delete....?");
    });

    // append
    card.append(title, author, category, btn1, btn2);
    container.append(card);
  });
};
