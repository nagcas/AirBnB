// Javascript
// La funzione principale di questo javascript è analizzare la pagina
// ed effettuare una traduzione sommaria da inglese a italiano

console.log("It's working...");

// Oggetto chiave valore da inglese a italiano
const traduci = {
    "Sign In": "Registrati",
    "Log In": "Accedi",
    "Gift Card": "Gift Card",
    "Rent with Airbnb": "Affitta con Airbnb",
    "Service Center": "Centro Assistenza",
    "Places to stay": "Posti dove stare",
    "Experiences": "Esperienze",
    "Online Experiences": "Esperienze in linea",
    "Become a host": "Affitta con Airbnb",
    "Support": "Supporto",
    "Help Centre": "Centro Assistenza", 
    "AirCover": "AirCover",
    "Anti-discrimination": "Antidiscriminazione",
    "Disability support": "Supporto per la disabilità",
    "Cancellation options": "Opzioni di Cancellazione",
    "Report neighbourhood": "Segnala quartiere",
    "Hosting": "Ospitare",
    "Airbnb your home": "Apri un Airbnb",
    "AirCover for Hosts": "AirCover per gli host",
    "Hosting resources": "Risorse per gli host",
    "Community forum": "Forum della community",
    "Hosting responsibly": "Ospitare responsabilmente",
    "Join a free Hosting class": "Partecipa a una lezione gratuita sull'ospitalità",
    "Airbnb": "Airbnb",
    "Newsroom": "Newsroom",
    "New features": "Nuove funzionalità",
    "Careers": "Opportunità di lavoro",
    "Investors": "Investitori",
    "Gift cards": "Gift card",
    "Airbnb.org emergency stays": "Soggiorni con Airbnb.org",
    "Privacy": "Privacy", 
    "Terms": "Termini", 
    "Sitemap": "Mappa del sito",
    "UK Modern Slavery Act": "Legge Britannica",
    "Company details": "Dettagli dell'Azienda",
    "Location": "Dove?",
    "Chek-in": "Check-in",
    "Check-out": "Check-out",
    "Guests": "Chi?",
    "Where are you going?": "Cerca destinazioni",
    "Add guests": "Aggiungi ospiti",
    "Explore nearvy stays": "Esplora i soggiorni ",
    "drive": "in auto",
    "flight": "di volo",
}

// Inizializzo la variabile e asseggno la clsse ".dropdown-item" del menu a tendina 
// del document html
const itens = document.querySelectorAll(".dropdown-item");
// Menù principale
const itensMenu = document.querySelectorAll(".nav-link");
//console.log(itensMenu.length);
// Menù footer
const menuFooter = document.querySelectorAll(".menuFooter");
// Menù condizioni e termini
const menuSmall = document.querySelectorAll(".menuSmall");
// Menù search
const menuSearch = document.querySelectorAll(".menuSearch");
//const menuForm = document.querySelectorAll(".form-control");
// Button explore
const btnExplore = document.getElementById("btnExplore");

const auto = document.querySelectorAll(".time");



// Inizializzo due variabili puntatori al link della lingua Inglese/Italiano e della moneta
const lenguage = document.getElementById("lenguage");
const money = document.getElementById("money");

lenguage.addEventListener("click", function() {
    // console.log("click");
    if (lenguage.textContent === "English (GB)") {
        lenguage.textContent = "Italiano (IT)";
        money.innerHTML = '<i class="bi bi-currency-euro"></i> EURO';

        // Richiamo la funzione traduci menù a tendina
        traduciMenuTendina(traduci);

        // Richiamo la funzione traduci menu principale
        traduciMenu(traduci);

        // Richiamo la funzione traduci menù footer
        traduciMenuFooter(traduci);

        // Richiamo la funzione traduci menù termini e condizioni
        traduciMenuSmall(traduci);

        // Richiamo la funzione traduci menù barra di ricerca
        traduciMenuSearch(traduci);
        
        // Richiamo la funzione traduci button explore 
        traduciBtnExplore(traduci);

        // Richiamo la funzione traduci card 
        traduciTime(traduci);

        // Traduzione placeholder
        document.getElementById("location").placeholder = "Cerca destinazioni";
        document.getElementById("guests").placeholder = "Aggiungi ospiti";
        
    } else {
        window.location.href = "index.html";
        // lenguage.textContent = "English (GB)";
        // money.innerHTML = '<i class="bi bi-currency-pound"></i> BGP';
    }
});

