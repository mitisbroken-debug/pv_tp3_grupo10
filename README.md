# pv_tp3_grupo10

Trabajo Práctico N.° 3 — Parte 1, 2 y 3  
Materia: Programación Visual  
Año: 2026

## Descripción del proyecto

Este repositorio contiene el desarrollo del sistema de "Gestión de Proyectos Educativos". El proyecto documenta la transición de un sitio web estático tradicional a un entorno interactivo desarrollado íntegramente en React, aplicando separación de responsabilidades y modularidad.

La aplicación muestra una lista de proyectos académicos y permite gestionar esa información directamente desde la interfaz. Su desarrollo se realizó de forma incremental siguiendo las consignas del Trabajo Práctico 3:

- **Parte 1:** Nos enfocamos en la separación de la lógica en un módulo de servicio (`proyectoService.js`), la creación de componentes reutilizables para el layout general, la integración de estilos modulares y el manejo de estados interactivos utilizando `useState`.
- **Parte 2:** Evolucionamos la arquitectura dividiendo la vista principal en submódulos independientes (como el formulario y las tarjetas individuales `ProyectoCard`). Para esto, implementamos la comunicación entre componentes mediante el envío de **props** y aplicamos la **desestructuración** de objetos, logrando un código más limpio y escalable que soporta nueva información detallada.
- **Parte 3:** Incorporamos el hook `useEffect` para controlar efectos secundarios y sincronizar las modificaciones de la lista con un registro de actividad en tiempo real. Se aplicó `useRef` para evitar el disparo del efecto en el montaje inicial y se aisló el filtro de búsqueda del registro. Además, se componentizó el formulario de alta en `FormularioProyecto.jsx`.

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
│   │   ├── ProyectoCard.jsx
│   │   └── RegistroActividad.jsx
│   ├── css/                # Hojas de estilo modulares por componente
│   │   ├── DetalleProyecto.css
│   │   ├── FormularioProyecto.css
│   │   ├── ListaProyectos.css
│   │   ├── ProyectoCard.css
│   │   ├── RegistroActividad.css
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

| Módulo                | Archivo(s)                            | Qué hicimos                                                                                                                                                                     |
| --------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Servicio de Datos** | `src/services/proyectoService.js`     | Arreglo inicial de 5 proyectos. Exportación de funciones flecha (`obtenerProyectos`, `agregarProyecto`, `eliminarProyecto`, `buscarProyecto`) para aislar la lógica matemática. |
| **Layout Base**       | `Header.jsx`, `Footer.jsx`, `Nav.jsx` | Transformación del HTML repetitivo en componentes funcionales. Enlaces del menú estáticos (`href="#"`) a la espera del enrutador.                                               |
| **Vista Principal**   | `ListaProyectos.jsx`                  | Implementación de `useState`. Renderizado dinámico de la tabla, formulario para altas, botón de eliminar y campo de búsqueda con filtrado en tiempo real.                       |
| **Estilos**           | `styles.css`, `ListaProyectos.css`    | Mapeo de estilos institucionales y de los elementos del explorador central. Importados directamente en los componentes correspondientes.                                        |

---

## Parte 2

Foco en la comunicación entre componentes mediante el pasaje de información (**Props**) y simplificación con **desestructuración** de objetos.

| Módulo                  | Archivos                                    | Qué hicimos                                                                                                                                                                                                          |
| ----------------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tarjeta UI**          | `ProyectoCard.jsx`                          | Componente visual para proyectos individuales. Recibe el objeto por props, aplica desestructuración (`const { id, titulo, categoria, estado } = proyecto`) y muestra la información junto con los botones de acción. |
| **Refactorización**     | `ListaProyectos.jsx`                        | Reemplazo de la estructura rígida de `<table>`. Ahora el `.map()` invoca `<ProyectoCard />`, pasándole las props necesarias y las funciones para eliminar o ver detalles.                                            |
| **Ampliación de Datos** | `DetalleProyecto.jsx`, `ListaProyectos.jsx` | Preparación de la vista extendida y actualización de los estados del formulario para soportar nuevos campos (recursos en PDF/Drive, roles del equipo).                                                               |

---

## Parte 3

Foco en el control de efectos secundarios con `useEffect`, registro de actividad en tiempo real y componentización del formulario de alta.

| Módulo                        | Archivo(s)                                         | Qué hicimos                                                                                                                                                                                                                                                                                         |
| ----------------------------- | -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Registro de actividad**     | `RegistroActividad.jsx`, `RegistroActividad.css`   | Componente de presentación que recibe por props la fecha/hora formateada (`fecha`) y muestra el mensaje: _"Última actualización de la lista: DD/MM/AAAA a las HH:MM hs."_ Estilos propios con contenedor destacado al pie de la vista.                                                              |
| **Efectos secundarios**       | `ListaProyectos.jsx`                               | Implementación de `useEffect` con arreglo de dependencias `[proyectos]`, de modo que el efecto solo se dispara al agregar o eliminar un proyecto. Se captura la fecha/hora con `new Date()`, se formatea con `padStart` y se guarda en el estado `ultimaActualizacion`.                             |
| **Optimización con useRef**   | `ListaProyectos.jsx`                               | Uso de `useRef` (`esPrimerRender`) como bandera para omitir la primera ejecución automática del `useEffect` al montar la página. El registro solo se muestra tras la primera acción real de alta o baja del usuario.                                                                                |
| **Aislamiento del filtro**    | `ListaProyectos.jsx`                               | El campo de búsqueda opera sobre un estado independiente (`busqueda`) y genera `proyectosFiltrados` sin modificar el arreglo `proyectos`. De este modo, escribir en el buscador no altera la fecha del registro de actividad.                                                                       |
| **Formulario componentizado** | `FormularioProyecto.jsx`, `FormularioProyecto.css` | Extracción del bloque de alta a un componente hijo reutilizable. El padre (`ListaProyectos`) gestiona el estado del formulario y la lógica de envío; el hijo recibe `form`, `manejarCambio` y el callback `agregarProyecto`, que delega al servicio y actualiza la lista para disparar el registro. |

