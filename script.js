document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formularioContacto');

    formulario.addEventListener('submit', function(evento) {
        // Evita que el formulario se envíe de forma predeterminada
        evento.preventDefault(); 
        
        // Simple verificación (los campos 'required' de HTML hacen la mayor parte)
        if (formulario.checkValidity()) {
            
            // --- Código de simulación de envío exitoso (¡Cámbialo después!) ---
            
            alert('✅ Mensaje enviado con éxito. ¡Pronto te contactaremos!');
            
            // Opcional: limpiar el formulario después del envío simulado
            formulario.reset(); 
            
            /* TODO: En un entorno de producción, aquí es donde usarías 
               'fetch()' o 'XMLHttpRequest' para enviar los datos al servidor 
               (o al servicio de formularios de terceros).
            */
            
        } else {
            // Esta parte se activa si los campos 'required' no se cumplen
            alert('❌ Por favor, rellena todos los campos obligatorios.');
        }
    });
});