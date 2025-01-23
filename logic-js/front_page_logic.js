let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}



var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });




document.getElementById("dropdownBtnSocimeal").addEventListener("click", function () {
  var menu = document.getElementById("dropdownMenuSocimeal");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
});

// Similarly, add event listeners for other dropdowns like Mini Thali, etc.
document.getElementById("dropdownBtnMini").addEventListener("click", function () {
  var menu = document.getElementById("dropdownMenuMini");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
});


let rating = 75; // For example, 75% rating
const progressBar = document.getElementById("progress-bar");
progressBar.value = rating;




// add review section
document.querySelector('review-form').onclick = () => {
  document.querySelector('review-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
  document.querySelector('review-form').classList.toggle('active');
}






// function loader() {
//   document.querySelector('.loader-container').classList.add('fade-out');
// }

// function fadeOut(){
//   setInterval(loader,3000);
// }

// window.onload = fadeOut();
