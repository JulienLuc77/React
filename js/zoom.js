const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
// Récupère l'élément de la carte
const mapImage = document.querySelector(".image-map");
// Récupère l'élément du menu à afficher
const menu = document.getElementById("menu");
// Ajoute des écouteurs d'événements pour les clics sur les logos de localisation
location1.addEventListener("click", function() {
    zoomIn();
});

location2.addEventListener("click", function() {
    zoomIn();
});
location3.addEventListener("click", function() {
  zoomIn();
});
location4.addEventListener("click", function() {
  zoomIn();
});

const zoomOutButton = document.getElementById("zoomOutButton");

// Stocke les positions initiales des logos de localisation par rapport à la carte
const initialLocations = {
    location1: getLocationPositionRelativeToMap(location1),
    location2: getLocationPositionRelativeToMap(location2),
    location3: getLocationPositionRelativeToMap(location3),
    location4: getLocationPositionRelativeToMap(location4)
};

// Fonction pour obtenir la position d'un élément par rapport à la carte
function getLocationPositionRelativeToMap(location) {
    const rect = location.getBoundingClientRect();
    const mapRect = mapImage.getBoundingClientRect();
    return {
        left: rect.left - mapRect.left,
        top: rect.top - mapRect.top
    };
}

// Fonction pour effectuer le zoom progressif
function zoomIn(location) {
    let scale = 1;
    const zoomInterval = setInterval(function() {
      location1.style.display = "none";
      location2.style.display = "none";
      location3.style.display = "none";
      location4.style.display = "none";
      zoomOutButton.style.display = "block";
        scale += 0.1; // Augmente progressivement l'échelle de 0.1
        mapImage.style.transform = `scale(${scale})`;

        if (scale >= 2) { // Arrête l'animation une fois que le zoom atteint 200%
            clearInterval(zoomInterval);
            // Affiche le menu une fois le zoom terminé
            menu.style.opacity = "1";
            menu.style.left = "20px"; // Révèle le menu à gauche de l'écran
            // Active le bouton de dézoom une fois que le zoom est terminé
            showZoomOutButton();
            // Restaure les positions initiales des logos
            restoreInitialLocations();
        }
    }, 100); // Répète toutes les 100 millisecondes pour une transition plus fluide

    // Calcule la position du clic sur le logo par rapport à la carte
    const locationRect = location.getBoundingClientRect();
    const mapRect = mapImage.getBoundingClientRect();
    const locationX = locationRect.left - mapRect.left;
    const locationY = locationRect.top - mapRect.top;

    // Applique le zoom en fonction des coordonnées du clic
    const centerX = mapRect.width / 2;
    const centerY = mapRect.height / 2;
    const deltaX = centerX - locationX;
    const deltaY = centerY - locationY;
    const newTransformOriginX = locationX - deltaX / scale;
    const newTransformOriginY = locationY - deltaY / scale;

    // Applique la nouvelle position de la carte pendant le zoom
    mapImage.style.transformOrigin = `${newTransformOriginX}px ${newTransformOriginY}px`;
}

// Fonction pour restaurer les positions initiales des logos
function restoreInitialLocations() {
    setLocationPosition(location1, initialLocations.location1);
    setLocationPosition(location2, initialLocations.location2);
    setLocationPosition(location3, initialLocations.location3);
    setLocationPosition(location4, initialLocations.location4);
}

// Fonction pour définir la position d'un élément
function setLocationPosition(location, position) {
    location.style.left = `${position.left}px`;
    location.style.top = `${position.top}px`;
}
// Fonction pour effectuer le dézoom progressif
function zoomOut() {
  let scale = 2;
  const zoomInterval = setInterval(function() {
      scale -= 0.1; // Diminue progressivement l'échelle de 0.1
      mapImage.style.transform = `scale(${scale})`;
     
      if (scale <= 1) { // Arrête l'animation une fois que le dézoom atteint 100%
          clearInterval(zoomInterval);
          location1.style.display = "block";
          location2.style.display = "block";
          location3.style.display = "block";
          location4.style.display = "block";
          // Masque le bouton de dézoom une fois que le dézoom est terminé
          hideZoomOutButton();
      }
  }, 100); // Répète toutes les 100 millisecondes pour une transition plus fluide
}

// Ajoute des écouteurs d'événements pour les clics sur les logos de localisation
location1.addEventListener("click", function(event) {
  location1.style.position = "absolute"; // Empêche le logo de se déplacer pendant le zoom
  zoomIn(event.target);
});

location2.addEventListener("click", function(event) {
  location2.style.position = "absolute"; // Empêche le logo de se déplacer pendant le zoom
  zoomIn(event.target);
});

location3.addEventListener("click", function(event) {
  location3.style.position = "absolute"; // Empêche le logo de se déplacer pendant le zoom
  zoomIn(event.target);
});

location4.addEventListener("click", function(event) {
  location4.style.position = "absolute"; // Empêche le logo de se déplacer pendant le zoom
  zoomIn(event.target);
});

// Ajoute un écouteur d'événements pour le clic sur le bouton de dézoom
zoomOutButton.addEventListener("click", function() {
  zoomOutButton.style.display = "none";
  zoomOut();
});

// Fonction pour masquer le bouton de dézoom lorsque le zoom n'est pas en cours
function hideZoomOutButton() {
    zoomOutButton.style.display = "none";
}

// Fonction pour afficher le bouton de dézoom en haut à gauche de l'écran
function showZoomOutButton() {
    zoomOutButton.style.display = "block";
    zoomOutButton.style.position = "fixed";
    zoomOutButton.style.top = "20px";
    zoomOutButton.style.left = "20px";
}

// Ajoute un écouteur d'événements pour le clic sur le bouton de dézoom
zoomOutButton.addEventListener("click", function() {
    zoomOut();
});