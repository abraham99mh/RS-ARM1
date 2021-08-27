
//Inputs rango de numeros
$('.form-control').change(function() {
    var n = $(this).val();
    if (n < -360)
        $(this).val(-360);
    if (n > 360)
        $(this).val(360);
});


//Numero de bloques que se han creado
var num = 0;

//Array de todos los bloques que han sido añadidos
var arrayB = new Array();
arrayB.push(num);//Se agrega el primer bloque default

//Agrega bloque
$('#agregarBloque').click(function() {
    num++;
    arrayB.push(num);

    $('.rss:last').after(
        `<div class="row d-flex align-items-center mb-3 rss" id="rss` + num + `" value="`+ num +`">
        <div class="col-md-1 text-center">
            <span>` + (num+1) + `</span>
        </div>
        <div class="col-md-9">
            <div class="card bloque">
                <div class="row p-2">
                    <div class="col-md-3 d-flex justify-content-center mb-2">
                        <div class="input-group input-group-sm">
                            <span class="input-group-text">M0</span>
                            <input type="number" min="-360" max="360" step="0.1" class="form-control text-end" placeholder="0" value="" id="m0Bloque` + num + `">
                            <span class="input-group-text">°</span>
                        </div>
                    </div>
                    <div class="col-md-3 d-flex justify-content-center mb-2">
                        <div class="input-group input-group-sm">
                            <span class="input-group-text">M1</span>
                            <input type="number" min="-360" max="360" step="0.1" class="form-control text-end" placeholder="0" value="" id="m1Bloque` + num + `">
                            <span class="input-group-text">°</span>
                        </div>
                    </div>
                    <div class="col-md-3 d-flex justify-content-center mb-2">
                        <div class="input-group input-group-sm">
                            <span class="input-group-text">M2</span>
                            <input type="number" min="-360" max="360" step="0.1" class="form-control text-end" placeholder="0" value="" id="m2Bloque` + num + `">
                            <span class="input-group-text">°</span>
                        </div>
                    </div>
                    <div class="col-md-3 d-flex justify-content-center mb-2">
                        <div class="input-group input-group-sm">
                            <span class="input-group-text">Velocidad</span>
                            <input type="number" min="-360" max="360" step="0.1" class="form-control text-end" placeholder="0" value="" id="velBloque` + num + `">
                        </div>
                    </div>
                    <div class="col-md-3 d-flex justify-content-center">
                        <div class="input-group input-group-sm">
                            <span class="input-group-text">M3</span>
                            <input type="number" min="-360" max="360" step="0.1" class="form-control text-end" placeholder="0" value="" id="m3Bloque` + num + `">
                            <span class="input-group-text">°</span>
                        </div>
                    </div>
                    <div class="col-md-3 d-flex justify-content-center">
                        <div class="input-group input-group-sm">
                            <span class="input-group-text">M4</span>
                            <input type="number" min="-360" max="360" step="0.1" class="form-control text-end" placeholder="0" value="" id="m4Bloque` + num + `">
                            <span class="input-group-text">°</span>
                        </div>
                    </div>
                    <div class="col-md-3 d-flex justify-content-center">
                        <div class="input-group input-group-sm">
                            <span class="input-group-text">M5</span>
                            <input type="number" min="-360" max="360" step="0.1" class="form-control text-end" placeholder="0" value="" id="m5Bloque` + num + `">
                            <span class="input-group-text">°</span>
                        </div>
                    </div>
                    <div class="col-md-3 d-flex justify-content-center">
                        <div class="input-group input-group-sm">
                            <span class="input-group-text">Sleep</span>
                            <input type="number" min="-360" max="360" step="0.1" class="form-control text-end" placeholder="0" value="" id="gradosBloque` + num + `">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-1">
            <div class="d-flex flex-column">
                <div class="upBloque" id="upBloque` + num + `"></div>
                <div class="downBloque" id="downBloque` + num + `"></div>
            </div>
        </div>
        <div class="col-md-1">
            <div class="d-flex flex-column"> 
                <div class="d-flex justify-content-center">
                    <div class="imgElim d-flex justify-content-center eliminarBloque" id="eliminarBloque` + num + `"> </div>
                </div>
            </div>
        </div>
    </div>`
    );
    
    console.log(arrayB);
});

