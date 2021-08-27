#!/usr/bin/env python3

from os import error
from flask import Flask,render_template, request, Response
from time import sleep
#import RPi.GPIO as GPIO
import numpy as np

#DIR = 8       # Direction -> GPIO Pin
#STEP = 10      # Step -> GPIO Pin
#DIR2 = 16       # Direction -> GPIO in
#STEP2 = 18

CW = 1
CCW = 0
ang = 0
vel = 0.001
vel2 = 0.0006
max = 0

#GPIO.setmode(GPIO.BOARD)
#GPIO.setwarnings(False)

#GPIO.setup(DIR, GPIO.OUT)
#GPIO.setup(STEP, GPIO.OUT)
#GPIO.setup(DIR2, GPIO.OUT)
#GPIO.setup(STEP2, GPIO.OUT)

# Set the first direction you want it to spin
#GPIO.output(DIR, CW)
#GPIO.output(DIR2, CW)

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/control")
def control():
    return render_template('control.html')

@app.route("/ejecutar")
def ejecutar():
    return render_template('ejecutar.html')

@app.route("/crear")
def crear():
    return render_template('crear.html')

@app.route("/crear-dos")
def crearDos():
    return render_template('crear-dos.html')

@app.route("/test", methods=['POST'])
def test():

    giro = request.form["giro"]
    print("Giro value: " + giro)

    if (giro == "0"):
        
        # Get slider Values
        slider = request.form["Range0"]
        print("Slider value: " + slider)
        ang =(int(slider))
        velp=(int(1)*0.00001)
        velf=(vel-velp)
        velf2=(vel2-(velp*0.1))

        print("RotandoMotor_0_Der")
        #GPIO.output(DIR, CW)
        for x in range(ang):
            #GPIO.output(STEP, GPIO.HIGH)
            sleep(vel)
            #GPIO.output(STEP, GPIO.LOW)
            sleep(vel)
        sleep(1.0)

    elif (giro == "1"):
        # Get slider Values
        slider = request.form["Range0"]
        print("Slider value: " + slider)
        ang =(int(slider))
        velp=(int(1)*0.00001)
        velf=(vel-velp)
        velf2=(vel2-(velp*0.1))

        print("RotandoMotor_0_Izq")
        #GPIO.output(DIR, CCW)
        for x in range(ang):
            #GPIO.output(STEP, GPIO.HIGH)
            sleep(vel)
            #GPIO.output(STEP, GPIO.LOW)
            sleep(vel)
        sleep(1.0)

    elif (giro == "2"):
        
        # Get slider Values
        slider = request.form["Range1"]
        print("Slider value: " + slider)
        ang =(int(slider))
        velp=(int(1)*0.00001)
        velf=(vel-velp)
        velf2=(vel2-(velp*0.1))

        print("RotandoMotor_1_Der")
        #GPIO.output(DIR2, CW)
        for x in range(ang):
            #GPIO.output(STEP2, GPIO.HIGH)
            sleep(velf)
            #GPIO.output(STEP2, GPIO.LOW)
            sleep(velf)
        sleep(1.0)

    elif (giro == "3"):
        # Get slider Values
        slider = request.form["Range1"]
        print("Slider value: " + slider)
        ang =(int(slider))
        velp=(int(1)*0.00001)
        velf=(vel-velp)
        velf2=(vel2-(velp*0.1))

        print("RotandoMotor_1_Izq")
        #GPIO.output(DIR2, CCW)
        for x in range(ang):
            #GPIO.output(STEP2, GPIO.HIGH)
            sleep(velf)
            #GPIO.output(STEP2, GPIO.LOW)
            sleep(velf)
        sleep(1.0)

    elif (giro == "4"):
        
        # Get slider Values
        slider = request.form["Range2"]
        print("Slider value: " + slider)
        ang =(int(slider))
        velp=(int(1)*0.00001)
        velf=(vel-velp)
        velf2=(vel2-(velp*0.1))

        print("RotandoMotor_2_Der")
        #GPIO.output(DIR, CW)
        for x in range(ang):
            #GPIO.output(STEP, GPIO.HIGH)
            sleep(velf)
            #GPIO.output(STEP, GPIO.LOW)
            sleep(velf)
        sleep(1.0)

    elif (giro == "5"):
        # Get slider Values
        slider = request.form["Range2"]
        print("Slider value: " + slider)
        ang =(int(slider))
        velp=(int(1)*0.00001)
        velf=(vel-velp)
        velf2=(vel2-(velp*0.1))

        print("RotandoMotor_2_Izq")
        #GPIO.output(DIR, CCW)
        for x in range(ang):
            #GPIO.output(STEP, GPIO.HIGH)
            sleep(velf)
            #GPIO.output(STEP, GPIO.LOW)
            sleep(velf)
        sleep(1.0)

    elif (giro == "6"):
        
        # Get slider Values
        slider = request.form["Range3"]
        print("Slider value: " + slider)
        ang =(int(slider))
        velp=(int(1)*0.00001)
        velf=(vel-velp)
        velf2=(vel2-(velp*0.1))

        print("RotandoMotor_3_Der")
        #GPIO.output(DIR, CW)
        for x in range(ang):
            #GPIO.output(STEP, GPIO.HIGH)
            sleep(velf)
            #GPIO.output(STEP, GPIO.LOW)
            sleep(velf)
        sleep(1.0)

    elif (giro == "7"):
        # Get slider Values
        slider = request.form["Range3"]
        print("Slider value: " + slider)
        ang =(int(slider))
        velp=(int(1)*0.00001)
        velf=(vel-velp)
        velf2=(vel2-(velp*0.1))

        print("RotandoMotor_3_Izq")
        #GPIO.output(DIR, CCW)
        for x in range(ang):
            #GPIO.output(STEP, GPIO.HIGH)
            sleep(velf)
            #GPIO.output(STEP, GPIO.LOW)
            sleep(velf)
        sleep(1.0)
    
    elif (giro == "8"):
        
        # Get slider Values
        slider = request.form["Range4"]
        print("Slider value: " + slider)
        ang =(int(slider))
        velp=(int(1)*0.00001)
        velf=(vel-velp)
        velf2=(vel2-(velp*0.1))

        print("RotandoMotor_4_Der")
        #GPIO.output(DIR, CW)
        for x in range(ang):
            #GPIO.output(STEP, GPIO.HIGH)
            sleep(velf)
            #GPIO.output(STEP, GPIO.LOW)
            sleep(velf)
        sleep(1.0)

    elif (giro == "9"):
        # Get slider Values
        slider = request.form["Range4"]
        print("Slider value: " + slider)
        ang =(int(slider))
        velp=(int(1)*0.00001)
        velf=(vel-velp)
        velf2=(vel2-(velp*0.1))

        print("RotandoMotor_4_Izq")
        #GPIO.output(DIR, CCW)
        for x in range(ang):
            #GPIO.output(STEP, GPIO.HIGH)
            sleep(velf)
            #GPIO.output(STEP, GPIO.LOW)
            sleep(velf)
        sleep(1.0)

    elif (giro == "10"):
        
        # Get slider Values
        slider = request.form["Range5"]
        print("Slider value: " + slider)
        ang =(int(slider))
        velp=(int(1)*0.00001)
        velf=(vel-velp)
        velf2=(vel2-(velp*0.1))

        print("RotandoMotor_5_Der")
        #GPIO.output(DIR, CW)
        for x in range(ang):
            #GPIO.output(STEP, GPIO.HIGH)
            sleep(velf)
            #GPIO.output(STEP, GPIO.LOW)
            sleep(velf)
        sleep(1.0)

    elif (giro == "11"):
        # Get slider Values
        slider = request.form["Range5"]
        print("Slider value: " + slider)
        ang =(int(slider))
        velp=(int(1)*0.00001)
        velf=(vel-velp)
        velf2=(vel2-(velp*0.1))

        print("RotandoMotor_5_Izq")
        #GPIO.output(DIR, CCW)
        for x in range(ang):
            #GPIO.output(STEP, GPIO.HIGH)
            sleep(velf)
            #GPIO.output(STEP, GPIO.LOW)
            sleep(velf)
        sleep(1.0)
    
    return Response(status = 200)

