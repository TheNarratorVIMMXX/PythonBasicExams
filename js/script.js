/*****************************************************************************************************************************************************************************/
/*                                                                                                                                                                           */
/*                                                                  Scripts para el Proyecto Python Basic Exams                                                              */
/*                                                                                                                                                                           */
/*****************************************************************************************************************************************************************************/
/*                                                                                                                                                                           */
/* Autor: Magallanes López Carlos Gabriel                                                                                                                                    */
/* Versión del Proyecto: 1.0                                                                                                                                                 */
/* Correo: cgmagallanes23@gmail.com                                                                                                                                          */
/* Ultima Modificación: 15/05/2025                                                                                                                                           */
/*                                                                                                                                                                           */
/*****************************************************************************************************************************************************************************/

// i18n - Traducciones
const translations = {
    es: {
        // Header
        badge:              "Programación en Python · Fundamentos",
        h1:                 "Colección de <em>Exámenes</em> Básicos de Python",
        headerSub:          "4 exámenes progresivos que cubren los fundamentos esenciales de la programación",
        devChip1:           "👤 Desarrollador:",
        devChip1Val:        "Magallanes López Carlos Gabriel",
        devChip2:           "cgmagallanes23@gmail.com",
        devChip3:           "22 – 27 de octubre de 2025",
        // Nav
        navExams:           "Exámenes",
        navTable:           "Comparativa",
        navVal:             "Validaciones",
        navConcepts:        "Conceptos",
        navRun:             "Ejecución",
        // Exams Section
        examsSectionLabel:  "Contenido del proyecto",
        examsH2:            "Los Cuatro Exámenes",
        exam1Num:           "Examen 01",
        exam1Title:         "Rifa Escolar de Caridad",
        exam1Date:          "22 de octubre de 2025",
        exam1Desc:          "Selección de ganador entre 5 participantes basada en rendimiento académico y coincidencia de número aleatorio.",
        exam1Diff:          "Dificultad: ⭐⭐",
        exam2Num:           "Examen 02",
        exam2Title:         "Gestión de Inventario",
        exam2Date:          "23 de octubre de 2025",
        exam2Desc:          "Sistema de inventario que registra 10 productos y calcula el costo promedio por producto del proveedor.",
        exam2Diff:          "Dificultad: ⭐⭐⭐",
        exam3Num:           "Examen 03",
        exam3Title:         "Control de Ventas de Cafetería",
        exam3Date:          "27 de octubre de 2025",
        exam3Desc:          "Seguimiento de ventas durante 7 días: registra cafés y postres, calcula ingreso semanal y promedio diario.",
        exam3Diff:          "Dificultad: ⭐⭐⭐",
        exam4Num:           "Examen 04",
        exam4Title:         "Rastreador Semanal de Ejercicios",
        exam4Date:          "27 de octubre de 2025",
        exam4Desc:          "Registra 3 sesiones de ejercicio (tipo, duración, calorías) y muestra un resumen completo con estadísticas.",
        exam4Diff:          "Dificultad: ⭐⭐⭐⭐",
        // Table Section
        tableSectionLabel:  "Resumen",
        tableH2:            "Tabla Comparativa",
        thExam:             "Examen",
        thLoop:             "Tipo de Bucle",
        thFunc:             "Tipo de Función",
        thVal:              "Validaciones",
        thFormat:           "Formato de Salida",
        thDiff:             "Dificultad",
        tr1Exam:            "1 — Rifa",
        tr1Loop:            "while + break",
        tr1Func:            "Ninguna",
        tr1Val:             "4 validaciones",
        tr1Format:          "Operador %",
        tr2Exam:            "2 — Inventario",
        tr2Loop:            "for",
        tr2Func:            "Con retorno",
        tr2Val:             "3 validaciones",
        tr2Format:          "f-string",
        tr3Exam:            "3 — Cafetería",
        tr3Loop:            "for",
        tr3Func:            "Con retorno",
        tr3Val:             "4 validaciones",
        tr3Format:          ".format()",
        tr4Exam:            "4 — Ejercicio",
        tr4Loop:            "while",
        tr4Func:            "void",
        tr4Val:             "3 validaciones",
        tr4Format:          "f-string",
        // Validations Section
        valSectionLabel:    "Reglas de entrada",
        valH2:              "Reglas de Validación",
        val1H4:             "Examen 1 — Rifa",
        val1li1:            "Calificaciones: rango 1 – 10",
        val1li2:            "Número de la suerte: rango 1 – 10",
        val1li3:            "Promedio requerido: ≥ 9.0",
        val2H4:             "Examen 2 — Inventario",
        val2li1:            "Precio público: ≥ $0.50",
        val2li2:            "Costo del proveedor: ≥ $0.50",
        val2li3:            "Cantidad del producto: ≥ 1",
        val3H4:             "Examen 3 — Cafetería",
        val3li1:            "Cantidad de café: ≥ 0",
        val3li2:            "Precio del café: ≥ $15.00",
        val3li3:            "Cantidad de postres: ≥ 0",
        val3li4:            "Precio de postres: ≥ $25.00",
        val4H4:             "Examen 4 — Ejercicio",
        val4li1:            "Duración: > 0 minutos",
        val4li2:            "Calorías quemadas: > 0",
        val4li3:            'Tipo: "Cardio", "Fuerza" o "Resistencia"',
        // Concepts Section
        conceptsSectionLabel: "Objetivos de aprendizaje",
        conceptsH2:         "Conceptos Cubiertos",
        con1H4:             "Control de Bucles",
        con1li1:            "Bucles while con condiciones",
        con1li2:            "Bucles for con range()",
        con1li3:            "Contadores y variables de control",
        con1li4:            "Salida de bucles con break",
        con2H4:             "Validación de Entrada",
        con2li1:            "Verificación de rangos numéricos",
        con2li2:            "Validación de cadenas de texto",
        con2li3:            "Solicitud repetida ante entrada inválida",
        con2li4:            "Conversión segura de tipos",
        con3H4:             "Diseño de Funciones",
        con3li1:            "Funciones con valores de retorno",
        con3li2:            "Funciones void (procedimientos)",
        con3li3:            "Paso de parámetros",
        con3li4:            "Documentación de funciones",
        con4H4:             "Operaciones Matemáticas",
        con4li1:            "Acumulación de sumas",
        con4li2:            "Cálculo de promedios",
        con4li3:            "Redondeo de decimales",
        con4li4:            "Cálculos de porcentajes",
        con5H4:             "Formateo de Cadenas",
        con5li1:            "Operador % (estilo antiguo)",
        con5li2:            "Método .format()",
        con5li3:            "F-strings (literales formateados)",
        con5li4:            "Técnicas de concatenación",
        con6H4:             "Números Aleatorios",
        con6li1:            "Uso de random.randint()",
        con6li2:            "Especificación de rangos",
        con6li3:            "Lógica de selección aleatoria",
        con6li4:            "Conceptos de probabilidad",
        // Run Section
        runSectionLabel:    "Cómo ejecutar",
        runH2:              "Requisitos y Ejecución",
        step1H4:            "Requisitos",
        step1P:             "Se requiere Python 3.11 instalado en el sistema. El módulo random forma parte de la librería estándar y no requiere instalación adicional.",
        step2H4:            "Clonar el repositorio",
        step3H4:            "Ejecutar un examen",
        // Footer
        footerCollection:   "Colección de Exámenes Básicos de Python",
        footerDate:         "Octubre 2025",
        footerNote:         "Proyecto educativo · Libre para uso académico",
        // Lang Button
        langBtn:            "🌐 English"
    },
    en: {
        // Header
        badge:              "Python Programming · Fundamentals",
        h1:                 "Basic Python <em>Exams</em> Collection",
        headerSub:          "4 progressive exams covering the essential fundamentals of programming",
        devChip1:           "👤 Developer:",
        devChip1Val:        "Magallanes López Carlos Gabriel",
        devChip2:           "cgmagallanes23@gmail.com",
        devChip3:           "October 22 – 27, 2025",
        // Nav
        navExams:           "Exams",
        navTable:           "Comparison",
        navVal:             "Validations",
        navConcepts:        "Concepts",
        navRun:             "How to Run",
        // Exams Section
        examsSectionLabel:  "Project contents",
        examsH2:            "The Four Exams",
        exam1Num:           "Exam 01",
        exam1Title:         "School Charity Raffle",
        exam1Date:          "October 22, 2025",
        exam1Desc:          "Winner selection among 5 participants based on academic performance and random number match.",
        exam1Diff:          "Difficulty: ⭐⭐",
        exam2Num:           "Exam 02",
        exam2Title:         "Inventory Management",
        exam2Date:          "October 23, 2025",
        exam2Desc:          "Inventory system that records 10 products and calculates the average cost per product from the supplier.",
        exam2Diff:          "Difficulty: ⭐⭐⭐",
        exam3Num:           "Exam 03",
        exam3Title:         "Cafeteria Sales Control",
        exam3Date:          "October 27, 2025",
        exam3Desc:          "7-day sales tracking: records coffees and desserts, calculates weekly revenue and daily average.",
        exam3Diff:          "Difficulty: ⭐⭐⭐",
        exam4Num:           "Exam 04",
        exam4Title:         "Weekly Exercise Tracker",
        exam4Date:          "October 27, 2025",
        exam4Desc:          "Records 3 exercise sessions (type, duration, calories) and displays a full summary with statistics.",
        exam4Diff:          "Difficulty: ⭐⭐⭐⭐",
        // Table Section
        tableSectionLabel:  "Summary",
        tableH2:            "Comparison Table",
        thExam:             "Exam",
        thLoop:             "Loop Type",
        thFunc:             "Function Type",
        thVal:              "Validations",
        thFormat:           "Output Format",
        thDiff:             "Difficulty",
        tr1Exam:            "1 — Raffle",
        tr1Loop:            "while + break",
        tr1Func:            "None",
        tr1Val:             "4 validations",
        tr1Format:          "% operator",
        tr2Exam:            "2 — Inventory",
        tr2Loop:            "for",
        tr2Func:            "With return",
        tr2Val:             "3 validations",
        tr2Format:          "f-string",
        tr3Exam:            "3 — Cafeteria",
        tr3Loop:            "for",
        tr3Func:            "With return",
        tr3Val:             "4 validations",
        tr3Format:          ".format()",
        tr4Exam:            "4 — Exercise",
        tr4Loop:            "while",
        tr4Func:            "void",
        tr4Val:             "3 validations",
        tr4Format:          "f-string",
        // Validations Section
        valSectionLabel:    "Input rules",
        valH2:              "Validation Rules",
        val1H4:             "Exam 1 — Raffle",
        val1li1:            "Grades: range 1 – 10",
        val1li2:            "Lucky number: range 1 – 10",
        val1li3:            "Required average: ≥ 9.0",
        val2H4:             "Exam 2 — Inventory",
        val2li1:            "Public price: ≥ $0.50",
        val2li2:            "Supplier cost: ≥ $0.50",
        val2li3:            "Product quantity: ≥ 1",
        val3H4:             "Exam 3 — Cafeteria",
        val3li1:            "Coffee quantity: ≥ 0",
        val3li2:            "Coffee price: ≥ $15.00",
        val3li3:            "Dessert quantity: ≥ 0",
        val3li4:            "Dessert price: ≥ $25.00",
        val4H4:             "Exam 4 — Exercise",
        val4li1:            "Duration: > 0 minutes",
        val4li2:            "Calories burned: > 0",
        val4li3:            'Type: "Cardio", "Strength" or "Endurance"',
        // Concepts Section
        conceptsSectionLabel: "Learning objectives",
        conceptsH2:         "Concepts Covered",
        con1H4:             "Loop Control",
        con1li1:            "while loops with conditions",
        con1li2:            "for loops with range()",
        con1li3:            "Counters and control variables",
        con1li4:            "Exiting loops with break",
        con2H4:             "Input Validation",
        con2li1:            "Numeric range checking",
        con2li2:            "String validation",
        con2li3:            "Repeated prompts on invalid input",
        con2li4:            "Safe type conversion",
        con3H4:             "Function Design",
        con3li1:            "Functions with return values",
        con3li2:            "Void functions (procedures)",
        con3li3:            "Parameter passing",
        con3li4:            "Function documentation",
        con4H4:             "Math Operations",
        con4li1:            "Sum accumulation",
        con4li2:            "Average calculation",
        con4li3:            "Decimal rounding",
        con4li4:            "Percentage calculations",
        con5H4:             "String Formatting",
        con5li1:            "% operator (old style)",
        con5li2:            ".format() method",
        con5li3:            "F-strings (formatted literals)",
        con5li4:            "Concatenation techniques",
        con6H4:             "Random Numbers",
        con6li1:            "Using random.randint()",
        con6li2:            "Range specification",
        con6li3:            "Random selection logic",
        con6li4:            "Probability concepts",
        // Run Section
        runSectionLabel:    "How to run",
        runH2:              "Requirements & How to Run",
        step1H4:            "Requirements",
        step1P:             "Python 3.11 must be installed on the system. The random module is part of the standard library and requires no additional installation.",
        step2H4:            "Clone the repository",
        step3H4:            "Run an exam",
        // Footer
        footerCollection:   "Basic Python Exams Collection",
        footerDate:         "October 2025",
        footerNote:         "Educational project · Free for academic use",
        // Lang Button
        langBtn:            "🌐 Español"
    }
};

