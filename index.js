let usernameInput = document.querySelector("#username");
let passwordInput = document.querySelector("#password");

let registerBtn = document.querySelector("#register");
let loginBtn = document.querySelector("#logIn");
let logoutBtn = document.querySelector("#logOut");

const registerUser = () => {

    let user = {
            name: usernameInput.value,
            password: passwordInput.value,
            id: Date.now(),
    }
    let users;

    if(localStorage.getItem("users")){
        //Hämta users från localStorage, lägg in ny användare
        users = JSON.parse(localStorage.getItem("users"));
        users.push(user);
    }
    else {
        users = [user]
    }
    //Lagra i localstorage
    localStorage.setItem("users", JSON.stringify(users));
}

const loginUser = () => {
    let registeredUsers = JSON.parse(localStorage.getItem("users"));
    let existingUser = registeredUsers.find(user => user.name === usernameInput.value && user.password === passwordInput.value);

    //Skriv ut hälsning till inloggad användare 
    if(existingUser){
        //Lagra användare i sessionStorage
        sessionStorage.setItem("loggedIn", JSON.stringify(existingUser))
        document.body.innerHTML += `<h2>Välkommen! Du är nu inloggad som ${existingUser.name}!</h2> `

        //Visa logga-ut knapp
        logoutBtn.classList.remove("hidden");
        console.log(logoutBtn.classList);
    } else {
        alert("Misslyckad inloggning!")
    }
}

registerBtn.addEventListener("click", registerUser)
loginBtn.addEventListener("click", loginUser);

const onPageLoad = () => {
    if(sessionStorage.getItem("loggedIn")){
        const loggedInUser = JSON.parse(sessionStorage.getItem("loggedIn"));
        document.body.innerHTML += `<h2>Välkommen! Du är nu inloggad som ${loggedInUser.name}!</h2> `
    } 
}

onPageLoad();