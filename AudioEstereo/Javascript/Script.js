//! Definicion de las variables
const audio=document.getElementById("audio");
const slider=document.getElementById("slider");
const btnInicio=document.getElementById("start");
//! Variables
let audioCC; //? Contexto de audio, para manipular el audio
let audioPanoramico; //? Audio panorámico
//! Eventos para el clic del boton
btnInicio.addEventListener("click",()=>{
    //* Comprobando que funcione
    console.log("estoy en el boton");
    //* Inicio de funcion del contexto del audio
    funAudioCC();
    //? Ejecutamos el audio cada que se de clic
    audio.play();
});
//! Evento del slider
slider.addEventListener('input',()=>{
    //* Comprobando que funcione
    // console.log('Estoy en el slider');
    //? Guardar la info del input
    const sliderValue=parseFloat(slider.value);
    //* Comprobando que funcione
    console.log(sliderValue);
    //? Validación de rangos, falsos, nulos e indefinidos
    if(audioPanoramico){
        // pan.value ayuda a hacer el audio panorámico
        audioPanoramico.pan.value=sliderValue;
    }
});
//!Funcion para el contexto del audio
function funAudioCC(){
    //* Comprobando que funcione
    console.log("Estoy en la funcion");
    //! Creamos un contexto de audio en caso que no haya uno
    if(!audioCC){ //* Valida rangos, falsos, indefinidos y nulos
        //? para corregir problemas de compatibilidad en navegadores
        audioCC=new (window.AudioContext||window.AudioContext)();
        //* Creamos el modo panorámico para que el audio sea estereo no mono usando createStereoPanner()
        audioPanoramico=audioCC.createStereoPanner();
        //! Creamos la fuente de audio para conectar y usar en el html
        const source=audioCC.createMediaElementSource(audio);
        //* Llamamos la variable del audio (audioPanoramico) panorámico y lo conectamos a la fuente de origen (source)
        source.connect(audioPanoramico);
        //! Conectamos la variable de panoramización estero al destino de salida
        audioPanoramico.connect(audioCC.destination);
    }
}