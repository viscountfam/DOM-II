// Your code goes here

const letsGo = document.querySelectorAll(".text-content h2, .text-content p")
letsGo.forEach(e => {
    e.addEventListener("auxclick", function(){
        e.style.color = "lime";
    })
})

const map = document.querySelector(".img-content");

map.addEventListener("mouseenter", () => {
    map.style.filter = "grayscale(100%)";
    map.style.transition = "filter 0.5s";
})

map.addEventListener("mouseleave", () => {
    map.style.filter = "grayscale(0%)";
})

const welcome = document.querySelector(".intro h2");
welcome.addEventListener("click", () => {
    welcome.textContent = "Benvenuti al autobus divertente";
})

welcome.addEventListener("dblclick", () => {
    welcome.textContent = "Welcome to the Fun Bus!";
})

const topText = document.querySelector(".intro p");

topText.addEventListener("copy", () => {
    topText.style.color = "indigo";
})

const boat = document.querySelector(".content-destination img");
boat.addEventListener("mouseenter", () => {
    boat.style.transform = "rotate(0.5turn)";
    boat.style.filter = "blur(40px)";
    boat.textContent = "So good they have to keep it a secret"
    

})
const img = document.querySelectorAll("img");

img.forEach(el => {
    el.addEventListener("drag", function() {
      el.src = "https://images.unsplash.com/photo-1553418309-e0b7e1a42798?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    })
  })

  const p = document.querySelectorAll("p");

  const body = document.querySelector('body');
  body.addEventListener("wheel", () => {
    body.style.backgroundColor="papayawhip";
  })
  
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
      header.style.backgroundColor = "rgba(145, 134, 57, 0.3)";

  })

  let randomColor = Math.floor(Math.random()*16777215).toString(16);

  const destinationText = document.querySelector(".destination h4");
  destinationText.addEventListener("cut", () => {
      destinationText.textContent = "You have cut this text";
  })

  const stopLink = document.querySelectorAll(".nav-link");

  stopLink.forEach(el => {
      el.addEventListener("click", (event) => {
          event.preventDefault();
          console.log("stopped the link");
      })
  })
