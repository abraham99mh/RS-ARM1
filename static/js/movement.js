

// --Enviar dato VELOCIDAD--
let btnVel = document.getElementById("AVelocidad");

btnVel.addEventListener("click", () =>{
  $.ajax({
    url: '/velocidad',
    type: 'POST',
    data: {
      RangeV: $('#RangeV').val()
    },

    success: function(response){
      console.log(response);
    },
    error: function(error){
      console.log(error);
    }
  });
});


// --Enviar datos CONTROL CON SLIDERS-- 
let btnGD0 = document.getElementById("GiroD0");
let btnGI0 = document.getElementById("GiroI0");
let btnGD1 = document.getElementById("GiroD1");
let btnGI1 = document.getElementById("GiroI1");
let btnGD2 = document.getElementById("GiroD2");
let btnGI2 = document.getElementById("GiroI2");
let btnGD3 = document.getElementById("GiroD3");
let btnGI3 = document.getElementById("GiroI3");
let btnGD4 = document.getElementById("GiroD4");
let btnGI4 = document.getElementById("GiroI4");
let btnGD5 = document.getElementById("GiroD5");
let btnGI5 = document.getElementById("GiroI5");

btnGD0.addEventListener("click", () =>{
  let btnVal = btnGD0.value;

  $.ajax({
    url: '/test',
    type: 'POST',
    data: {
      Range0: $('#Range0').val(),
      giro: btnVal
    },      

    success: function(response){
      console.log(response);
    },
    error: function(error){
      console.log(error);
    }
  });
});

btnGI0.addEventListener("click", () =>{
  let btnVal = btnGI0.value;

  $.ajax({
    url: '/test',
    type: 'POST',
    data: {
      Range0: $('#Range0').val(),
      giro: btnVal
    },      

    success: function(response){
      console.log(response);
    },
    error: function(error){
      console.log(error);
    }
  });
});

btnGD1.addEventListener("click", () =>{
  let btnVal = btnGD1.value;

  $.ajax({
    url: '/test',
    type: 'POST',
    data: {
      Range1: $('#Range1').val(),
      giro: btnVal
    },      

    success: function(response){
      console.log(response);
    },
    error: function(error){
      console.log(error);
    }
  });
});

btnGI1.addEventListener("click", () =>{
  let btnVal = btnGI1.value;

  $.ajax({
    url: '/test',
    type: 'POST',
    data: {
      Range1: $('#Range1').val(),
      giro: btnVal
    },      

    success: function(response){
      console.log(response);
    },
    error: function(error){
      console.log(error);
    }
  });
});

btnGD2.addEventListener("click", () =>{
  let btnVal = btnGD2.value;

  $.ajax({
    url: '/test',
    type: 'POST',
    data: {
      Range2: $('#Range2').val(),
      giro: btnVal
    },      

    success: function(response){
      console.log(response);
    },
    error: function(error){
      console.log(error);
    }
  });
});

btnGI2.addEventListener("click", () =>{
  let btnVal = btnGI2.value;

  $.ajax({
    url: '/test',
    type: 'POST',
    data: {
      Range2: $('#Range2').val(),
      giro: btnVal
    },      

    success: function(response){
      console.log(response);
    },
    error: function(error){
      console.log(error);
    }
  });
});

btnGD3.addEventListener("click", () =>{
  let btnVal = btnGD3.value;

  $.ajax({
    url: '/test',
    type: 'POST',
    data: {
      Range3: $('#Range3').val(),
      giro: btnVal
    },      

    success: function(response){
      console.log(response);
    },
    error: function(error){
      console.log(error);
    }
  });
});

btnGI3.addEventListener("click", () =>{
  let btnVal = btnGI3.value;

  $.ajax({
    url: '/test',
    type: 'POST',
    data: {
      Range3: $('#Range3').val(),
      giro: btnVal
    },      

    success: function(response){
      console.log(response);
    },
    error: function(error){
      console.log(error);
    }
  });
});

btnGD4.addEventListener("click", () =>{
  let btnVal = btnGD4.value;

  $.ajax({
    url: '/test',
    type: 'POST',
    data: {
      Range4: $('#Range4').val(),
      giro: btnVal
    },      

    success: function(response){
      console.log(response);
    },
    error: function(error){
      console.log(error);
    }
  });
});

btnGI4.addEventListener("click", () =>{
  let btnVal = btnGI4.value;

  $.ajax({
    url: '/test',
    type: 'POST',
    data: {
      Range4: $('#Range4').val(),
      giro: btnVal
    },      

    success: function(response){
      console.log(response);
    },
    error: function(error){
      console.log(error);
    }
  });
});

btnGD5.addEventListener("click", () =>{
  let btnVal = btnGD5.value;

  $.ajax({
    url: '/test',
    type: 'POST',
    data: {
      Range5: $('#Range5').val(),
      giro: btnVal
    },      

    success: function(response){
      console.log(response);
    },
    error: function(error){
      console.log(error);
    }
  });
});

btnGI5.addEventListener("click", () =>{
  let btnVal = btnGI5.value;

  $.ajax({
    url: '/test',
    type: 'POST',
    data: {
      Range5: $('#Range5').val(),
      giro: btnVal
    },      

    success: function(response){
      console.log(response);
    },
    error: function(error){
      console.log(error);
    }
  });
});


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


//Flecha Izquierda
function mousedown2(event) {
  if(mousedownID==-1)  //Previene multiples loops
     mousedownID = setInterval(whilemousedown2, 100 /*se ejecuta cada 100ms*/);
}

