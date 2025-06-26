
//Carousels--------------------------------------------------------------------------------------------------------------------------
//Au click on avance ou recul le carousel

//Variables carousel project de la page
let project = document.getElementById("project");
let projectCarousel = document.getElementById("projectCarousel");
let projectCards = document.querySelectorAll(".project-card");
let nbProjectCards = projectCards.length;
let projectCardWidth = (document.getElementById("projectCarousel").scrollWidth / nbProjectCards);
let nbScrollProject = 0;

//Fonction pour parcourir le carousel

//Identifier boutons pour parcourir le carrousel
let projectBack = document.getElementById('backProject');
let projectForward = document.getElementById('forwardProject');

//Boutons carousel
projectBack.addEventListener("click", function(){
    
    if(nbScrollProject < 0){
      nbScrollProject = nbScrollProject + 1;
    }
 console.log(nbScrollProject);
    //mouvement dynamisé avec GSAP
    gsap.to(projectCarousel, {
        duration: 1.5, // en secondes dans GSAP
        x: projectCardWidth * nbScrollProject,  //pour que soit pas visible avant animation
        ease : "power2out"
      })
})

projectForward.addEventListener("click", function(){
    
    if(nbScrollProject > -nbProjectCards + 1){
      nbScrollProject = nbScrollProject - 1;
    }
    //mouvement dynamisé avec GSAP
    console.log(nbScrollProject);
    gsap.to(projectCarousel, {
        duration: 1.5, // en secondes dans GSAP
        x: projectCardWidth * nbScrollProject,  //pour que soit pas visible avant animation
        ease : "power2out"
      })
})
