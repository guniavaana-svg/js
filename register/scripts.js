const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior (page reload)
  const formData = new FormData(form); // Access form data using the FormData constructor
  for (const [key, value] of formData.entries()) {
    // console.log(key, value);
    localStorage.setItem(key, value);
  }
  const newUser = {};
  for (let i = 0; i < localStorage.length; i++) {
    const localKey = localStorage.key(i);
    const localItem = localStorage.getItem(localKey);
    newUser[localKey] = localItem;
  }
  console.log(newUser);
 
});
// const u = JSON.parse(localStorage.getItem("auth"));
// console.log(u.user);
