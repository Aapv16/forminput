const menyala = document.querySelectorAll(".nav-link");
menyala.forEach((link) => {
  link.addEventListener("click", function (event) {
    menyala.forEach((nav) => nav.classList.remove("active"));

    this.classList.add("active");
  });
});

//
