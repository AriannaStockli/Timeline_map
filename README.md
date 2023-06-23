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


## Design dell’interfraccia e modalià di interazione
Il design di basa su due colonne. A sinistra è presente la timeline con l'immagine della mappa che scorre. A destra invece è presente il titolo del progetto, una legenda che spiega all'utente come scorrere le immagini (con il pollice in sù si scorre alla mappa successiva, con il gesto della vittoria, si torna indietro all'immagine precedente). 
un’immagine con delle mappe con diversi colori che rappresentano il cambiamento della temperatura negli anni.

[<img src="documentazione/img_01.png" width="500" alt="immagine 1 interfaccia">]()
[<img src="documentazione/img_02.png" width="500" alt="immagine 2 interfaccia">]()
https://github.com/AriannaStockli/Timeline_map/assets/126774378/d9e4142b-f032-4fb1-a7ec-55a4f8930eac


## Tecnologia usata
Nunc consequat interdum varius sit amet mattis vulputate. Vehicula ipsum a arcu cursus vitae congue. Odio ut sem nulla pharetra. Accumsan lacus vel facilisis volutpat est velit egestas dui id. Quisque egestas diam in arcu cursus. Eget nulla facilisi etiam dignissim diam. Aenean sed adipiscing diam donec adipiscing tristique. Porttitor massa id neque aliquam. Sem viverra aliquet eget sit amet tellus cras. Scelerisque eu ultrices vitae auctor eu augue ut lectus. Nunc aliquet bibendum enim facilisis gravida neque convallis a. Lacus sed turpis tincidunt id aliquet risus feugiat.


```JavaScript
const image = new Image();
image.onload = () => {
	gl.bindTexture(gl.TEXTURE_2D, texture);
	gl.texImage2D(
		gl.TEXTURE_2D,
		level,
		internalFormat,
		srcFormat,
		srcType,
		image
	);
	if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
		gl.generateMipmap(gl.TEXTURE_2D);
	} else {
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	}
};
image.src = url;
```


## Target e contesto d’uso
Sed enim ut sem viverra aliquet eget sit. Iaculis at erat pellentesque adipiscing commodo. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. At tempor commodo ullamcorper a lacus vestibulum sed arcu. Ipsum faucibus vitae aliquet nec ullamcorper sit. Tempus quam pellentesque nec nam aliquam sem et tortor. Turpis egestas sed tempus urna et pharetra pharetra massa. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel.
