/**
 * @description Dit script voegt interactieve effecten toe aan links op de pagina,
 * zoals animaties bij hover, klikken en toetsenbordinteracties.
 * Voor de animaties is gebruik gemaakt van GSAP voor dynamische transities
 * en CSS keyframes die deels gebaseerd zijn op voorbeelden van W3Schools,
 * deels zelf ontworpen en deels afkomstig uit schoolopdrachten.
 * @author Fatima El Hilali
 */

/*
   De eerste interactie is al voor jullie uitgewerkt
   Als je op het 12e linkje klikt (“Interaction”), springt deze omhoog
*/

// Stap 1: selecteer het 12e linkje, en sla deze op in een variabele
let interaction = document.querySelector("a:nth-of-type(12)");

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
interaction.addEventListener("click", jumpHandler);

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {
  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  interaction.classList.toggle("jump");
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
interaction.addEventListener("animationend", jumpHandler);

// Ga zelf verder met de overige elementen, aan de hand van de instructies
// Maak bijvoorbeeld een bibber animatie als je op iets klikt

// Stap 1: querySelector
// let bibberLink = document.querySelector...

// Stap 2: addEventListener
// bibberLink.addEventListener...

// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
// bibberLink.classList.toggle...

/**
 * @description Voegt een dubbelklik-effect toe aan de eerste link. Bij dubbelklikken trilt de link.
 */
let bibberLink = document.querySelector("a:nth-of-type(1)");
bibberLink.addEventListener("dblclick", () => {
  bibberLink.classList.add("bibberen");
  setTimeout(() => {
    bibberLink.classList.remove("bibberen");
  }, 500); // Animatieduur: 0.5s
});

/**
 * @description Voegt een hover-effect toe aan de tweede link. De link verandert van stijl bij hover.
 */
let hoverLink = document.querySelector("a:nth-of-type(2)");
hoverLink.addEventListener("mouseover", () => {
  hoverLink.classList.add("hover-effect");
});
hoverLink.addEventListener("mouseout", () => {
  hoverLink.classList.remove("hover-effect");
});

/**
 * @description Voegt een klik-effect toe aan de derde link. Bij klikken pulseert de link.
 */
let pulseLink = document.querySelector("a:nth-of-type(3)");
pulseLink.addEventListener("click", () => {
  pulseLink.classList.add("pulse");
  pulseLink.addEventListener("animationend", () => {
    pulseLink.classList.remove("pulse");
  });
});

/**
 * @description Voegt een dubbelklik-effect toe aan de vierde link. Bij dubbelklikken roteert de link 360°.
 */
let doubleClickLink = document.querySelector("a:nth-of-type(4)");
doubleClickLink.addEventListener("dblclick", () => {
  doubleClickLink.classList.add("double-click-effect");
  doubleClickLink.addEventListener("animationend", () => {
    doubleClickLink.classList.remove("double-click-effect");
  });
});

/**
 * @description Voegt een zoom-in-out-effect toe aan de vijfde link. Bij klikken zoomt de link in en uit.
 */
let zoomClickLink = document.querySelector("a:nth-of-type(5)");
zoomClickLink.addEventListener("click", () => {
  zoomClickLink.classList.add("zoom-in-out-effect");
  zoomClickLink.addEventListener("animationend", () => {
    zoomClickLink.classList.remove("zoom-in-out-effect");
  });
});

/**
 * @description Voegt een glow-effect toe aan de zesde link. De link licht op bij focus.
 */
let fixLink = document.querySelector('a[href="#fix"]');
fixLink.addEventListener("focus", () => {
  fixLink.classList.add("glow");
});
fixLink.addEventListener("blur", () => {
  fixLink.classList.remove("glow");
});

/**
 * @description Voegt een flip-effect toe aan de zevende link. Bij klikken draait de link om.
 */
let flipLink = document.querySelector("a:nth-of-type(7)");
flipLink.addEventListener("click", () => {
  flipLink.classList.add("flip");
  flipLink.addEventListener("animationend", () => {
    flipLink.classList.remove("flip");
  });
});

/**
 * @description Voegt een flow-effect toe aan de achtste link. Bij klikken beweegt de link vloeiend.
 */
let mymove = document.querySelector("a:nth-of-type(8)");
mymove.addEventListener("click", () => {
  mymove.classList.add("flow");
  mymove.addEventListener("animationend", () => {
    mymove.classList.remove("flow");
  });
});

/**
 * @description Voegt een schud-effect toe aan de negende link. Bij mouseenter schudt de link.
 */
let shakeLink = document.querySelector("a:nth-of-type(9)");
shakeLink.addEventListener("mouseenter", () => {
  shakeLink.classList.add("user");
  shakeLink.addEventListener("animationend", () => {
    shakeLink.classList.remove("user");
  });
});

/**
 * @description Voegt een schaalvergroting toe aan de tiende link bij het indrukken van de Enter-toets.
 */
let keydownLink = document.querySelector("a:nth-of-type(10)");
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    keydownLink.classList.add("interface");
    keydownLink.addEventListener("animationend", () => {
      keydownLink.classList.remove("interface");
    });
  }
});

/**
 * @description Verandert de achtergrondkleur van de elfde link bij mouseleave.
 */
const eventLink = document.querySelector('a[href="#events"]');
eventLink.addEventListener("mouseleave", () => {
  eventLink.style.backgroundColor = "purple";
});

/**
 * @description Verandert de tekstkleur van de dertiende link naar groen bij muisknop loslaten (mouseup).
 */
const userFlowLink = document.querySelector('a[href="#user-flow"]');
userFlowLink.addEventListener("mouseup", () => {
  userFlowLink.style.color = "red";
});

/**
 * @description Laat links snel één voor één verschijnen door opacity te animeren,
 * gevolgd door een snelle kleurverandering.
 * @param {number} index - Het huidige indexnummer van de link.
 */
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("section a");
  const colors = [
    "lightblue",
    "pink",
    "lightgreen",
    "lightyellow",
    "lightcoral",
    "lavender",
    "lightgray",
    "lightgoldenrodyellow",
    "lightcyan",
    "peachpuff",
    "lightseagreen",
    "plum",
    "khaki",
    "cornflowerblue",
    "mistyrose",
    "wheat",
    "lightsalmon",
    "palegreen",
    "powderblue",
    "gold",
  ];

  /**
   * Animeert de opacity en achtergrondkleur van de links één voor één.
   * @param {number} index - Het huidige indexnummer van de link.
   */
  function animateLinks(index = 0) {
    if (index >= links.length) return; // Stop als alle links geanimeerd zijn

    const link = links[index];
    const color = colors[index % colors.length]; // Herhaal kleuren indien nodig

    // Animeer de opacity van 0 naar 1
    gsap.to(link, {
      opacity: 1, // Maak de link zichtbaar
      duration: 0.5, // Snellere opacity-animatie
      onComplete: () => {
        // Verander daarna de achtergrondkleur
        gsap.to(link, {
          backgroundColor: color,
          duration: 0.5, // Snellere kleurverandering
          onComplete: () => {
            animateLinks(index + 1); // Ga door naar de volgende link
          },
        });
      },
    });
  }

  // Zet alle links op onzichtbaar (opacity: 0)
  links.forEach((link) => {
    link.style.opacity = 0;
  });

  // Start de animatie vanaf de eerste link
  animateLinks();
});
