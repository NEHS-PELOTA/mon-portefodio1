// 1. On récupère les éléments de la page
const liens = document.querySelectorAll("nav a");     // tous les liens du menu
const sections = document.querySelectorAll("section"); // toutes les sections

// 2. Fonction qui affiche UNE section et cache les autres
function afficherSection(id) {
  // on enlève la classe "active" de toutes les sections et de tous les liens
  sections.forEach(function (section) {
    section.classList.remove("active");
  });
  liens.forEach(function (lien) {
    lien.classList.remove("active");
  });

  // on ajoute "active" à la bonne section et au bon lien
  document.getElementById(id).classList.add("active");
  document.querySelector('nav a[href="#' + id + '"]').classList.add("active");
}

// 3. Quand on clique sur un lien du menu
liens.forEach(function (lien) {
  lien.addEventListener("click", function (event) {
    event.preventDefault();                    // empêche la page de sauter
    const id = lien.getAttribute("href").slice(1); // "#profil" devient "profil"
    afficherSection(id);
  });
});

// 4. Au chargement de la page, on affiche le profil
afficherSection("profil");
