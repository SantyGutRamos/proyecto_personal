import mysql.connector

# Conexión a la base de datos
conexion = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",       # coloca tu contraseña si tienes
    database="academia_canina"
)

cursor = conexion.cursor(dictionary=True)

# Pedir la raza al usuario
raza = input("Ingrese la raza del perro: ")

# Consulta SQL
consulta = """
SELECT raza, nivel, entorno_ideal, ejercicios, duracion_diaria, frecuencia, notas
FROM adiestramiento
WHERE raza = %s
"""

cursor.execute(consulta, (raza,))
resultado = cursor.fetchone()

# Mostrar resultado
if resultado:
    print("\nPlan de Adiestramiento\n")
    print(f"Raza: {resultado['raza']}")
    print(f"Nivel: {resultado['nivel']}")
    print(f"Entorno ideal: {resultado['entorno_ideal']}")
    print(f"Ejercicios: {resultado['ejercicios']}")
    print(f"Duración diaria: {resultado['duracion_diaria']}")
    print(f"Frecuencia: {resultado['frecuencia']}")
    print(f"Notas: {resultado['notas']}")
else:
    print(" No se encontró información para esa raza.")

# Cerrar conexión
cursor.close()
conexion.close()
