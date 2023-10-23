const FORM = document.querySelector("article form");
const BTN = FORM.querySelector("button");
const INPUT = FORM.querySelector("input");
const ERROR = FORM.querySelector("button .error");
const SUCCESS = document.querySelector("article .success");


FORM.addEventListener("submit",(e)=>{
    e.preventDefault();
    let email = INPUT.value;
    let regExp = /\w@gmail.com$/;
    let Valid =regExp.test(email);

    if(Valid==true){
        SUCCESS.style.display = "block";
        ERROR.style.display = "none";
        SUCCESS.className = "success";
        SUCCESS.textContent = "Successful";
    }else if(Valid==false||email!=""){
        SUCCESS.style.display = "block";
        SUCCESS.className = "invalid";
        SUCCESS.textContent = "Please provide a valid email";
        ERROR.style.display = "block"
    }
});

const mqLarge = window.matchMedia("(min-width: 550px)");
if (mqLarge.matches) {
  let Container = document.querySelector(".container");
  let heroImage = Container.querySelector(".hero_image");
  Container.appendChild(heroImage);
  let Logo = Container.querySelector(".logo");
  let Content = Container.querySelector("article");
  Content.prepend(Logo);

}
