// Consegna:
// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

// BONUS 1:
// Aggiungere il ciclo infinito del carosello.
// Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.








// CREO UN ARRAY CONTENENTE LE IMMAGINI (array di stringhe)

const imgsArray = [
'../img/01.webp',
'../img/02.webp',
'../img/03.webp',
'../img/04.webp',
'../img/05.webp']


// CREO UNA VARIABILE CHE MI COLLEGHI L'ELEMENTO DEL DOM IN CUI INSERIRE LE IMMAGINI

const itemsSlider = document.querySelector('.items-slider') ;


// CREO UNA VARIABILE (globale) CON STRINGA VUOTA COSI' DA ESSERE CONCATENATA NEL FOR

let itemsHTML = '' ;


// CREO UN CICLO for PER ASSEGNARE GLI ELEMENTI NEL DOM E IL CONTENUTO DELL'ARRAY 

for(let i = 0; i < imgsArray.length; i++){
    //console.log di controllo
    // console.log(imgsArray[i])


    // CREO UNA VARIABILE CHE IDENTIFICA IL SINGOLO ELEMENTO DELL'ARRAY
    // COSI' DA AVERLO UNA SOLA VOLTA SENZA DOVERLO RIPETERE PER OGNI ELEMENTO

    const imgPath = (imgsArray[i]) ;


    // CREO UNA VARIABILE CHE CONTENGA UNA PARTE DI STRUTTURA HTML
    // IL CUI ELEMENTO CONTENGA L'IMMAGINE DELL'ARRAY (imgPath)
    
    const sliderImg = `
    <div class="item">
        <img src="${imgPath}" alt="">
    </div>
    `


    // CONCATENO GLI ELEMENTI DELL'HTML 
    itemsHTML += sliderImg ;

}


// AGGIUNGO GLI ELEMENTI ALL'HTML

itemsSlider.innerHTML = itemsHTML ;


// CREO UNA VARIABILE PER RECUPERARE ELEMENTI CHE ABBIANO LA STESSA CLASSE (.getElementsByClassName)
// RESTITUENDO UN OGGETTO COME FOSSE UN ARRAY

const divItemList = document.getElementsByClassName('item') ;


// CREO UNA VARIABILE PER L'ASSEGNAZIONE DELLA CLASSE ALL'ELEMENTO
// COSI' DA NON DOVERLA RIPETERE SUCCESSIVAMENTE PER OGNI EVENTO AL CLICK

let activeItem = 0 ;

// AGGIUNGO ALLA VARIABILE divItemList LA CLASSE active (.classList.add)

divItemList[activeItem].classList.add('active') ;


// COLLEGO L'ELEMENTO next & prev PER ASSEGNARGLI L'EVENTO AL CLICK

const next = document.querySelector('.next')

next.addEventListener('click', function(){

    // RIMUOVO LA CLASSE active DALL'ELEMENTO A CUI E' ASSEGNATO, PER ASSEGNARLO POI ALL'ELEMENTO SUCCESSIVO (.classList.remove)

    divItemList[activeItem].classList.remove('active') ;

    // INCREMENTO LA VARIABILE activeItem DI 1 COSI' DA ASSEGNARLA ALL'ELEMENTO SUCCESSIVO

    activeItem++

    
    // BONUS
    // SE ARRIVA ALL'ULTIMO ELEMENTO DELL'ARRAY [4] (<- elemento dell'array parte da 0, essendo 5 l'ultimo elemento sarà il 4)
    // ALLORA DEVE TORNARE AL PRIMO ELEMENTO [0] (<- primo elemento dell'array)
    if(activeItem === imgsArray.length){
        activeItem = 0
    }


    // AGGIUNGO ALLA VARIABILE divItemList LA CLASSE active (.classList.add)

    divItemList[activeItem].classList.add('active') ;


})




const prev = document.querySelector('.prev')

prev.addEventListener('click', function(){

    divItemList[activeItem].classList.remove('active') ;

    activeItem--

    

    // BONUS
    // SE PARTO DAL PRIMO ELEMENTO DELL'ARRAY [0]
    // ALLORA DEVE PASSARE ALL'ULTIMO ELEMENTO [4]

    if(activeItem < 0){
        activeItem = imgsArray.length - 1
    }


    divItemList[activeItem].classList.add('active') ;

})




