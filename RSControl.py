
from os import error
from flask import Flask,render_template, request, Response
from time import sleep
#import RPi.GPIO as GPIO
import numpy as np
from werkzeug.datastructures import Range

DIR = 8       # Direction -> GPIO Pin
STEP = 10      # Step -> GPIO Pin
DIR2 = 16       # Direction -> GPIO in
STEP2 = 18
DIR3 = 11
STEP3 = 13

##veloc = 0
##velocidad = 0 


content = [0]
content1 = [0]
content2 = [0]
content3 = [0]
content4 = [0]
content5 = [0]
vel = [0.00015]

CW = 1
CCW = 0
ang = 0
#vels=1
#vel = 0.002
#vel2 = 0.0006
max = 0

''' Quitar estas comillas 
GPIO.setmode(GPIO.BOARD)
GPIO.setwarnings(False)

GPIO.setup(DIR, GPIO.OUT)
GPIO.setup(STEP, GPIO.OUT)
GPIO.setup(DIR2, GPIO.OUT)
GPIO.setup(STEP2, GPIO.OUT)
GPIO.setup(DIR3, GPIO.OUT)
GPIO.setup(STEP3, GPIO.OUT)

# Set the first direction you want it to spin
GPIO.output(DIR, CW)
GPIO.output(DIR2, CW)
GPIO.output(DIR3, CW)
'''

    ##Función que capta los valores desde los sliders 
def Real_time_slider(id,content,paso,direccion):
    Range  = ['Range0','Range1','Range2','Range3','Range4','Range5']
    STEPS = [STEP, STEP2, STEP3]
    DIRS = [DIR,DIR2, DIR3]
    Factor_pasos = [121.7]
    print(f"velocidad en motor: {vel[0]}")

    for i in Range: 
        if i == id :
            for j in STEPS:
                if j == paso: 
                    for x in DIRS: 
                        if x == direccion:
                           # for k in Factor_pasos: 
                            #    if k == factor_pasos: 

                                    content.append(int(request.form[id])) 
                                    if len(content) > 2: 
                                        content.pop(0)
                                    Despl = content[1] - content[0]
                                    print(f"Pasada pos: {content[0]}")
                                    print(f"Actual pos: {content[1]}")
                                    print(f"paso: {paso}")
                                    print(f"doreccion: {direccion}")
                                    if content[1] - content[0] > 0:
                                        print(f"pasos > 0 : {Despl}")
                             #           steps_to_take = Despl*factor_pasos
                                        '''  Quitar estas comillas 
                                        GPIO.output(direccion,CW)
                                        for step in range (0,round(steps_to_take)):
                                            GPIO.output(paso,GPIO.HIGH)
                                            sleep(vel[0])
                                            GPIO.output(paso,GPIO.LOW)
                                            sleep(vel[0])
                                            '''
                        
                                    elif content[1] - content[0] < 0:
                                        print(f"Despl < 0 : {Despl}")
                                        '''  Quitar estas comillas 
                                        GPIO.output(direccion,CCW)
                                        for step in range (0,-1*round(steps_to_take)):
                                            GPIO.output(paso,GPIO.HIGH)
                                            sleep(vel[0])
                                            GPIO.output(paso,GPIO.LOW)
                                            sleep(vel[0])
                                            ''' 
                                    else: 
                                        print("Same position")

app = Flask(__name__)

while True:

    @app.route("/")
    def index():
        return render_template('index.html')

#Ruta para control 
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
    
