// Small fade-in animation when scrolling
const cards = document.querySelectorAll(".card, .skill-card");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});
cards.forEach(card => observer.observe(card));