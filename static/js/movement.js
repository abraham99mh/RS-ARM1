
//Barra lateral toggle
var el = document.getElementById("wrapper");
var toggleButton = document.getElementById("menu-toggle");

toggleButton.onclick = function () {
  el.classList.toggle("toggled");
};

/*Velocidad general*/
$("input#RangeV").on('input',function(){
  $.ajax({
    url: '/velocidad',
    type: 'POST',
    data: {
      RangeV: $('input#RangeV').val()
     },
 
   success: function(response){
      console.log(response);
     },
    error: function(error){
       console.log(error);
     }
    });
  
})

/*Motor 0*/ 
$("input#Range0").on('input',function(){
  $.ajax({
    url: '/motor0',
    type: 'POST',
    data: {
      Range0: $('input#Range0').val()
     },
 
   success: function(response){
      console.log(response);
     },
    error: function(error){
       console.log(error);
     }
    });

})
//Motor 1 
$("input#Range1").on('input',function(){
  $.ajax({
    url: '/motor1',
    type: 'POST',
    data: {
      Range1: $('input#Range1').val()
     },
 
   success: function(response){
      console.log(response);
     },
    error: function(error){
       console.log(error);
     }
    });

})

//Motor 2
$("input#Range2").on('input',function(){ 
  $.ajax({
    url: '/motor2',
    type: 'POST',
    data: {
      Range2: $('input#Range2').val()
     },
 
   success: function(response){
      console.log(response);
     },
    error: function(error){
       console.log(error);
     }
    });

})

//Motor 3
$("input#Range3").on('input',function(){ 
  $.ajax({
    url: '/motor3',
    type: 'POST',
    data: {
      Range3: $('input#Range3').val()
     },
 
   success: function(response){
      console.log(response);
     },
    error: function(error){
       console.log(error);
     }
    });

})

//Motor 4
$("input#Range4").on('input',function(){ 
  $.ajax({
    url: '/motor4',
    type: 'POST',
    data: {
      Range4: $('input#Range4').val()
     },
 
   success: function(response){
      console.log(response);
     },
    error: function(error){
       console.log(error);
     }
    });

})


//Motor 5
$("input#Range5").on('input',function(){ 
  $.ajax({
    url: '/motor5',
    type: 'POST',
    data: {
      Range5: $('input#Range5').val()
     },
 
   success: function(response){
      console.log(response);
     },
    error: function(error){
       console.log(error);
     }
    });

})



// --Enviar datos CONTROL CON FLECHAS-- 

let btnVUp = document.getElementById("vUp");
let btnVDown = document.getElementById("vDown");
let btnHLeft = document.getElementById("hLeft");
let btnHForward = document.getElementById("hForward");
let btnHBackward = document.getElementById("hBackward");
let btnHRight = document.getElementById("hRight");
let btnRLeft = document.getElementById("rLeft");
let btnRRight = document.getElementById("rRight");

var mousedownID = -1;  //ID global de intervalo de mousedown

//Flecha Arriba
function mousedown0(event) {
  console.log("Flecha ARRIBA presionada");
  if(mousedownID==-1)  //Previene multiples loops
     mousedownID = setInterval(whilemousedown0, 100 /*se ejecuta cada 100ms*/);
}

function mouseup0(event) {
   if(mousedownID!=-1) {
    clearInterval(mousedownID);
    mousedownID=-1;
      
    //Envía a servidor que se dejó de presionar el botón
    $.ajax({ 
      url: '/controles',
      type: 'POST',
      data: {
        Move: "20"
      }
    });
   }
}

function whilemousedown0() {

  $.ajax({
    url: '/controles',
    type: 'POST',
    data: {
      Move: "0"
    }
  });
}

btnVUp.addEventListener("mousedown", mousedown0);
btnVUp.addEventListener("mouseup", mouseup0);
btnVUp.addEventListener("mouseout", mouseup0);//Si el mouse sale del botón iguamlente se termina la acción

//Flecha Abajo

function mousedown1(event) {
  console.log("Flecha ABAJO presionada");
  if(mousedownID==-1)  //Previene multiples loops
     mousedownID = setInterval(whilemousedown1, 100 /*se ejecuta cada 100ms*/);
}

function mouseup1(event) {
   if(mousedownID!=-1) {
    clearInterval(mousedownID);
    mousedownID=-1;
     
    //Envía a servidor que se dejó de presionar el botón
    $.ajax({ 
    url: '/controles',
    type: 'POST',
    data: {
      Move: "21"
    }
    });
   }
}

function whilemousedown1() {
  
  $.ajax({
    url: '/controles',
    type: 'POST',
    data: {
      Move: "1"
    }
  });
}

btnVDown.addEventListener("mousedown", mousedown1);
btnVDown.addEventListener("mouseup", mouseup1);
btnVDown.addEventListener("mouseout", mouseup1);//Si el mouse sale del botón iguamlente se termina la acción