//Elimina bloque
$('.blocksC').on('click','.eliminarBloque',function() {

    let v = $(this).parent().parent().parent().parent().attr('value');
    var vv = parseInt(v);

    let t = $(this);

    t.parent().parent().parent().parent().hide('slow', function(){ t.parent().parent().parent().parent().remove();});

    //$(this).parent().parent().parent().parent().remove();

    let i = arrayB.indexOf(vv);
            
    console.log("index = " + i);
    arrayB.splice(i, 1);

    console.log("array de bloques = " + arrayB);

});

//Funcion para mover bloque en el arreglo
function arraymove(arr, fromIndex, toIndex) {
    var el = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, el);
}

//Mover bloque una posicion arriba
$('.blocksC').on('click','.upBloque',function() {
    console.log("mover arriba");

    let v = $(this).parent().parent().parent().attr('value');
    var vv = parseInt(v);
    let i = arrayB.indexOf(vv);
    
    if(i!=0){

        console.log("index " + i);
        idRss = "#rss" + arrayB[i-1];
        console.log("id del anterior: " + idRss);

        $(this).parent().parent().parent().insertBefore(idRss).hide().show(900);
        arraymove(arrayB, i, i-1);

        console.log("array = " + arrayB);
    }
    else{console.log("primer bloque")}


});

//Mover bloque una posicion abajo
$('.blocksC').on('click','.downBloque',function() {
    console.log("mover abajo");

    let v = $(this).parent().parent().parent().attr('value');
    var vv = parseInt(v);
    let i = arrayB.indexOf(vv);
    
    let l = arrayB.length - 1;

    if(i!=l){
        console.log("index " + i);
    
        idRss = "#rss" + arrayB[i+1];

        console.log("id del posterior: " + idRss);

        $(this).parent().parent().parent().insertAfter(idRss).hide().show(900);;

        arraymove(arrayB, i, i+1);

        console.log("array = " + arrayB);
    }
    else{console.log("ultimo bloque")}
});

//Boton probar
$('#pruebaCrear').click(function(){
    let l = arrayB.length;
    if(l!=0){
        console.log("array = " + arrayB);
        //Bloques
        for(let i = 0; i<l ; i++){
            let valores = [];
            //Obtiene valor de cada input motor del bloque
            for(let j = 0; j<6 ; j++){
                let string = "#m"+ j + "Bloque" + arrayB[i];
                valores[j] = parseFloat($(string).val());
            }
            let stringVel = "#velBloque" + arrayB[i];
            let stringGrad = "#gradosBloque" + arrayB[i];
            valores[6] = parseFloat($(stringVel).val());
            valores[7] = parseFloat($(stringGrad).val());

            console.log("Valores = " + valores);

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

//Funcion guardar archivo
function guardarArchivo(nombre){
    
    let l = arrayB.length;
    if(l!=0){
        let stringTxt = "";
        console.log("array = " + arrayB);
        //Bloques
        for(let i=0; i<l ; i++){
            
            let valores = [];
            //Obtiene valor de cada input motor del bloque
            for(let j = 0; j<6 ; j++){
                let string = "#m"+ j + "Bloque" + arrayB[i];

                let v = $(string).val();

                if(v === ""){
                    valores[j] = 0;
                }
                else{
                    valores[j] = parseFloat(v);
                }
            }

            let stringVel = "#velBloque" + arrayB[i];
            let stringGrad = "#gradosBloque" + arrayB[i];

            let sv = $(stringVel).val();

            if(sv === ""){
                valores[6] = 0;
            }
            else{
                valores[6] = parseFloat(sv);
            }

            let sg = $(stringGrad).val();
            if(sg === ""){
                valores[7] = 0;
            }
            else{
                valores[7] = parseFloat(sg);
            }

            console.log("Valores = " + valores);
            stringTxt += valores + "\n";
            console.log(stringTxt);
        }

        var blob = new Blob([stringTxt], {type: "text/plain"});
        saveAs(blob, nombre + ".rsa");

    }else alert("No hay bloques");
}

//Boton guardar archivo
$('#guardarArchivo').click(function(){
    let nameFile = $('#nombreArch').val();
    console.log("Nombre del archivo: " + nameFile);
    if(nameFile != ""){

        console.log("Nombre del archivo: " + nameFile);

        guardarArchivo(nameFile);

    }else alert("Introduzca nombre al archivo");
});