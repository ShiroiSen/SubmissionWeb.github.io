function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);

  if (section && !section.classList.contains("active-section")) {
    // Tandai elemen yang sedang aktif
    var activeSection = document.querySelector(".active-section");
    if (activeSection) {
      activeSection.classList.remove("active-section");
    }
    section.classList.add("active-section");

    // Gulir ke elemen
    section.scrollIntoView({ behavior: "smooth" });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Tangkap semua tautan navigasi
  var navLinks = document.querySelectorAll("nav a");

  // Tambahkan event listener pada setiap tautan
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      // Cegah perilaku default tautan
      event.preventDefault();

      // Ambil ID tujuan dari atribut href
      var targetId = this.getAttribute("href").substring(1);

      // Scroll ke elemen tujuan secara manual dengan offset
      var targetElement = document.getElementById(targetId);
      if (targetElement) {
        var offset =
          targetElement.offsetTop - document.querySelector("nav").offsetHeight;
        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });

        // Tandai elemen yang sedang aktif
        var activeSection = document.querySelector(".active-section");
        if (activeSection) {
          activeSection.classList.remove("active-section");
        }
        targetElement.classList.add("active-section");
      }
    });
  });
});

function toggleDropdown() {
  var navList = document.querySelector(".nav-list");
  navList.classList.toggle("show");
}
