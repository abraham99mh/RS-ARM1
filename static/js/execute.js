//Leer archivo

let input = document.getElementById('formFile');
let caja = document.getElementById('txtInfo');
var lineas

//Al seleccionar archivo se activa el boton Leer
var x = 1;
$( "#formFile" ).change(function() {
    if(x===1){
        $( "#btnLeer" ).prop( "disabled", false );
        x = 0;
    }else{
        $( "#btnEjecutar" ).prop( "disabled", true );
    }
    
});

//Boton lee el contenido del archivo
$('#btnLeer').click(function(){
    console.log(input.files);
    let reader = new FileReader();
    reader.onload = function(){
        lineas = reader.result.split('\n').map(function(line){
            return line.split(',');
        });
        console.log(lineas);

        //Imprime en cuadro de texto los datos a ejecutar
        
        let str = "";
        for(let i in lineas){
            
            if(lineas[i][0] === ""){
                console.log("linea vacia");
            }else{
                let valores = []

                for(let j in lineas[i]){
                    valores[j] = lineas[i][j];
                }
                let ind = parseInt(i);
                str += "Secuencia " + (ind + 1) + "\n";
                str += "M0: " + valores[0] + "°\t";
                str += "M1: " + valores[1] + "°\n"; 
                str += "M2: " + valores[2] + "°\t"; 
                str += "M3: " + valores[3] + "°\n"; 
                str += "M4: " + valores[4] + "°\t"; 
                str += "M5: " + valores[5] + "°\n"; 
                str += "Vel: " + valores[6] + "\t"; 
                str += "Sleep: " + valores[7] + "\n\n"; 
            }
        }

        $('#txtInfo').val(str);

    }
    reader.readAsText(input.files[0]);
    $( "#btnEjecutar" ).prop( "disabled", false );
});

//Boton ejecutar
$('#btnEjecutar').click(function(){

    for(let i in lineas){
        if(lineas[i][0] === ""){
            console.log("linea vacia");
        }
        else{
            
            let valores = []
    
            for(let j in lineas[i]){
                valores[j] = lineas[i][j];
            }
    
            console.log("valores: " + valores);
            
            $.ajax({
                url: '/pruebaCrear',
                type: 'POST',
                async: false,
                data: {
                    ValoresInp: valores
                }
            })
            .done(function(response) {
                console.log( "success" );
            });
        }
    }
});