 
        // Estado inicial de las mesas
        let mesas = {};
        
        // Inicializar las mesas
        for (let num = 1; num <= 14; num++) {
            mesas[num] = {
                estado: 'disponible',
                reservaActual: null
            };
        }

        // Función para verificar disponibilidad y mostrar confirmación
        function verificarDisponibilidad(event) {
            event.preventDefault();
            
            const matricula = document.getElementById('matricula').value;
            const mesa = document.getElementById('mesa').value;
            const hora = document.getElementById('hora').value;
            const duracion = document.getElementById('duracion').value;

            // Validar hora (8:00 - 20:00)
            const horaNum = parseInt(hora.split(':')[0]);
            if (horaNum < 8 || horaNum > 20) {
                alert('El horario de reserva es de 8:00 a 20:00');
                return;
            }

            // Mostrar modal de confirmación
            const modal = document.getElementById('modal-confirmacion');
            const detalles = document.getElementById('detalles-reserva');
            detalles.innerHTML = `
                <p><strong>Matrícula:</strong> ${matricula}</p>
                <p><strong>Mesa:</strong> ${mesa}</p>
                <p><strong>Hora:</strong> ${hora}</p>
                <p><strong>Duración:</strong> ${duracion} hora(s)</p>
            `;
            modal.style.display = 'flex';
        }

        function confirmarReserva() {
            const matricula = document.getElementById('matricula').value;
            const mesa = document.getElementById('mesa').value;
            const hora = document.getElementById('hora').value;
            const duracion = document.getElementById('duracion').value;

            mesas[mesa].estado = 'ocupado';
            mesas[mesa].reservaActual = {
                matricula: matricula,
                hora: hora,
                duracion: duracion
            };

            cerrarModal();
            alert('Reserva confirmada con éxito');

            // Limpiar formulario
            document.getElementById('form-reserva').reset();
        }

        function cerrarModal() {
            document.getElementById('modal-confirmacion').style.display = 'none';
        }