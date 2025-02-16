const testimonials = [
    {
      name: "ANN LUBIN",
      role: "CO-FOUNDER",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.",
      image: "./assets/carousel-image.jpeg"
    },
    {
      name: "ANN LUBIN",
      role: "Co-Founder",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.",
      image: "./assets/carousel-image.jpeg"
    },
    {
      name: "ANN LUBIN",
      role: "Co-Founder",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.",
      image: "./assets/carousel-image.jpeg"
    },
    {
        name: "ANN LUBIN",
        role: "CO-FOUNDER",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.",
        image: "./assets/carousel-image.jpeg"
    },
    {
      name: "ANN LUBIN",
      role: "Co-Founder",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.",
      image: "./assets/carousel-image.jpeg"
    }
  ];
  
  const track = document.querySelector(".carousel-track");
const dotsContainer = document.querySelector(".carousel-dots");
let currentIndex = 0;

const updateSlidePosition = () => {
    const slideWidth = document.querySelector(".testimonial-card").offsetWidth;
    track.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
};

const moveToSlide = (index) => {
    const slides = document.querySelectorAll(".testimonial-card");
    const dots = document.querySelectorAll(".dot");

    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;
    
    currentIndex = index;
    updateSlidePosition();

    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");
};


testimonials.forEach((testimonial, index) => {
    const card = document.createElement("div");
    card.classList.add("testimonial-card");
    card.innerHTML = `
        <img src="${testimonial.image}" alt="${testimonial.name}">
        <h3>${testimonial.name}</h3>
        <p class="role">${testimonial.role}</p>
        <p class="testimonial-text">${testimonial.text}</p>
    `;
    track.appendChild(card);

    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => moveToSlide(index));
    dotsContainer.appendChild(dot);
});


setInterval(() => {
    moveToSlide(currentIndex + 1);
}, 4000);

updateSlidePosition();
