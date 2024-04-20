document.addEventListener("DOMContentLoaded", function() {
  const homepage = document.getElementById("homepage");
  const loaderContainer = document.getElementById("loader-container");
  const startPage = document.getElementById("map_page")
 
  function showHomePage() {
    homepage.style.visibility = "visible";
    homepage.style.opacity = "1";
  }

  function hideHomePage() {
    homepage.style.visibility = "hidden";
    homepage.style.opacity = "0";
  }

  function showLoader() {
    loaderContainer.style.display = "flex";
    loaderContainer.style.opacity = "1";
  }

  function hideLoader() {
    loaderContainer.style.display = "none";
    loaderContainer.style.opacity = "0";
  }
  function showMapPage() {
    startPage.style.visibility = "visible";
    document.body.style.backgroundColor = "#D4B690";
    startPage.style.opacity = "1";
    zoomOutButton.style.display = "none"
  }
  function hiddenMapPage () {
    startPage.style.visibility = "hidden";
    startPage.style.opacity = "0";
  }
  function restartLoading() {
    hideHomePage();
    hiddenMapPage();
    showLoader();

    // Simuler un chargement de 3 secondes
    setTimeout(function() {
      hideLoader();
      showMapPage();
    }, 3000);
  }

  // Fonction pour gérer l'événement de pression de la touche "x"
  function handleKeyPress(event) {
    if (event.key === "x" || event.key === "X") {
      restartLoading();
    }
  }

  // Écouteur d'événements pour détecter la pression de la touche "x"
  document.addEventListener("keydown", handleKeyPress);

  // Cacher la page d'accueil jusqu'à ce que le chargement soit terminé
  hideHomePage();
  hiddenMapPage();

  // Démarrer le chargement initial
  setTimeout(function() {
    hideLoader();
    hiddenMapPage();
    showHomePage();
  }, 5000);
});