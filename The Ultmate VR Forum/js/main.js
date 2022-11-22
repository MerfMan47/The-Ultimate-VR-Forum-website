const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
 
/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
         
        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = "<i class=’fas fa-bars’></i>";
    } else {
        menu.classList.add("active");
         
        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = "<i class=’fas fa-times’></i>";
    }
}
 
/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);


const items = document.querySelectorAll(".item");
 
/* Activate Submenu */
function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
}
 
/* Event Listeners */
for (let item of items) {
    if (item.querySelector(".submenu")) {
      item.addEventListener("click", toggleItem, false);
      item.addEventListener("keypress", toggleItem, false);
    }   
}

/* Close Submenu From Anywhere */
function closeSubmenu(e) {
    if (menu.querySelector(".submenu-active")) {
      let isClickInside = menu
        .querySelector(".submenu-active")
        .contains(e.target);
   
      if (!isClickInside && menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
      }
    }
}
   
/* Event listener */
document.addEventListener("click", closeSubmenu, false);

// carousel buttons
// const slidesContainer = document.getElementById("slides-container");
// const slide = document.querySelector(".slide");
// const prevButton = document.getElementById("slide-arrow-prev");
// const nextButton = document.getElementById("slide-arrow-next");

// nextButton.addEventListener("click", (event) => {
//   const slideWidth = slide.clientWidth;
//     slidesContainer.scrollLeft += slideWidth;
// });

// prevButton.addEventListener("click", () => {
//   const slideWidth = slide.clientWidth;
//   slidesContainer.scrollLeft -= slideWidth;
// });

// automatic scrolling






// carocel 2.0

// var slideIndex = 1;

// var myTimer;

// var slideshowContainer;

// window.addEventListener("load",function() {
//     showSlides(slideIndex);
//     myTimer = setInterval(function(){plusSlides(1)}, 4000);
  
//     //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
//     slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];
  
//     //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
//     // slideshowContainer = document.getElementsByClassName('slideshow-container')[0];
  
//     slideshowContainer.addEventListener('mouseenter', pause)
//     slideshowContainer.addEventListener('mouseleave', resume)
// })

// // NEXT AND PREVIOUS CONTROL
// function plusSlides(n){
//   clearInterval(myTimer);
//   if (n < 0){
//     showSlides(slideIndex -= 1);
//   } else {
//    showSlides(slideIndex += 1); 
//   }
  
//   //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  
//   if (n === -1){
//     myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);
//   } else {
//     myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
//   }
// }

// //Controls the current slide and resets interval if needed
// function currentSlide(n){
//   clearInterval(myTimer);
//   myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
//   showSlides(slideIndex = n);
// }

// function showSlides(n){
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }

// pause = () => {
//   clearInterval(myTimer);
// }

// resume = () =>{
//   clearInterval(myTimer);
//   myTimer = setInterval(function(){plusSlides(slideIndex)}, 4000);
// }