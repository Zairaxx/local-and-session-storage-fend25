//Sätter en cookie

let createCookie = () => {
    document.cookie = "username=Brandon; expires=Fri, 31 Dec 2026 23:59:59 UTC; path=/; Secure; SameSite=Strict";
}
//Hämta cookies
let usernameInput = document.querySelector("#username");
let passwordInput = document.querySelector("#password");
let todoInput = document.querySelector("#todo")
let registerBtn = document.querySelector("#register");
let loginBtn = document.querySelector("#logIn");
let logoutBtn = document.querySelector("#logout");
let addTodoBtn = document.querySelector("#addTodo")
let todoList = document.querySelector("#todoList")

const registerUser = () => {

    //Skapa nytt användarobjekt
    let user = {
            name: usernameInput.value,
            password: passwordInput.value,
            id: Date.now(),
    }
    let users;

let newCookie = () => {
    document.cookie = "isSecondVisit=true; expires=Fri, 31 Dec 2026 23:59:59 UTC; path=/; Secure; SameSite=Strict";
}

console.log(document.cookie);

function getCookie(name) {
  const cookies = document.cookie.split("; ");
  console.log(cookies);

  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    console.log([key, value]);
    if (key === name) {
      return value;
    //Skriv ut hälsning till inloggad användare 
    if(existingUser){
        //Lagra användare i sessionStorage
        sessionStorage.setItem("loggedIn", JSON.stringify(existingUser))
        let h2 = document.createElement("h2");
        h2.innerText = `Välkommen! Du är nu inloggad som ${existingUser.name}!`
        
        //Visa logga-ut knapp
        logoutBtn.classList.remove("hidden");
        document.body.append(h2);
        renderTodoList();
    } else {
        alert("Misslyckad inloggning!")
    }
  }
  
  return null;
}

console.log(getCookie("username")); // "Brandon"

function setCookie(name, value, days) {
  let cookie = `${name}=${value}; path=/`;

  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    cookie += `; expires=${date.toUTCString()}`;
  }
const addTodo = () => {

  let todos;

  if(localStorage.getItem("todos")){
    todos = JSON.parse(localStorage.getItem("todos"))
  } else {
    todos = [];
  }


  let loggedInUser = JSON.parse(sessionStorage.getItem("loggedIn"));

  let newTodo = {
    todo: todoInput.value,
    userId: loggedInUser.id
  }

  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodoList();
}

const renderTodoList = () => {
  todoList.innerHTML = "";

  let loggedInUser = JSON.parse(sessionStorage.getItem("loggedIn"));
  let todos = JSON.parse(localStorage.getItem("todos"));
  
  let userTodos = todos.filter(todo => todo.userId === loggedInUser.id)


  userTodos.forEach((todoItem) => {
      //Skapat en li-tagg
  //Appendar i ul
    let li = document.createElement("li");
    li.innerText = todoItem.todo;
    todoList.append(li);
  })
}

registerBtn.addEventListener("click", registerUser)
loginBtn.addEventListener("click", loginUser);
logoutBtn.addEventListener("click", logoutUser)
addTodoBtn.addEventListener("click", addTodo)

  document.cookie = cookie;
}

setCookie("isStudent", "false",);