const div = document.querySelector('.btnDiv')

div.addEventListener('click', function () {
    alert("Hola! Soy el div");
    
});

function saludar(){
    alert("Hola!")
    event.stopPropagation()

}
