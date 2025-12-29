let slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide(i) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[i].classList.add('active');
}

function next() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prev() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

/* AUTO SLIDE */
setInterval(next, 5000);

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "CEDRIC XIONG – CEO"
  },
  {
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "ALEX MORGAN – DIRECTOR"
  },
  {
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "SOPHIA LEE – MANAGER"
  }
];

let index1 = 0;
const textEl = document.getElementById("text");
const authorEl = document.getElementById("author");

function changeText() {
  index1 = (index1 + 1) % testimonials.length;

  textEl.style.opacity = 0;
  authorEl.style.opacity = 0;

  setTimeout(() => {
    textEl.textContent = testimonials[index].text;
    authorEl.textContent = testimonials[index].author;

    textEl.style.opacity = 1;
    authorEl.style.opacity = 1;
  }, 500);
}

setInterval(changeText, 4000);

