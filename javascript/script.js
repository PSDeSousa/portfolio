//Burger-------------------------------------------------------------------------------------------------------------------------------
let burgerMenu = document.getElementById("burgerMenu")
burgerMenu.addEventListener("click", function(){
    if(!burgerMenu.classList.contains("d-no")){
        mobileNav.classList.remove("d-no");
        closeMenu.classList.remove("d-no");
        burgerMenu.classList.add("d-no");
    }
})
let closeMenu = document.getElementById("closeMenu")
closeMenu.addEventListener("click", function(){
    if(!closeMenu.classList.contains("d-no")){
        mobileNav.classList.add("d-no");
        burgerMenu.classList.remove("d-no");
        closeMenu.classList.add("d-no");
    }
})


//-------------------------------------------animations-------------------------------------------------------------------------------------------------------------

//animation Open to work clignotant



window.addEventListener('DOMContentLoaded', () => {
  let greenLight = document.querySelectorAll('.green-light');
  console.log("GSAP lancé", greenLight);
  gsap.to(greenLight, {
    opacity: 0.1,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "none"
  });
});











