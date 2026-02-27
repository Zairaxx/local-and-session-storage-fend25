let usernameInput = document.querySelector("#username");
let passwordInput = document.querySelector("#password");

let registerBtn = document.querySelector("#register");
let loginBtn = document.querySelector("#logIn");
let logoutBtn = document.querySelector("#logout");

const registerUser = () => {

    //Skapa nytt användarobjekt
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
        let h2 = document.createElement("h2");
        h2.innerText = `Välkommen! Du är nu inloggad som ${existingUser.name}!`
        document.body.append(h2);
        
        //Visa logga-ut knapp
        logoutBtn.classList.remove("hidden");
    } else {
        alert("Misslyckad inloggning!")
    }
}

const logoutUser = ()=> {
    sessionStorage.clear();
    window.location.reload();
}

registerBtn.addEventListener("click", registerUser)
loginBtn.addEventListener("click", loginUser);
logoutBtn.addEventListener("click", logoutUser)

const onPageLoad = () => {
    if(sessionStorage.getItem("loggedIn")){
        const loggedInUser = JSON.parse(sessionStorage.getItem("loggedIn"));
        let h2 = document.createElement("h2");
        h2.innerText = `Välkommen! Du är nu inloggad som ${loggedInUser.name}!`
        document.body.append(h2);
        logoutBtn.classList.remove("hidden");
    } 
}

onPageLoad();