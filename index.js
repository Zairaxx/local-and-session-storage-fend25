//Sätter en cookie

let createCookie = () => {
    document.cookie = "username=Brandon; expires=Fri, 31 Dec 2026 23:59:59 UTC; path=/; Secure; SameSite=Strict";
}
//Hämta cookies

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

  document.cookie = cookie;
}

setCookie("isStudent", "false",);