// Funzione traduci menù a tendina
function traduciMenuTendina(traduci) {
    // Eseguo un clico for sulla chiave dell'oggetto traduci
    for (let v in traduci) {
        // console.log(traduci[v]);      
        // Eseguo un ciclo for sulla lunghezza del mio itens
        for (let i = 0; i < itens.length; i++) {
            // Eseguo una condizione per verificare la corrispondenza del contenuto della mia pagina con la
            // chiave dell'oggetto traduci
            if (itens[i].textContent === v) {
                // Stampo su console il valore dell'oggetto chiave valore
                // console.log(itens[i].textContent + " = " + k);
                itens[i].textContent = traduci[v];
                // console.log(traduci[v]);
            } 
        }
    }
};

// Funzione traduci menu principale
function traduciMenu(traduci) {
    // Eseguo un clico for sulla chiave dell'oggetto traduci
    for (let v in traduci) {
        // Eseguo un ciclo for sulla lunghezza del mio itens
        for (let i = 0; i < itensMenu.length; i++) {
            // Eseguo una condizione per verificare la corrispondenza del contenuto della mia pagina con la
            // chiave dell'oggetto traduci
            if (itensMenu[i].textContent === v) {
                // Stampo su console il valore dell'oggetto chiave valore
                // console.log(itens[i].textContent + " = " + k);
                itensMenu[i].textContent = traduci[v];
            }
        }
    }
};

// Funzione traduci menu footer
function traduciMenuFooter(traduci) {
    // Eseguo un clico for sulla chiave dell'oggetto traduci
    for (let v in traduci) {
        // Eseguo un ciclo for sulla lunghezza del mio itens
        for (let i = 0; i < menuFooter.length; i++) {
            // Eseguo una condizione per verificare la corrispondenza del contenuto della mia pagina con la
            // chiave dell'oggetto traduci
            if (menuFooter[i].textContent === v) {
                // Stampo su console il valore dell'oggetto chiave valore
                // console.log(itens[i].textContent + " = " + k);
                menuFooter[i].textContent = traduci[v];
            }
        }
    }
};

// Funzione traduci menu condizioni e termini
function traduciMenuSmall(traduci) {
    // Eseguo un clico for sulla chiave dell'oggetto traduci
    for (let v in traduci) {
        // Eseguo un ciclo for sulla lunghezza del mio itens
        for (let i = 0; i < menuSmall.length; i++) {
            // Eseguo una condizione per verificare la corrispondenza del contenuto della mia pagina con la
            // chiave dell'oggetto traduci
            if (menuSmall[i].textContent === v) {
                // Stampo su console il valore dell'oggetto chiave valore
                // console.log(itens[i].textContent + " = " + k);
                menuSmall[i].textContent = traduci[v];
            }
        }
    }
};

// Funzione traduci menu barra di ricerca
function traduciMenuSearch(traduci) {
    // Eseguo un clico for sulla chiave dell'oggetto traduci
    for (let v in traduci) {
        // Eseguo un ciclo for sulla lunghezza del mio itens
        for (let i = 0; i < menuSearch.length; i++) {
            // Eseguo una condizione per verificare la corrispondenza del contenuto della mia pagina con la
            // chiave dell'oggetto traduci
            if (menuSearch[i].textContent === v) {
                // Stampo su console il valore dell'oggetto chiave valore
                // console.log(itens[i].textContent + " = " + k);
                menuSearch[i].textContent = traduci[v];
            }
        }
    }
};

// Funzione traduci menu card
function traduciTime() {
    for (let i = 0; i < auto.length; i++) {
        if (auto[i].textContent.includes("drive")) {
            let autoT = auto[i].textContent.split(" ");
            autoT[2] = "in auto";
            let autoN = autoT.join(" "); 
            //console.log(autoN); 
            auto[i].textContent = autoN;
        } else {
            let voloT = auto[i].textContent.split(" ");
            voloT[2] = "in volo";
            let voloN = voloT.join(" "); 
            //console.log(voloN); 
            auto[i].textContent = voloN;
        }
    }
};

function traduciBtnExplore(traduci) {
    for (let v in traduci) {
        if (btnExplore.textContent === v) {
            btnExplore.textContent = traduci[v];
        }
    }
};




