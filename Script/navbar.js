let nav = document.getElementById("nav");
let navbar = () => {
  let navigation = `<div id="navbar">
      <a href="index.html">Index</a>
      <a href="admin.html">Admin</a>

      <a href="books.html">Books</a>
    </div>`;
  nav.innerHTML = navigation;
};
navbar();
