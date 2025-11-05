const movies = [
  {
    title: "Dune: Part Two",
    image: "https://m.media-amazon.com/images/I/71qv3E0MhzL._AC_SL1500_.jpg",
    desc: "Paul Atreides unites with the Fremen to avenge his family."
  },
  {
    title: "Deadpool & Wolverine",
    image: "https://m.media-amazon.com/images/I/81yWw5f3VQL._AC_SL1500_.jpg",
    desc: "The dynamic duo of Deadpool and Wolverine return in action."
  },
  {
    title: "Inside Out 2",
    image: "https://m.media-amazon.com/images/I/71QfBvXlCPL._AC_SL1500_.jpg",
    desc: "Riley’s emotions grow up as she faces teenage life."
  },
  {
    title: "Venom: The Last Dance",
    image: "https://m.media-amazon.com/images/I/81Jw3Zt2VPL._AC_SL1500_.jpg",
    desc: "Eddie and Venom must make their last stand together."
  }
];

// DOM Elements
const movieContainer = document.getElementById("movieContainer");
const modal = document.getElementById("movieModal");
const seatModal = document.getElementById("seatModal");
const searchBar = document.getElementById("searchBar");

function renderMovies(list) {
  movieContainer.innerHTML = "";
  list.forEach(movie => {
    const card = document.createElement("div");
    card.classList.add("movie-card");
    card.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}">
      <div class="movie-info">
        <h3>${movie.title}</h3>
      </div>`;
    card.onclick = () => openMovieModal(movie);
    movieContainer.appendChild(card);
  });
}

function openMovieModal(movie) {
  document.getElementById("modalTitle").textContent = movie.title;
  document.getElementById("modalImage").src = movie.image;
  document.getElementById("modalDesc").textContent = movie.desc;
  modal.style.display = "flex";
}

function closeModals() {
  modal.style.display = "none";
  seatModal.style.display = "none";
}

document.querySelectorAll(".close").forEach(btn => btn.onclick = closeModals);

document.getElementById("bookBtn").onclick = () => {
  modal.style.display = "none";
  openSeatModal();
};

function openSeatModal() {
  const seatContainer = document.getElementById("seats");
  seatContainer.innerHTML = "";
  for (let i = 1; i <= 40; i++) {
    const seat = document.createElement("div");
    seat.classList.add("seat");
    seat.onclick = () => seat.classList.toggle("selected");
    seatContainer.appendChild(seat);
  }
  seatModal.style.display = "flex";
}

document.getElementById("confirmBooking").onclick = () => {
  const selected = document.querySelectorAll(".seat.selected").length;
  alert(`🎟️ You booked ${selected} seats successfully!`);
  closeModals();
};

// Search functionality
searchBar.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const filtered = movies.filter(m => m.title.toLowerCase().includes(value));
  renderMovies(filtered);
});

// Initialize
renderMovies(movies);
