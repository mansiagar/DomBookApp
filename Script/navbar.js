let nav = document.getElementById("nav");
let navbar = () => {
  let navigation = `<div id="navbar">
  <a href="/DomBookApp/index.html">Index</a>
  <a href="/DomBookApp/admin.html">Admin</a>
  <a href="/DomBookApp/books.html">Books</a>
</div>
`;
  nav.innerHTML = navigation;
};
navbar();
