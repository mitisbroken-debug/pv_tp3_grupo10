const gestionProyectos = (() => {
 
    let proyectos = [
        {
            id: 1,
            titulo: "Sistema de Gestión de Turnos Médicos",
            categoria: "Salud",
            estado: "Finalizado",
            descripcion: [
                "Este proyecto tiene como objetivo principal el desarrollo de una aplicación web que permita a los pacientes solicitar turnos médicos de manera online, reduciendo los tiempos de espera y optimizando la agenda de los profesionales de la salud. La plataforma integra un sistema de notificaciones automáticas para recordar los turnos asignados.",
                "Durante el desarrollo se aplicaron metodologías ágiles para organizar las tareas del equipo, utilizando HTML, CSS y JavaScript como tecnologías base. El resultado final es una interfaz intuitiva que permite tanto a pacientes como a médicos gestionar sus agendas de forma eficiente y segura."
            ],
            links: [
                { tipo: "PDF", url: "https://drive.google.com/file/ejemplo1", texto: "Documentación del proyecto" },
                { tipo: "Drive", url: "https://drive.google.com/drive/ejemplo1", texto: "Carpeta del equipo" },
                { tipo: "GitHub", url: "https://github.com/ejemplo/turnos-medicos", texto: "Repositorio" }
            ],
            equipo: [
                { nombre: "Gabriel Ortega", rol: "Desarrollador Frontend" },
                { nombre: "Lucas Alvaro Flores", rol: "Diseñador UI/UX" },
                { nombre: "Federico Rios Marcial", rol: "Documentador" },
                { nombre: "Mauro Arcangel Chauque", rol: "Desarrollador Backend" },
                { nombre: "Vega Brian Agustin", rol: "Líder de Proyecto" }
            ]
        },
        {
            id: 2,
            titulo: "Plataforma de Seguimiento Académico",
            categoria: "Educación",
            estado: "En curso",
            descripcion: [
                "La Plataforma de Seguimiento Académico es una herramienta diseñada para que los estudiantes de la Facultad de Ingeniería puedan monitorear su progreso a lo largo de la carrera. Permite visualizar materias aprobadas, pendientes y en curso, junto con el promedio general actualizado en tiempo real.",
                "El sistema también incluye un módulo para que los docentes carguen calificaciones y realicen seguimiento de la asistencia. La plataforma fue desarrollada pensando en la accesibilidad y la facilidad de uso, garantizando que tanto alumnos como docentes puedan utilizarla sin dificultades técnicas."
            ],
            links: [
                { tipo: "PDF", url: "https://drive.google.com/file/ejemplo2", texto: "Informe final" },
                { tipo: "Drive", url: "https://drive.google.com/drive/ejemplo2", texto: "Recursos del proyecto" },
                { tipo: "GitHub", url: "https://github.com/ejemplo/seguimiento-academico", texto: "Repositorio" }
            ],
            equipo: [
                { nombre: "Gabriel Ortega", rol: "Analista de Sistemas" },
                { nombre: "Lucas Alvaro Flores", rol: "Desarrollador Frontend" },
                { nombre: "Federico Rios Marcial", rol: "Tester" },
                { nombre: "Mauro Arcangel Chauque", rol: "Desarrollador Full Stack" },
                { nombre: "Vega Brian Agustin", rol: "Base de Datos" }
            ]
        },
        {
            id: 3,
            titulo: "App de Gestión de Biblioteca Universitaria",
            categoria: "Educación",
            estado: "Finalizado",
            descripcion: [
                "Este proyecto consiste en el desarrollo de una aplicación para digitalizar la gestión de préstamos de libros en la biblioteca de la Facultad de Ingeniería. Los usuarios pueden buscar libros disponibles, reservarlos y consultar el historial de préstamos desde cualquier dispositivo con conexión a internet.",
                "El sistema de gestión incluye un panel administrativo para que los bibliotecarios puedan controlar el inventario, registrar nuevas adquisiciones y generar reportes mensuales de los libros más solicitados. Se implementaron filtros de búsqueda por autor, título, categoría y disponibilidad."
            ],
            links: [
                { tipo: "PDF", url: "https://drive.google.com/file/ejemplo3", texto: "Manual de usuario" },
                { tipo: "Drive", url: "https://drive.google.com/drive/ejemplo3", texto: "Archivos del proyecto" },
                { tipo: "GitHub", url: "https://github.com/ejemplo/biblioteca-universitaria", texto: "Repositorio" }
            ],
            equipo: [
                { nombre: "Gabriel Ortega", rol: "Desarrollador Frontend" },
                { nombre: "Lucas Alvaro Flores", rol: "Diseñador de Interfaz" },
                { nombre: "Federico Rios Marcial", rol: "Redactor de Documentación" },
                { nombre: "Mauro Arcangel Chauque", rol: "Desarrollador Backend" },
                { nombre: "Vega Brian Agustin", rol: "Gestión de Datos" }
            ]
        },
        {
            id: 4,
            titulo: "Sistema de Encuestas para Evaluación Docente",
            categoria: "Administración",
            estado: "En curso",
            descripcion: [
                "El Sistema de Encuestas para Evaluación Docente permite a los alumnos de la Facultad completar formularios de evaluación de manera anónima al finalizar cada cuatrimestre. Los resultados son procesados automáticamente y presentados en gráficos estadísticos para facilitar el análisis por parte de las autoridades académicas.",
                "El proyecto busca mejorar la calidad educativa de la institución mediante la recolección de datos objetivos sobre el desempeño docente. La plataforma garantiza la confidencialidad de las respuestas y permite comparar resultados entre diferentes períodos lectivos para identificar tendencias y áreas de mejora."
            ],
            links: [
                { tipo: "PDF", url: "https://drive.google.com/file/ejemplo4", texto: "Propuesta del proyecto" },
                { tipo: "Drive", url: "https://drive.google.com/drive/ejemplo4", texto: "Carpeta compartida" },
                { tipo: "GitHub", url: "https://github.com/ejemplo/encuestas-docentes", texto: "Repositorio" }
            ],
            equipo: [
                { nombre: "Gabriel Ortega", rol: "Desarrollador Principal" },
                { nombre: "Lucas Alvaro Flores", rol: "Diseñador UX" },
                { nombre: "Federico Rios Marcial", rol: "Analista de Requisitos" },
                { nombre: "Mauro Arcangel Chauque", rol: "Programador" },
                { nombre: "Vega Brian Agustin", rol: "Coordinador de Equipo" }
            ]
        },
        {
            id: 5,
            titulo: "Portal de Noticias y Eventos Universitarios",
            categoria: "Comunicación",
            estado: "Finalizado",
            descripcion: [
                "El Portal de Noticias y Eventos Universitarios es una plataforma web destinada a centralizar toda la información relevante para la comunidad de la Facultad de Ingeniería. Los usuarios pueden consultar noticias institucionales, inscribirse a eventos académicos y acceder a un calendario con las fechas importantes del ciclo lectivo.",
                "La plataforma cuenta con un sistema de publicación de contenidos administrado por el área de comunicación de la facultad, permitiendo cargar noticias con imágenes, videos y archivos adjuntos. También incluye un módulo de notificaciones para alertar a los usuarios sobre eventos próximos de su interés."
            ],
            links: [
                { tipo: "PDF", url: "https://drive.google.com/file/ejemplo5", texto: "Documentación técnica" },
                { tipo: "Drive", url: "https://drive.google.com/drive/ejemplo5", texto: "Recursos multimedia" },
                { tipo: "GitHub", url: "https://github.com/ejemplo/portal-universitario", texto: "Repositorio" }
            ],
            equipo: [
                { nombre: "Gabriel Ortega", rol: "Desarrollador Web" },
                { nombre: "Lucas Alvaro Flores", rol: "Diseñador Visual" },
                { nombre: "Federico Rios Marcial", rol: "Redactor de Contenidos" },
                { nombre: "Mauro Arcangel Chauque", rol: "Integrador de Sistemas" },
                { nombre: "Vega Brian Agustin", rol: "Gestor de Base de Datos" }
            ]
        }
    ];
 
    const obtenerProyectos = () => [...proyectos];
 
    const agregarProyecto = (nuevoProyecto) => {
        proyectos = [...proyectos, nuevoProyecto];
    };
 
    const eliminarProyecto = (id) => {
        proyectos = proyectos.filter(p => p.id !== id);
    };
 
    const buscarProyecto = (texto) => {
        return proyectos.filter(p =>
            p.titulo.toLowerCase().includes(texto.toLowerCase())
        );
    };
 
    return { obtenerProyectos, agregarProyecto, eliminarProyecto, buscarProyecto };
 
})();
 
export default gestionProyectos;