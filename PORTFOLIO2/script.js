var typed= new Typed(".text", {
    strings:["Full Stack Developer" , "UX/UI Developer", "Web Designer","Frontend Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:100,
    loop:true
})

//////////////////////////////// circle skills //////////////////////////////////////////////

const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percentage");
    var percentage = Math.floor((dots * marked) / 100);
    var points = "";
    var rotate = 360 / dots;

    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i: ${i}; --rot: ${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percentage; i++) {
        pointsMarked[i].classList.add('marked');
    }
});


//////////////////////////////////////// mix it up ///////////////////////////////////
var mixer = mixitup('.portfolio-gallery');

////////////////////////////////////////////// active menu ///////////////////////////////

let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu() {
    let len = section.length;
    while (--len && window.scrollY + 97 < section[len].offsetTop) {}

    // Remove "active" class from all menu items
    menuLi.forEach(sec => sec.classList.remove("active"));

    // Add "active" class to the correct menu item
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);


///////////////////////////////////// sticky navbar ////////////////////////////////////////////

const headers = document.querySelectorAll("header");

window.addEventListener("scroll", function() {
    headers.forEach(header => {
        header.classList.toggle("sticky", window.scrollY > 50);
    });
});

//////////////////////////////////// toggle icon navbar /////////////////////////////////////

let menuIcon = document.querySelector("#menu-icon"); // Use # to select by id
let navlist = document.querySelector(".navlist");

menuIcon.onclick = () => { // Use "onclick" instead of "oneclick"
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open"); // Change "navbar" to "navlist"
}

window.onscroll = () => { // Use "onclick" instead of "oneclick"
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open"); // Change "navbar" to "navlist"
}
/////////////////////////////////////// parallax ////////////////////////////

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-items");
        } else {
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));


