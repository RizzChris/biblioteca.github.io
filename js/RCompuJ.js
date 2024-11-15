 
        // Estado inicial de las computadoras
        let computadoras = {
            gamer: {},
            normal: {}
        };
        
        // Inicializar las computadoras
        for (let num = 1; num <= 5; num++) {
            computadoras.gamer[num] = {
                estado: 'disponible',
                reservaActual: null
            };
        }
        for (let num = 1; num <= 36; num++) {
            computadoras.normal[num] = {
                estado: 'disponible',
                reservaActual: null
            };
        }

        // Función para actualizar la lista de computadoras según el tipo seleccionado
        function actualizarComputadoras() {
            const tipoSeleccionado = document.getElementById('tipo').value;
            const selectComputadora = document.getElementById('computadora');
            
            // Limpiar opciones actuales
            selectComputadora.innerHTML = '<option value="">Seleccione una computadora</option>';
            
            if (tipoSeleccionado) {
                // Agregar computadoras disponibles del tipo seleccionado
                for (let num = 1; num <= (tipoSeleccionado === 'gamer' ? 5 : 36); num++) {
                    if (computadoras[tipoSeleccionado][num].estado === 'disponible') {
                        const option = document.createElement('option');
                        option.value = num;
                        option.textContent = `Computadora ${tipoSeleccionado.toUpperCase()} ${num}`;
                        selectComputadora.appendChild(option);
                    }
                }
            }
        }

        function verificarDisponibilidad(event) {
            event.preventDefault();
            
            const matricula = document.getElementById('matricula').value;
            const tipo = document.getElementById('tipo').value;
            const computadora = document.getElementById('computadora').value;
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
                <p><strong>Tipo:</strong> ${tipo.toUpperCase()}</p>
                <p><strong>Computadora:</strong> ${tipo === 'gamer' ? 'Gamer' : 'Normal'} ${computadora}</p>
                <p><strong>Hora:</strong> ${hora}</p>
                <p><strong>Duración:</strong> ${duracion} hora(s)</p>
            `;
            modal.style.display = 'flex';
        }

        function confirmarReserva() {
            const matricula = document.getElementById('matricula').value;
            const tipo = document.getElementById('tipo').value;
            const computadora = document.getElementById('computadora').value;
            const hora = document.getElementById('hora').value;
            const duracion = document.getElementById('duracion').value;

            computadoras[tipo][computadora].estado = 'ocupado';
            computadoras[tipo][computadora].reservaActual = {
                matricula: matricula,
                hora: hora,
                duracion: duracion
            };

            cerrarModal();
            alert('Reserva confirmada con éxito');

            // Limpiar formulario
            document.getElementById('form-reserva').reset();
            // Actualizar lista de computadoras
            actualizarComputadoras();
        }

        function cerrarModal() {
            document.getElementById('modal-confirmacion').style.display = 'none';
        }