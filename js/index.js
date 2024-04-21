const infoWindow = document.getElementById("infoWindow");
const locationImage = document.getElementById("locationImage");

// Chemins d'images pour chaque emplacement
const locationImages = {
  location1: "./images/apropos.png",
  location2: "./images/skills.png",
  location3: "./images/projets.png",
  location4: "./images/contact.png"
};
for (const locationId in locationImages) {
  const img = new Image();
  img.src = locationImages[locationId];
}

location1.addEventListener("mouseenter", function() {
  infoWindow.style.display = "block";
  changeLocationImage("location1");
});

location2.addEventListener("mouseenter", function() {
  infoWindow.style.display = "block";
  changeLocationImage("location2");
});

location3.addEventListener("mouseenter", function() {
  infoWindow.style.display = "block";
  changeLocationImage("location3");
});

location4.addEventListener("mouseenter", function() {
  infoWindow.style.display = "block";
  changeLocationImage("location4");
});

// Fonction pour changer l'image en fonction de l'emplacement survolé
function changeLocationImage(locationId) {
  locationImage.src = locationImages[locationId];
}

// Ajouter des écouteurs d'événements pour le retrait du curseur du logo de localisation
location1.addEventListener("mouseleave", function() {
  infoWindow.style.display = "none";
});

location2.addEventListener("mouseleave", function() {
  infoWindow.style.display = "none";
});

location3.addEventListener("mouseleave", function() {
  infoWindow.style.display = "none";
});

location4.addEventListener("mouseleave", function() {
  infoWindow.style.display = "none";
});