#############################
    @app.route("/velocidad", methods=['POST']) 
    def velocidad():
        global vel
        slider_value = int(request.form["RangeV"]) 
        vel[0] = (slider_value - 199)/-19800
        print(f"{vel[0]}")
        return Response(status = 200)

    ######  Motor 0 
    @app.route("/motor0", methods=['POST'])
    def motor0(): 
        id = "Range0" 
        paso = STEP
        direccion = DIR
       # factor_pasos = 121.7
        Real_time_slider(id,content,paso,direccion)
        return Response(status = 200)
        
    
    #Motor 1 
    @app.route('/motor1',methods = ['POST'])
    def motor1(): 
        id = "Range1"
        paso = STEP2
        direccion = DIR2
        #factor_pasos = 
        Real_time_slider(id, content1,paso,direccion)
        return Response(status = 200)
    
    #Motor 2
    @app.route('/motor2',methods = ['POST'])
    def motor2(): 
        id = "Range2"
        paso = STEP3
        direccion = DIR3
        Real_time_slider(id,content2,paso,direccion)
        return Response(status = 200)
    
    #Motor 3
    @app.route('/motor3',methods = ['POST'])
    def motor3(): 
        id = "Range3"
        Real_time_slider(id,content3)
        return Response(status = 200)

    #Motor 4
    @app.route('/motor4',methods = ['POST'])
    def motor4(): 
        id = "Range4"
        Real_time_slider(id,content4)
        return Response(status = 200)

    #Motor 5
    @app.route('/motor5',methods = ['POST'])
    def motor5(): 
        id = "Range5"
        Real_time_slider(id,content5)
        return Response(status = 200)
   

    @app.route("/controles", methods=['POST'])

    def controles():

        global max

        move = request.form["Move"]
        print("Move: " + move) 

        #Vertical - Arriba
        if(move=="0"):
            if(max<50):
                print("Moviendo hacia arriba")
                print("Max: " + str(max))
                max +=1

                print("RotandoMotor_1_Der")
                GPIO.output(DIR2, CW)
                for x in np.arange(80):
                    GPIO.output(STEP2, GPIO.HIGH)
                    sleep(0.0005)
                    GPIO.output(STEP2, GPIO.LOW)
                    sleep(0.0005)

                print("RotandoMotor_1_Der")
                GPIO.output(DIR, CCW)
                for x in np.arange(88):
                    GPIO.output(STEP, GPIO.HIGH)
                    sleep(0.0005)
                    GPIO.output(STEP, GPIO.LOW)
                    sleep(0.0005)

                print("RotandoMotor_1_Der")
                GPIO.output(DIR3, CW)
                for x in np.arange(52):
                    GPIO.output(STEP3, GPIO.HIGH)
                    sleep(0.001)
                    GPIO.output(STEP3, GPIO.LOW)
                    sleep(0.001)
            else: print("Ya no puede rotar mas este motor")

        elif(move=="20"): print("Arriba terminado")


        #Vertical - Abajo
        elif(move=="1"):
            if(max>-50):
                print("Moviendo hacia abajo")
                print("Max: " + str(max))
                max -=1

                print("RotandoMotor_1_Der")
                GPIO.output(DIR2, CCW)
                for x in np.arange(80):
                    GPIO.output(STEP2, GPIO.HIGH)
                    sleep(0.0005)
                    GPIO.output(STEP2, GPIO.LOW)
                    sleep(0.0005)

                print("RotandoMotor_1_Der")
                GPIO.output(DIR, CW)
                for x in np.arange(88):
                     GPIO.output(STEP, GPIO.HIGH)
                     sleep(0.0005)
                     GPIO.output(STEP, GPIO.LOW)
                     sleep(0.0005)

                print("RotandoMotor_1_Der")
                GPIO.output(DIR3, CCW)
                for x in np.arange(52):
                    GPIO.output(STEP3, GPIO.HIGH)
                    sleep(0.001)
                    GPIO.output(STEP3, GPIO.LOW)
                    sleep(0.001)
            else: print("Ya no puede rotar mas este motor") 

        elif(move=="21"): print("Abajo terminado")

        #Horizontal - Izquierda
        elif(move=="2"):
            print("Moviendo hacia izquierda")
            print(move)

        elif(move=="22"):
            print(move)

        #Horizontal - Adelante
        elif(move=="3"):
            print("Moviendo hacia adelante")
            print(move)

        elif(move=="23"):
            print(move)

        #Horizontal - Atrás
        elif(move=="4"):
            print("Moviendo hacia atras")
            print(move)

        elif(move=="24"):
            print(move)

        #Horizontal - Derecha
        elif(move=="5"):
            print("Moviendo hacia derecha")
            print(move)

        elif(move=="25"):
            print(move)

        #Rotacion - Izq
        elif(move=="6"):
            print("Rotando hacia izq")
            print(move)

        elif(move=="26"):
            print(move)

        #Rotacion - Der
        elif(move=="7"):
            print("Rotando hacia der")
            print(move)

        elif(move=="27"):
            print(move)


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
        app.run( port=8000, debug=True)
        app.run()