@app.route("/velocidad", methods=['POST'])
def velocidad():

    vel = int(request.form["RangeV"])
    print("Velocidad ajustada a: " + str(vel))

    return Response(status = 200)

@app.route("/controles", methods=['POST'])
def controles():
    global max
    move = request.form["Move"]

    #Vertical - Arriba
    if(move=="0"):
        if(max<60):
            print("Moviendo hacia arriba")
            print("Max: " + str(max))
            max +=1
            #print("RotandoMotor_1_Der")
            #GPIO.output(DIR2, CW)
            #for x in np.arange(80):
                #GPIO.output(STEP2, GPIO.HIGH)
                #sleep(0.0005)
                #GPIO.output(STEP2, GPIO.LOW)
                #sleep(0.0005)
        else: print("Ya no puede rotar mas este motor")
        

    elif(move=="20"): print("Arriba terminado")
        

    #Vertical - Abajo
    elif(move=="1"):
        if(max>0):
            print("Moviendo hacia abajo")
            print("Max: " + str(max))
            max -=1
            #print("RotandoMotor_1_Der")
            #GPIO.output(DIR2, CWW)
            #for x in np.arange(80):
                #GPIO.output(STEP2, GPIO.HIGH)
                #sleep(0.0005)
                #GPIO.output(STEP2, GPIO.LOW)
                #sleep(0.0005)
        else: print("Ya no puede rotar mas este motor") 
        
    elif(move=="21"): print("Abajo terminado")

    #Horizontal - Izquierda
    elif(move=="2"):
        print("Moviendo hacia izquierda")
        print(move)
        
    elif(move=="22"): print("Izquierda terminado")

    #Horizontal - Adelante
    elif(move=="3"):
        print("Moviendo hacia adelante")
        print(move)
        
    elif(move=="23"): print("Adelante terminado")

    #Horizontal - Atrás
    elif(move=="4"):
        print("Moviendo hacia atras")
        print(move)
        
    elif(move=="24"): print("Atras terminado")

    #Horizontal - Derecha
    elif(move=="5"):
        print("Moviendo hacia derecha")
        print(move)
        
    elif(move=="25"): print("Derecha terminado")
    
    #Rotacion - Izq
    elif(move=="6"):
        print("Rotando hacia izq")
        print(move)
        
    elif(move=="26"): print("Rotacion Izq terminado")

    #Rotacion - Der
    elif(move=="7"):
        print("Rotando hacia der")
        print(move)
        
    elif(move=="27"): print("Rotacion Der terminado")


    return Response(status = 200)


@app.route("/pruebaCrear", methods=['POST'])
def preubaCrear():

    valores = request.form.getlist('ValoresInp[]')
    #print(valores)

    m0 = float(valores[0])
    print("\n==================\n")
    print(m0)
    m1 = float(valores[1])
    m2 = float(valores[2])
    m3 = float(valores[3])
    m4 = float(valores[4])
    m5 = float(valores[5])
    velBloque = float(valores[6])
    sleepBloque = float(valores[7])

    #Set vel


    #Movimientos de motores
    if np.isnan(m0) or m0==0:
        print("not move m0")
    else: print("move m0")
    
    #Set sleep

    return Response(status = 200)


if __name__ == "__main__":
    app.debug = True
    app.run()
