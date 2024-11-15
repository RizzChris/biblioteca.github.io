
 // Estado inicial de los cubículos
        let cubiculos = {};
        
        // Inicializar los cubículos para ambos pisos
        for (let piso = 1; piso <= 2; piso++) {
            cubiculos[piso] = {};
            for (let num = 1; num <= 17; num++) {
                cubiculos[piso][num] = {
                    estado: 'disponible',
                    reservaActual: null
                };
            }
        }

        // Función para actualizar la lista de cubículos según el piso seleccionado
        function actualizarCubiculos() {
            const pisoSeleccionado = document.getElementById('piso').value;
            const selectCubiculo = document.getElementById('cubiculo');
            
            // Limpiar opciones actuales
            selectCubiculo.innerHTML = '<option value="">Seleccione un cubículo</option>';
            
            if (pisoSeleccionado) {
                // Agregar cubículos disponibles del piso seleccionado
                for (let num = 1; num <= 17; num++) {
                    if (cubiculos[pisoSeleccionado][num].estado === 'disponible') {
                        const option = document.createElement('option');
                        option.value = num;
                        option.textContent = `Cubículo ${num}`;
                        selectCubiculo.appendChild(option);
                    }
                }
            }
        }

        // Función para verificar disponibilidad y mostrar confirmación
        function verificarDisponibilidad(event) {
            event.preventDefault();
            
            const matricula = document.getElementById('matricula').value;
            const piso = document.getElementById('piso').value;
            const cubiculo = document.getElementById('cubiculo').value;
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
                <p><strong>Piso:</strong> ${piso}</p>
                <p><strong>Cubículo:</strong> ${cubiculo}</p>
                <p><strong>Hora:</strong> ${hora}</p>
                <p><strong>Duración:</strong> ${duracion} hora(s)</p>
            `;
            modal.style.display = 'flex';
        }

        // Función para confirmar la reserva
        function confirmarReserva() {
            const matricula = document.getElementById('matricula').value;
            const piso = document.getElementById('piso').value;
            const cubiculo = document.getElementById('cubiculo').value;
            const hora = document.getElementById('hora').value;
            const duracion = document.getElementById('duracion').value;

            cubiculos[piso][cubiculo].estado = 'ocupado';
            cubiculos[piso][cubiculo].reservaActual = {
                matricula: matricula,
                hora: hora,
                duracion: duracion
            };

            cerrarModal();
            alert('Reserva confirmada con éxito');

            // Limpiar formulario
            document.getElementById('form-reserva').reset();
            // Actualizar lista de cubículos
            actualizarCubiculos();
        }

        // Función para cerrar el modal
        function cerrarModal() {
            document.getElementById('modal-confirmacion').style.display = 'none';
        }