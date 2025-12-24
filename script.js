//formulario
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formularioContacto');

    formulario.addEventListener('submit', function(evento) {
        // Evita que el formulario se envie de forma predeterminada
        evento.preventDefault(); 
        
        // simple verificacion
        if (formulario.checkValidity()) {
           //envio exitoso
            alert(' Mensaje enviado con éxito. ¡Pronto te contactaremos!');
            
            formulario.reset(); 
            
        } else {
            // Esta parte se activa si los campos 'required' no se cumplen
            alert(' Por favor, rellena todos los campos obligatorios.');
        }
    });
});
//calculadora
document.getElementById("btnCalcular").addEventListener("click", function () {

    const peso = parseFloat(document.getElementById("peso").value);
    const actividad = parseFloat(document.getElementById("actividad").value);
    const calorias = parseFloat(document.getElementById("calorias").value);

    if (!peso || !actividad || !calorias) {
        document.getElementById("resultado").innerHTML =
            " Por favor, completa todos los campos correctamente.";
        return;
    }

    // Fórmula RER
    const RER = 70 * Math.pow(peso, 0.75);

    // MER según actividad
    const MER = RER * actividad;

    // Convertir calorías → gramos
    const gramos = MER / calorias;

    document.getElementById("resultado").innerHTML =
        ` Tu perro necesita aproximadamente <br>
         <strong>${gramos.toFixed(0)} gramos</strong> de alimento por día.`;
});
//connexion con la base de datos
function cargarAdiestramiento(razaSeleccionada) {
    fetch("../data/adiestramiento.json")
        .then(res => res.json())
        .then(datos => {
            const resultado = datos.find(
                item => item.raza === razaSeleccionada
            );

            if (!resultado) {
                document.getElementById("adiestramiento").innerHTML =
                    "<p>No hay datos disponibles.</p>";
                return;
            }

            document.getElementById("adiestramiento").innerHTML = `
                <div class="box-info">
                    <h3>Plan de Adiestramiento</h3>
                    <p><strong>Nivel:</strong> ${resultado.nivel}</p>
                    <p><strong>Entorno ideal:</strong> ${resultado.entorno_ideal}</p>
                    <p><strong>Ejercicios:</strong> ${resultado.ejercicios}</p>
                    <p><strong>Duración diaria:</strong> ${resultado.duracion_diaria}</p>
                    <p><strong>Frecuencia:</strong> ${resultado.frecuencia}</p>
                    <p><strong>Notas:</strong> ${resultado.notas}</p>
                </div>
            `;
        });
}
//elementos de barra interactiva en adiestramineto
function consultarAdiestramiento() {
    const raza = document.getElementById("raza").value;
    const edad = document.getElementById("edad").value;
    const nivel = document.getElementById("nivel").value;

    if (edad === "") {
        alert("Por favor ingresa la edad del perro");
        return;
    }

    let mensaje = "";

    if (nivel === "alto") {
        mensaje = "Se recomienda entrenamiento diario, ejercicios físicos intensos y retos mentales.";
    } else if (nivel === "medio") {
        mensaje = "Entrenamiento regular con refuerzo positivo y paseos diarios.";
    } else {
        mensaje = "Sesiones cortas de entrenamiento y estimulación suave.";
    }

    document.getElementById("resultado-adiestramiento").innerHTML =
        ` <strong>${raza}</strong><br>
         Edad: ${edad} años<br>
         Recomendación: ${mensaje}`;
}
