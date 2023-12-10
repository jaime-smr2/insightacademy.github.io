document.addEventListener('DOMContentLoaded', function () {
    const radiosFiltro = document.getElementsByName('filtro');
    const contenedorArticulos = document.getElementById('articulos');
    
    // Datos de ejemplo, ahora incluyendo la propiedad "imagen" y "orden"
    const articulos = [
        { nombre: 'Programación', categoria: 'programacion', texto: 'Introducción a HTML y CSS', imagen: '/src/img/informatica/introduction_HTML_CSS.jpg', orden: 1, enlace: 'enlace1.html' },
        { nombre: 'Sistemas Operativos', categoria: 'sistemas_operativos', texto: 'Introducción a Windows', imagen: '/src/img/informatica/windows_introduction.jpg', orden: 2, enlace: 'enlace2.html' },
        { nombre: 'Programación', categoria: 'programacion', texto: 'Python para principiantes', imagen: '/src/img/informatica/python.jpg', orden: 3, enlace: 'enlace1.html' },
        
        { nombre: 'Programación', categoria: 'programacion', texto: 'Programación Web', imagen: '/src/img/informatica/programacion_web.jpg', orden: 4, enlace: 'enlace2.html' },
        { nombre: 'Sistemas Operativos', categoria: 'sistemas_operativos', texto: 'Introducción a Linux', imagen: '/src/img/informatica/linux_introduction.jpg', orden: 5, enlace: 'enlace2.html' },
        { nombre: 'Programación', categoria: 'programacion', texto: 'Bases de datos', imagen: '/src/img/informatica/databases.jpg', orden: 6, enlace: 'enlace1.html' },
        
        
    ];

    function mostrarArticulos(filtro) {
        contenedorArticulos.innerHTML = '';

        const articulosFiltrados = (filtro === 'todos') ? articulos : articulos.filter(articulo => articulo.categoria === filtro);

        articulosFiltrados.forEach(articulo => {
            // Crear un enlace <a> en lugar de un div
            const enlaceArticulo = document.createElement('a');
            enlaceArticulo.classList.add('articulo');
            enlaceArticulo.href = articulo.enlace; // Asignar el enlace desde el objeto articulo

            // Agregar imagen al enlaceArticulo
            const imagenArticulo = document.createElement('img');
            imagenArticulo.src = articulo.imagen;
            imagenArticulo.alt = articulo.nombre;
            enlaceArticulo.appendChild(imagenArticulo);

            // Agregar texto al enlaceArticulo
            const textoArticulo = document.createElement('p');
            textoArticulo.textContent = articulo.texto;
            enlaceArticulo.appendChild(textoArticulo);

            enlaceArticulo.style.order = articulo.orden;

            contenedorArticulos.appendChild(enlaceArticulo);
        });
    }

    // Evento al cambiar el filtro
    radiosFiltro.forEach(radio => {
        radio.addEventListener('change', function () {
            const filtroSeleccionado = document.querySelector('input[name="filtro"]:checked').value;
            mostrarArticulos(filtroSeleccionado);
        });
    });

    // Mostrar todos los artículos al cargar la página
    mostrarArticulos('todos');
});
