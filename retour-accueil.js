// 1) Bouton flottant "Accueil"
// 2) Ouvre la bonne section quand on arrive depuis l'accueil (ex: portfolio.html#contact)
// À charger APRÈS script.js.
(function () {
  var lien = document.createElement("a");
  lien.href = "index.html";
  lien.textContent = "🏠 Accueil";
  lien.setAttribute("aria-label", "Retour à la page d'accueil");

  lien.style.cssText = [
    "position:fixed",
    "top:15px",
    "right:15px",
    "z-index:9999",
    "padding:10px 18px",
    "border-radius:25px",
    "background:linear-gradient(135deg,#0d47a1,#00b4ff)",
    "color:#fff",
    "font-family:'Segoe UI',Arial,sans-serif",
    "font-size:15px",
    "font-weight:600",
    "text-decoration:none",
    "box-shadow:0 4px 15px rgba(0,0,0,0.4)",
    "transition:transform 0.2s"
  ].join(";");

  lien.onmouseover = function () { lien.style.transform = "scale(1.08)"; };
  lien.onmouseout = function () { lien.style.transform = "scale(1)"; };

  document.body.appendChild(lien);

  var id = window.location.hash.slice(1);
  if (id && document.getElementById(id) && typeof afficherSection === "function") {
    afficherSection(id);
  }
})();
