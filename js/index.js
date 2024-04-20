const locationsInfo = {
  location1: "À PROPOS",
  location2: "PROJETS",
  location3: "SKILLS",
  location4: "CONTACT"
};
const infoWindow = document.getElementById("infoWindow");
function displayLocationInfo(locationId) {
  infoWindow.textContent = locationsInfo[locationId];
  infoWindow.style.display = "block";
}

// Ajouter un écouteur d'événements pour le survol du logo de localisation
location1.addEventListener("mouseenter", function() {
    // Afficher la fenêtre au survol
    infoWindow.style.display = "block";
    displayLocationInfo("location1");
});
location2.addEventListener("mouseenter", function() {
  // Afficher la fenêtre au survol
  infoWindow.style.display = "block";
  displayLocationInfo("location2");
});
location3.addEventListener("mouseenter", function() {
  // Afficher la fenêtre au survol
  infoWindow.style.display = "block";
  displayLocationInfo("location3");
});
location4.addEventListener("mouseenter", function() {
  // Afficher la fenêtre au survol
  infoWindow.style.display = "block";
  displayLocationInfo("location4");
});

// Ajouter un écouteur d'événements pour le retrait du curseur du logo de localisation
location1.addEventListener("mouseleave", function() {
    // Masquer la fenêtre lorsque le curseur quitte le logo de localisation
    infoWindow.style.display = "none";
});
location2.addEventListener("mouseleave", function() {
  // Masquer la fenêtre lorsque le curseur quitte le logo de localisation
  infoWindow.style.display = "none";
});
location3.addEventListener("mouseleave", function() {
  // Masquer la fenêtre lorsque le curseur quitte le logo de localisation
  infoWindow.style.display = "none";
});
location4.addEventListener("mouseleave", function() {
  // Masquer la fenêtre lorsque le curseur quitte le logo de localisation
  infoWindow.style.display = "none";
});