### Detalle de la lógica del registro

1. **Montaje inicial:** `ultimaActualizacion` comienza vacío y el `useRef` evita registrar una hora ficticia al cargar la página.
2. **Alta o baja:** `agregarProyecto` y `eliminarProyecto` actualizan el servicio y llaman a `setProyectos`, lo que dispara el `useEffect`.
3. **Formato del mensaje:** `DD/MM/AAAA a las HH:MM hs.` (día, mes, año, hora y minutos con dos dígitos).
4. **Renderizado condicional:** el mensaje solo se renderiza cuando `ultimaActualizacion` tiene valor, es decir, después de la primera modificación real de la lista.

---

## Tecnologías

React 18 · Vite · JavaScript (ES6+, módulos ES, desestructuración) · HTML5 · CSS3 · Node.js / npm · Hooks (`useState`, `useEffect`, `useRef`)

---

## Parte 4

En esta etapa se implementó la navegación con `react-router-dom` para coordinar las vistas sin recargar el navegador.

| Módulo                          | Archivo(s)                                                                                                        | Qué hicimos                                                                                                                                        |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Configuración del enrutador** | `src/main.jsx`, `src/App.jsx`                                                                                     | Se agregó `BrowserRouter` en el arranque de la aplicación y `Routes` / `Route` en `App.jsx` para renderizar vistas condicionales según la URL.     |
| **Rutas principales**           | `src/App.jsx`                                                                                                     | Se definieron rutas para `/`, `/dashboard`, `/proyectos`, `/proyectos/:id` y `/perfil`.                                                            |
| **Navegación**                  | `src/components/Nav.jsx`                                                                                          | Se reemplazaron etiquetas `<a>` por `NavLink` para navegación instantánea con estilo activo sin recarga.                                           |
| **Detalle de proyecto**         | `src/components/ProyectoCard.jsx`, `src/components/DetalleProyectoPage.jsx`, `src/components/Detalleproyecto.jsx` | El botón de detalle se convirtió en un `Link` que lleva a `/proyectos/:id`, y se creó una página de detalle que carga los datos desde el servicio. |

### Comportamiento agregado

- El menú `Nav` conserva el acceso manual a la vista de detalle con `NavLink`.
- El botón `Ver Detalles` en cada tarjeta redirige a la ruta específica del proyecto.
- La vista de detalle se muestra sin recargar la página.
- Se mantuvo la estructura de proyecto y el servicio de datos existente.

---

## Parte 5

En esta etapa incorporamos el estado global usando React Context API para compartir el perfil de usuario entre componentes y evitar el prop drilling.

| Módulo                            | Archivo(s)                       | Qué hicimos                                                                                                                                                |
| --------------------------------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Contexto de Usuario**           | `src/context/UsuarioContext.jsx` | Creamos el contexto `UsuarioContext`, inicializado con datos simulados de usuario ya logueado. Expone el objeto `usuario` y la función `actualizarPerfil`. |
| **Proveedor global**              | `src/App.jsx`                    | Envolvimos la app con `<UsuarioProvider>`, permitiendo que `Header`, rutas y vistas compartan el mismo estado global sin pasar props manualmente.          |
| **Consumo en el encabezado**      | `src/components/Header.jsx`      | `Header` usa `useContext(UsuarioContext)` para mostrar dinámicamente el nombre y rol del usuario logueado en la barra superior.                            |
| **Perfil dinámico e interactivo** | `src/views/Perfil.jsx`           | `Perfil` consume el contexto global para renderizar los datos del usuario. Incluye un modo de edición con formulario y botón `Editar Perfil`.              |
| **Actualización sincronizada**    | `src/views/Perfil.jsx`           | Al guardar cambios, `Perfil` llama a `actualizarPerfil`, actualizando inmediatamente el contexto y reflejando el nombre en `Header` sin recargar.          |
| **Persistencia local**            | `src/context/UsuarioContext.jsx` | Se guarda el perfil en `localStorage` con `useEffect`. Al iniciar, el provider lee primero el almacenamiento local y usa los datos guardados si existen.   |

### Detalle de la implementación

- El estado inicial del usuario se define con valores por defecto y se reemplaza con el objeto almacenado en `localStorage` si ya existe.
- La función `actualizarPerfil` actualiza el estado global y dispara el efecto que persiste los cambios.
- La vista de perfil muestra los datos del usuario y permite editar `nombre`, `dni`, `rol` e `institución`.
- La aplicación mantiene los cambios después de recargar la página, conservando el estado global en el navegador.
