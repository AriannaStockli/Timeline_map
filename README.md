SUPSI 2022-23  
Corso d’interaction design, CV427.01  
Docenti: A. Gysin, G. Profeta  

Elaborato 3: Manipolazione

# Timeline map
Autore: Arianna Stöckli<br>
[Link progetto](https://ariannastockli.github.io/Timeline_map/)


## Introduzione e tema
Il progetto consisteva nel progettare un sistema di interfaccia con cui è possibile interagire tramite le proprie mani, attraverso la computer vision. Io ho deciso di realizzare un’interfaccia di una mappa, attraverso la videocamera e il riconoscimento dei gesti è possibile visualizzare l’evoluzione temporale dal 1860 al 2020. Mi sono concentrata su un particolare di Lugano.


## Riferimenti progettuali
Ho preso come riferimento principale map.geo.admin.ch, dove ho raccolto le immagini delle mappe del passato. 
Inoltre, ho utilizzato nccs.admin.ch per i dati riguardanti la temperatura.


## Design dell’interfraccia e modalità di interazione
Il design di basa su due colonne. A sinistra è presente la videocamera e la timeline con le immagini delle mappe che scorrono. A destra invece è presente il titolo del progetto, una legenda che spiega all'utente come scorrere le immagini (con il pollice in sù si scorre alla mappa successiva, con il gesto della vittoria, si torna indietro all'immagine precedente). 
Inoltre, come altro dato ho inserito un’immagine con delle mappe di diversi colori, per rappresentare il cambiamento della temperatura nel corso degli anni.

[<img src="documentazione/img_01.png" width="500" alt="immagine 1 interfaccia">]()
[<img src="documentazione/img_02.png" width="500" alt="immagine 2 interfaccia">]()
https://github.com/AriannaStockli/Timeline_map/assets/126774378/d9e4142b-f032-4fb1-a7ec-55a4f8930eac


## Tecnologia usata
Vengono dichiarate due variabili globali, indexImg e slideChangeInProgress, per tenere traccia dell'indice dell'immagine corrente e dello stato di avanzamento del cambio di immagine.
```JavaScript
let indexImg = 0;
let slideChangeInProgress = false;
```

Ho creato un array chiamato slide con una lista di anni corrispondenti alle immagini delle mappe.
```JavaScript
const slide = [
    "1860",
    "1870",
    "1880",
    "1890",
    "1900",
    "1910",
    "1920",
    "1930",
    "1940",
    "1950",
    "1960",
    "1970",
    "1980",
    "1990",
    "2000",
    "2010",
    "2020"
];
```

I seguenti blocchi di codice gestiscono il cambio delle immagini in base ai gesti riconosciuti delle mani.<br> 
Il codice seguente controlla se il gesto riconosciuto è "thumbs_up" (pollice in su), se non è in corso un cambio di immagine e se l'indice corrente indexImg è inferiore alla lunghezza dell'array slide. Se tutte le condizioni sono soddisfatte, viene incrementato indexImg, per passare all'immagine successiva. Viene impostato un flag per indicare che è in corso un cambio di immagine. Viene aggiornata l'immagine visualizzata con l'immagine successiva, utilizzando un ritardo di un secondo per il cambio successivo.
```JavaScript
  if (name == "thumbs_up" && !slideChangeInProgress && indexImg < slide.length) {
                indexImg += 1;
                console.log(indexImg);
                slideChangeInProgress = true; // Set the flag to indicate a slide change is in progress
                document.getElementById("slide").src = "assets/mappa_" + slide[indexImg] + '.png';
                setTimeout(() => {
                    slideChangeInProgress = false; // Reset the flag after a short delay to allow the next slide change
                }, 1000); // Adjust the delay duration as needed
            }
```

Il codice seguente controlla se il gesto riconosciuto è "victory" (vittoria), non è in corso un cambio di immagine e l'indice indexImg è maggiore di 0, viene decrementato l'indice indexImg per passare all'immagine precedente. Il resto del codice è simile al precedente.
```JavaScript
  if (name == "victory" && !slideChangeInProgress && indexImg > 0) {
                indexImg -= 1;
                console.log(indexImg);
                slideChangeInProgress = true; // Set the flag to indicate a slide change is in progress
                document.getElementById("slide").src = "assets/mappa_" + slide[indexImg] + '.png';
                setTimeout(() => {
                    slideChangeInProgress = false; // Reset the flag after a short delay to allow the next slide change
                }, 1000); // Adjust the delay duration as needed
            }
```


## Target e contesto d’uso
Sed enim ut sem viverra aliquet eget sit. Iaculis at erat pellentesque adipiscing commodo. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. At tempor commodo ullamcorper a lacus vestibulum sed arcu. Ipsum faucibus vitae aliquet nec ullamcorper sit. Tempus quam pellentesque nec nam aliquam sem et tortor. Turpis egestas sed tempus urna et pharetra pharetra massa. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel.
