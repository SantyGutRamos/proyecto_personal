import mysql.connector
import json

conexion = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="academia_canina"
)

cursor = conexion.cursor(dictionary=True)

cursor.execute("SELECT * FROM adiestramiento")
datos = cursor.fetchall()

# Guardar en JSON
with open("../data/adiestramiento.json", "w", encoding="utf-8") as archivo:
    json.dump(datos, archivo, indent=4, ensure_ascii=False)

cursor.close()
conexion.close()

print("Archivo adiestramiento.json generado correctamente")