function mouseup2(event) {
   if(mousedownID!=-1) {
    clearInterval(mousedownID);
    mousedownID=-1;
     
    //Envía a servidor que se dejó de presionar el botón
    $.ajax({ 
    url: '/controles',
    type: 'POST',
    data: {
      Move: "22"
    }
    });
   }
}

function whilemousedown2() {
  
  $.ajax({
    url: '/controles',
    type: 'POST',
    data: {
      Move: "2"
    }
  });
}

btnHLeft.addEventListener("mousedown", mousedown2);
btnHLeft.addEventListener("mouseup", mouseup2);
btnHLeft.addEventListener("mouseout", mouseup2);//Si el mouse sale del botón iguamlente se termina la acción


//Flecha Adelante
function mousedown3(event) {
  if(mousedownID==-1)  //Previene multiples loops
     mousedownID = setInterval(whilemousedown3, 100 /*se ejecuta cada 100ms*/);
}

function mouseup3(event) {
   if(mousedownID!=-1) {
    clearInterval(mousedownID);
    mousedownID=-1;
     
    //Envía a servidor que se dejó de presionar el botón
    $.ajax({ 
    url: '/controles',
    type: 'POST',
    data: {
      Move: "23"
    }
    });
   }
}

function whilemousedown3() {
  
  $.ajax({
    url: '/controles',
    type: 'POST',
    data: {
      Move: "3"
    }
  });
}

btnHForward.addEventListener("mousedown", mousedown3);
btnHForward.addEventListener("mouseup", mouseup3);
btnHForward.addEventListener("mouseout", mouseup3);//Si el mouse sale del botón iguamlente se termina la acción


//Flecha Atras
function mousedown4(event) {
  if(mousedownID==-1)  //Previene multiples loops
     mousedownID = setInterval(whilemousedown4, 100 /*se ejecuta cada 100ms*/);
}

function mouseup4(event) {
   if(mousedownID!=-1) {
    clearInterval(mousedownID);
    mousedownID=-1;
     
    //Envía a servidor que se dejó de presionar el botón
    $.ajax({ 
    url: '/controles',
    type: 'POST',
    data: {
      Move: "24"
    }
    });
   }
}

function whilemousedown4() {
  
  $.ajax({
    url: '/controles',
    type: 'POST',
    data: {
      Move: "4"
    }
  });
}

btnHBackward.addEventListener("mousedown", mousedown4);
btnHBackward.addEventListener("mouseup", mouseup4);
btnHBackward.addEventListener("mouseout", mouseup4);//Si el mouse sale del botón iguamlente se termina la acción


//Flecha Derecha
function mousedown5(event) {
  if(mousedownID==-1)  //Previene multiples loops
     mousedownID = setInterval(whilemousedown5, 100 /*se ejecuta cada 100ms*/);
}

function mouseup5(event) {
   if(mousedownID!=-1) {
    clearInterval(mousedownID);
    mousedownID=-1;
     
    //Envía a servidor que se dejó de presionar el botón
    $.ajax({ 
    url: '/controles',
    type: 'POST',
    data: {
      Move: "25"
    }
    });
   }
}

function whilemousedown5() {
  
  $.ajax({
    url: '/controles',
    type: 'POST',
    data: {
      Move: "5"
    }
  });
}

btnHRight.addEventListener("mousedown", mousedown5);
btnHRight.addEventListener("mouseup", mouseup5);
btnHRight.addEventListener("mouseout", mouseup5);//Si el mouse sale del botón iguamlente se termina la acción


//Flecha Rotacion Izq
function mousedown6(event) {
  if(mousedownID==-1)  //Previene multiples loops
     mousedownID = setInterval(whilemousedown6, 100 /*se ejecuta cada 100ms*/);
}

function mouseup6(event) {
   if(mousedownID!=-1) {
    clearInterval(mousedownID);
    mousedownID=-1;
     
    //Envía a servidor que se dejó de presionar el botón
    $.ajax({ 
    url: '/controles',
    type: 'POST',
    data: {
      Move: "26"
    }
    });
   }
}

function whilemousedown6() {
  
  $.ajax({
    url: '/controles',
    type: 'POST',
    data: {
      Move: "6"
    }
  });
}

btnRLeft.addEventListener("mousedown", mousedown6);
btnRLeft.addEventListener("mouseup", mouseup6);
btnRLeft.addEventListener("mouseout", mouseup6);//Si el mouse sale del botón iguamlente se termina la acción


//Flecha Rotacion Der
function mousedown7(event) {
  if(mousedownID==-1)  //Previene multiples loops
     mousedownID = setInterval(whilemousedown7, 100 /*se ejecuta cada 100ms*/);
}

function mouseup7(event) {
   if(mousedownID!=-1) {
    clearInterval(mousedownID);
    mousedownID=-1;
     
    //Envía a servidor que se dejó de presionar el botón
    $.ajax({ 
    url: '/controles',
    type: 'POST',
    data: {
      Move: "27"
    }
    });
   }
}

function whilemousedown7() {
  
  $.ajax({
    url: '/controles',
    type: 'POST',
    data: {
      Move: "7"
    }
  });
}

btnRRight.addEventListener("mousedown", mousedown7);
btnRRight.addEventListener("mouseup", mouseup7);
btnRRight.addEventListener("mouseout", mouseup7);//Si el mouse sale del botón iguamlente se termina la acción