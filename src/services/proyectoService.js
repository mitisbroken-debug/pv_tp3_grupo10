const proyectoService = (() => {
    let proyectos = [
        {
            id: 1,
            titulo: "Optimización de Consultas Académicas",
            categoria: "Base de Datos",
            estado: "Finalizado",
            descripcion: [
                "Este proyecto tuvo como objetivo analizar y mejorar el rendimiento de las consultas SQL utilizadas en el sistema de gestión académica de la facultad. Se identificaron cuellos de botella en las búsquedas de notas e historial de alumnos, aplicando técnicas de indexación y reescritura de queries para reducir los tiempos de respuesta.",
                "Como resultado, se logró una reducción del 60% en el tiempo promedio de consulta y una mejora notable en la experiencia de los usuarios administrativos. El proyecto incluyó documentación técnica completa y pruebas de carga para validar los cambios realizados."
            ],
            links: [
                { tipo: "PDF", url: "https://drive.google.com/file/d/ejemplo1/view" },
                { tipo: "Drive", url: "https://drive.google.com/drive/folders/ejemplo1" },
                { tipo: "GitHub", url: "https://github.com/grupo10/optimizacion-consultas" }
            ],
            equipo: [
                { nombre: "Brian Quispe", rol: "Líder de Proyecto / Base de Datos" },
                { nombre: "Lucas Flores", rol: "Documentación y Testing" },
                { nombre: "Fede Marcial", rol: "Análisis de Rendimiento" },
                { nombre: "Mauro López", rol: "Desarrollo de Scripts SQL" }
            ]
        },
        {
            id: 2,
            titulo: "Automatización de Planillas de Asistencia",
            categoria: "Macros y Planillas",
            estado: "En curso",
            descripcion: [
                "El proyecto busca automatizar el registro de asistencia docente mediante macros en Google Sheets, eliminando la carga manual de datos que actualmente realizan los coordinadores académicos. Se desarrollaron scripts en Apps Script que consolidan la información de múltiples hojas en un único reporte mensual.",
                "Actualmente se está trabajando en la integración con el sistema de correo institucional para enviar notificaciones automáticas ante ausencias reiteradas. Se espera que la solución final ahorre más de 10 horas semanales de trabajo administrativo en el departamento."
            ],
            links: [
                { tipo: "PDF", url: "https://drive.google.com/file/d/ejemplo2/view" },
                { tipo: "Drive", url: "https://drive.google.com/drive/folders/ejemplo2" },
                { tipo: "GitHub", url: "https://github.com/grupo10/asistencia-macros" }
            ],
            equipo: [
                { nombre: "Mauro López", rol: "Desarrollo de Macros" },
                { nombre: "Brian Quispe", rol: "Diseño de Base de Datos" },
                { nombre: "Lucas Flores", rol: "Interfaz y UX en Sheets" },
                { nombre: "Fede Marcial", rol: "Testing y Validación" }
            ]
        },
        {
            id: 3,
            titulo: "Script de Respaldo de Servidores",
            categoria: "Scripting",
            estado: "Finalizado",
            descripcion: [
                "Se desarrolló un conjunto de scripts en Bash para automatizar el respaldo incremental de los servidores del laboratorio de informática. El sistema genera copias de seguridad diarias comprimidas y las almacena en un servidor remoto, con registro detallado de cada operación en archivos de log.",
                "El proyecto fue desplegado exitosamente en producción y lleva más de seis meses operando sin interrupciones. Se implementó además un sistema de alertas por correo que notifica al administrador en caso de fallo, garantizando la integridad de los datos académicos almacenados."
            ],
            links: [
                { tipo: "PDF", url: "https://drive.google.com/file/d/ejemplo3/view" },
                { tipo: "Drive", url: "https://drive.google.com/drive/folders/ejemplo3" },
                { tipo: "GitHub", url: "https://github.com/grupo10/respaldo-servidores" }
            ],
            equipo: [
                { nombre: "Fede Marcial", rol: "Desarrollo de Scripts" },
                { nombre: "Brian Quispe", rol: "Configuración de Servidor" },
                { nombre: "Mauro López", rol: "Monitoreo y Alertas" },
                { nombre: "Lucas Flores", rol: "Documentación Técnica" }
            ]
        },
        {
            id: 4,
            titulo: "Análisis de Rendimiento Estudiantil",
            categoria: "Programación",
            estado: "En curso",
            descripcion: [
                "Este proyecto desarrolla una herramienta en Python para procesar y visualizar datos de rendimiento académico de los estudiantes por materia y cuatrimestre. A partir de los registros históricos exportados del SIU, se generan gráficos estadísticos que permiten identificar materias con alto índice de deserción o reprobación.",
                "La segunda etapa del proyecto contempla la incorporación de un modelo predictivo básico para anticipar situaciones de riesgo académico y permitir intervenciones tempranas por parte del cuerpo docente. Actualmente se está completando la fase de limpieza y normalización de los datos."
            ],
            links: [
                { tipo: "PDF", url: "https://drive.google.com/file/d/ejemplo4/view" },
                { tipo: "Drive", url: "https://drive.google.com/drive/folders/ejemplo4" },
                { tipo: "GitHub", url: "https://github.com/grupo10/rendimiento-estudiantil" }
            ],
            equipo: [
                { nombre: "Lucas Flores", rol: "Visualización de Datos" },
                { nombre: "Mauro López", rol: "Procesamiento en Python" },
                { nombre: "Brian Quispe", rol: "Gestión de Datos" },
                { nombre: "Fede Marcial", rol: "Análisis Estadístico" }
            ]
        },
        {
            id: 5,
            titulo: "Sistema de Gestión Bibliotecaria",
            categoria: "Base de Datos",
            estado: "Pendiente",
            descripcion: [
                "El proyecto propone diseñar e implementar un sistema de gestión para la biblioteca de la facultad, reemplazando el registro manual en papel por una base de datos relacional con interfaz web. El sistema permitirá registrar préstamos, devoluciones, búsqueda de material bibliográfico y control de stock.",
                "Se encuentra en fase de planificación, con el modelo entidad-relación ya definido y aprobado por el equipo docente. El desarrollo comenzará una vez finalizado el cuatrimestre actual, utilizando MySQL como motor de base de datos y una interfaz desarrollada en React para los operadores de la biblioteca."
            ],
            links: [
                { tipo: "PDF", url: "https://drive.google.com/file/d/ejemplo5/view" },
                { tipo: "Drive", url: "https://drive.google.com/drive/folders/ejemplo5" },
                { tipo: "GitHub", url: "https://github.com/grupo10/gestion-bibliotecaria" }
            ],
            equipo: [
                { nombre: "Brian Quispe", rol: "Diseño de Base de Datos" },
                { nombre: "Fede Marcial", rol: "Desarrollo Frontend" },
                { nombre: "Lucas Flores", rol: "Diseño de Interfaz" },
                { nombre: "Mauro López", rol: "Backend y API" }
            ]
        }
    ];

    const obtenerProyectos = () => [...proyectos];

    const agregarProyecto = (proyecto) => {
        proyectos = [...proyectos, proyecto];
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

export default proyectoService;