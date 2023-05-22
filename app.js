(function () {
    const controlButtons = [...document.querySelectorAll(".control")];
    
    controlButtons.forEach(button => {
      button.addEventListener("click", function() {
        document.querySelector(".active-btn").classList.remove("active-btn");
        this.classList.add("active-btn");
        document.querySelector(".active").classList.remove("active");
        document.getElementById(button.dataset.id).classList.add("active");
      });
    });
    
    document.querySelector(".theme-btn").addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
    });
  
    // Vérifier l'URL pour activer le bouton correspondant
    const currentURL = window.location.href;
    const hashIndex = currentURL.lastIndexOf("#");
    if (hashIndex !== -1) {
      const sectionID = currentURL.slice(hashIndex + 1);
      const targetButton = controlButtons.find(button => button.dataset.id === sectionID);
      if (targetButton) {
        document.querySelector(".active-btn").classList.remove("active-btn");
        targetButton.classList.add("active-btn");
        document.querySelector(".active").classList.remove("active");
        document.getElementById(sectionID).classList.add("active");
      }
    }
  })();
  