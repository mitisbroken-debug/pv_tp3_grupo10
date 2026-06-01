# pv_tp3_grupo10

Trabajo Práctico N.° 3 — Parte 1 y 2  
Materia: Programación Visual  
Año: 2026

## Descripción del proyecto

Este repositorio contiene el desarrollo del sistema de "Gestión de Proyectos Educativos". El proyecto documenta la transición de un sitio web estático tradicional a un entorno interactivo desarrollado íntegramente en React, aplicando separación de responsabilidades y modularidad.

La aplicación muestra una lista de proyectos académicos y permite gestionar esa información directamente desde la interfaz. Su desarrollo se realizó de forma incremental siguiendo las consignas del Trabajo Práctico 3:

* **Parte 1:** Nos enfocamos en la separación de la lógica en un módulo de servicio (`proyectoService.js`), la creación de componentes reutilizables para el layout general, la integración de estilos modulares y el manejo de estados interactivos utilizando `useState`.
* **Parte 2:** Evolucionamos la arquitectura dividiendo la vista principal en submódulos independientes (como el formulario y las tarjetas individuales `ProyectoCard`). Para esto, implementamos la comunicación entre componentes mediante el envío de **props** y aplicamos la **desestructuración** de objetos, logrando un código más limpio y escalable que soporta nueva información detallada.

## Integrantes del grupo

| Nombre completo        | Usuario de GitHub                                         |
| ---------------------- | --------------------------------------------------------- |
| Lucas Alvaro Flores    | [LucasAFlores](https://github.com/LucasAFlores)           |
| Federico Rios Marcial  | [Fede-Marcial](https://github.com/Fede-Marcial)           |
| Mauro Arcangel Chauque | [Mauro006](https://github.com/Mauro006)                   |
| Vega Brian Agustin     | [mitisbroken-debug](https://github.com/mitisbroken-debug) |

## Estructura del proyecto

```text
pv_tp3_grupo10/
├── src/
│   ├── assets/             # Recursos estáticos (imágenes, íconos)
│   ├── components/         # Componentes funcionales de la interfaz
│   │   ├── DetalleProyecto.jsx
│   │   ├── Footer.jsx
│   │   ├── FormularioProyecto.jsx
│   │   ├── Header.jsx
│   │   ├── ListaProyectos.jsx
│   │   ├── Nav.jsx
│   │   └── ProyectoCard.jsx
│   ├── css/                # Hojas de estilo modulares por componente
│   │   ├── DetalleProyecto.css
│   │   ├── FormularioProyecto.css
│   │   ├── ListaProyectos.css
│   │   ├── ProyectoCard.css
│   │   └── styles.css
│   ├── services/           # Lógica pura de gestión de datos
│   │   └── proyectoService.js
│   ├── App.css
│   ├── App.jsx             # Componente contenedor raíz
│   └── index.css           # Estilos globales base
├── package.json
└── README.md

```

---

## Parte 1

Migración de la interfaz estática a componentes de React, uso de hooks (`useState`) y separación de responsabilidades entre lógica y vista.

| Módulo | Archivo(s) | Qué hicimos |
| --- | --- | --- |
| **Servicio de Datos** | `src/services/proyectoService.js` | Arreglo inicial de 5 proyectos. Exportación de funciones flecha (`obtenerProyectos`, `agregarProyecto`, `eliminarProyecto`, `buscarProyecto`) para aislar la lógica matemática. |
| **Layout Base** | `Header.jsx`, `Footer.jsx`, `Nav.jsx` | Transformación del HTML repetitivo en componentes funcionales. Enlaces del menú estáticos (`href="#"`) a la espera del enrutador. |
| **Vista Principal** | `ListaProyectos.jsx` | Implementación de `useState`. Renderizado dinámico de la tabla, formulario para altas, botón de eliminar y campo de búsqueda con filtrado en tiempo real. |
| **Estilos** | `styles.css`, `ListaProyectos.css` | Mapeo de estilos institucionales y de los elementos del explorador central. Importados directamente en los componentes correspondientes. |

---

## Parte 2

Foco en la comunicación entre componentes mediante el pasaje de información (**Props**) y simplificación con **desestructuración** de objetos.

| Módulo | Archivos | Qué hicimos |
| --- | --- | --- |
| **Tarjeta UI** | `ProyectoCard.jsx` | Componente visual para proyectos individuales. Recibe el objeto por props, aplica desestructuración (`const { id, titulo, categoria, estado } = proyecto`) y muestra la información junto con los botones de acción. |
| **Refactorización** | `ListaProyectos.jsx` | Reemplazo de la estructura rígida de `<table>`. Ahora el `.map()` invoca `<ProyectoCard />`, pasándole las props necesarias y las funciones para eliminar o ver detalles. |
| **Ampliación de Datos** | `DetalleProyecto.jsx`, `ListaProyectos.jsx` | Preparación de la vista extendida y actualización de los estados del formulario para soportar nuevos campos (recursos en PDF/Drive, roles del equipo). |

---

## Tecnologías

React 18 · Vite · JavaScript (ES6+, módulos ES, desestructuración) · HTML5 · CSS3 · Node.js / npm