// Detección y Aplicación de Idioma
function detectLanguage() {
    const saved = localStorage.getItem('lang');                                                  // Obtener el Lenguaje del Local Storage
    if (saved) return saved;                                                                     // Si se obtuvo el Lenguaje del Local Storage Retornar
    const browserLang = navigator.language || navigator.userLanguage;                            // Obtener el Lenguaje del Browser
    return browserLang.startsWith('es') ? 'es' : 'en';                                          // Español si es es-*, inglés para todo lo demás
}

// Aplicar Traducciones al DOM
function applyLanguage(lang) {
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {                                     // Traducir Elementos con Texto Simple
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {                                // Traducir Elementos con HTML Interno
        const key = el.getAttribute('data-i18n-html');
        if (t[key]) el.innerHTML = t[key];
    });
    document.documentElement.setAttribute('lang', lang);                                         // Actualizar Atributo lang del HTML para Accesibilidad
    const btn = document.getElementById('langToggleBtn');
    if (btn) btn.textContent = t.langBtn;
    localStorage.setItem('lang', lang);                                                          // Guardar Idioma Seleccionado en localStorage
}

// Crear Botón Flotante de Cambio de Idioma
function createLangButton() {
    const btn = document.createElement('button');                                                // Crear el Elemento
    btn.id = 'langToggleBtn';                                                                    // ID para Aplicar Estilos desde CSS
    btn.addEventListener('click', () => {                                                        // Agregar Callback para el Botón
        const current = localStorage.getItem('lang') || detectLanguage();                        // Obtener Lenguaje Actual
        const next = current === 'es' ? 'en' : 'es';                                            // Alternar entre Español e Inglés
        applyLanguage(next);                                                                     // Aplicar el Lenguaje
    });
    document.body.appendChild(btn);                                                              // Agregar Botón al Documento
}

// Inicialización
createLangButton();                                                                              // Creación del Botón del Lenguaje
applyLanguage(detectLanguage());                                                                 // Aplicación del Lenguaje

/*****************************************************************************************************************************************************************************/