window.addEventListener("load", () => {
  console.log("loaded");
  //   this.state
  let users = [];
  let name = "";
  let email = "";
  let password = "";
  //   Elements
  let form = document.getElementsByTagName("form")[0];
  let nameInput = document.getElementById("name");
  let emailInput = document.getElementById("email");
  let passwordInput = document.getElementById("password");
  let submitButton = document.querySelector("input[type=submit]");
  let userList = document.getElementById("user-list");
  // Form Listener
  form.addEventListener("submit", event => {
    event.preventDefault();
  });
  //   nameInput Listener
  nameInput.addEventListener("keypress", event => {
    name = event.target.value;
    console.log("name", name);
  });
  //   emailInput Listener
  emailInput.addEventListener("keypress", event => {
    email = event.target.value;
    console.log("email", email);
  });
  //   passwordInput Listener
  passwordInput.addEventListener("keypress", event => {
    password = event.target.value;
    console.log("password", password);
  });
  //   Submit Listener
  submitButton.addEventListener("click", event => {
    console.log("clicked");
    console.log(name, email, password);
    let user = {
      name,
      email,
      password
    };
    users.push(user);
    console.log(users);
    let mappedUsers = users.map(user => {
      return `
        <h1>${user.name}</h1>
      `;
    });
    userList.innerHTML = `${mappedUsers}`;
  });
});
