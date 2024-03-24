
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};
loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};
signupLink.onclick = () => {
  signupBtn.click();
  return false;
};


document.getElementById("my_open_btn").addEventListener("click", () => { open() });
document.getElementById("my_open_btn1").addEventListener("click", () => { open() });
const open = () => {
    document.getElementById("modal_screen").classList.add("open");
    console.log("qwertyui");
}
document.getElementById("my_close_btn").addEventListener("click",close);
function close(){
    document.getElementById("modal_screen").classList.remove("open");
}

window.addEventListener('keydown', (e) => {
    if(e.key === "Escape") {
        document.getElementById("modal_screen").classList.remove("open");
    }
}
)



