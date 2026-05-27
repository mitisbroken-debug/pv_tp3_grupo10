# pv_tp3_grupo10

Trabajo Práctico N.° 3 — Parte 1  
Materia: Programación Visual  
Año: 2026

## Descripción breve del proyecto

Este proyecto implementa una aplicación en React que muestra una lista de proyectos académicos y permite gestionar esa lista desde la interfaz. Se desarrolló siguiendo la consigna del TP3 Parte 1: separación de lógica en un módulo de servicio, creación de componentes reutilizables de layout, integración de estilos y manejo de estado con `useState`.

## Integrantes del grupo

| Nombre completo | Usuario de GitHub |
|---|---|
| Gabriel Ortega | [Gabo506](https://github.com/Gabo506) |
| Federico Rios Marcial | [Fede-Marcial](https://github.com/Fede-Marcial) |
| Mauro Arcangel Chauque | [Mauro006](https://github.com/Mauro006) |
| Vega Brian Agustin | [mitisbroken-debug](https://github.com/mitisbroken-debug) |

## Cumplimiento de la consigna (TP3 Parte 1)

### 1) Creación del módulo de servicio (`proyectoService.js`)

Se creó la carpeta `src/services` y dentro de ella el archivo `proyectoService.js`, que contiene el arreglo inicial de proyectos con los campos solicitados:

- `id`
- `titulo`
- `categoria`
- `estado`

El módulo es el responsable de la lógica de datos de proyectos.

### 2) Componentes para el layout

Se creó la carpeta `src/components` con los componentes funcionales reutilizables pedidos:

- `Header.jsx`
- `Nav.jsx`
- `Footer.jsx`
- `ListaProyectos.jsx`


### 3) Integración de estilos

Los estilos se organizaron bajo `src/css` y se importan desde el componente principal.  
También se utilizaron estilos específicos para la lista de proyectos.

Archivos de estilos incluidos en la carpeta `src/css`:

- **`styles.css`**: estilos generales del layout de la aplicación. Se importa en `App.jsx` y aplica CSS a:
  - `body` — fondo, tipografía y márgenes de la página.
  - `header` — encabezado del sitio (fondo oscuro, texto centrado, padding).
  - `nav` — barra de navegación (flex, fondo blanco, sombra).
  - `nav a` y `nav a:hover` — enlaces del menú y efecto al pasar el mouse.
  - `main` — área principal donde se muestra la lista de proyectos.
  - `footer` — pie de página (fondo oscuro, texto centrado).
- **`ListaProyectos.css`**: estilos específicos del componente `ListaProyectos.jsx`. Se importa desde ese componente y aplica CSS a:
  - **Tabla** (`table`, `th`, `td`) — bordes, encabezados, filas alternadas y efecto hover.
  - **Campo de búsqueda** (`.btn-Buscar`) — input para filtrar proyectos por título.
  - **Botón Eliminar** (`.btn-eliminar`) — estilo y hover del botón en cada fila.
  - **Formulario de alta** (`.seccion-formulario`, `.caja-texto`) — inputs, select y espaciado del formulario.
  - **Botón Agregar** (`.btn-Agregar`) — estilo y hover del botón para incorporar nuevos proyectos.

### 4) Funcionalidades de la aplicación

La aplicación permite:

- Agregar nuevos proyectos.
- Visualizar la lista de proyectos.
- Eliminar proyectos existentes.
- Buscar proyectos por título.

### 5) Uso de hooks (`useState`)

En `ListaProyectos.jsx` se usa `useState` para manejar:

- el estado de `proyectos`,
- el texto de búsqueda,
- y los campos del formulario para altas.

El renderizado del listado se realiza de forma dinámica con `.map()`, y las acciones del usuario actualizan la vista en tiempo real.

#### Detalle del componente `ListaProyectos.jsx`

`ListaProyectos.jsx` es el componente central del TP, ya que conecta la lista de proyectos con la interfaz:

- **Estado inicial**: toma los proyectos iniciales desde el servicio y los guarda en el estado `proyectos`.
- **Búsqueda en tiempo real**: mantiene `busqueda` y filtra los proyectos por coincidencia en el **título** mientras el usuario escribe.
- **Render dinámico**: genera las filas de la tabla recorriendo la lista filtrada con `.map()`.
- **Alta de proyecto**: usa estados para `nuevoTitulo`, `nuevaCategoria` y `nuevoEstado`, y al presionar **Agregar Proyecto** incorpora un nuevo objeto al estado.
- **Eliminación**: cada fila tiene un botón **Eliminar** que remueve el proyecto del estado inmediatamente.

#### Rol de `App.jsx`

`App.jsx` funciona como componente contenedor del layout. Integra los componentes `Header`, `Nav` y `Footer`, y define el área principal (`<main>`) donde se renderiza `ListaProyectos` como **contenido central y único**.

## Estructura principal del proyecto

```text
pv_tp3_grupo10/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Nav.jsx
│   │   ├── Footer.jsx
│   │   └── ListaProyectos.jsx
│   ├── css/
│   ├── services/
│   │   └── proyectoService.js
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.html
└── package.json
```




