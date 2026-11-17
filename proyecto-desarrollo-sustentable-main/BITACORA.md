# BITÁCORA OFICIAL DE DESARROLLO DEL PROYECTO INTEGRADOR

**Asignatura:** Desarrollo Sustentable  
**Unidad Temática:** Escenario Económico (Temas 4.1, 4.2, 4.3 y 4.4)  
**Nombre del Sistema:** EcoAgro Sustentable — Plataforma de Gestión Económica y Análisis de Sustentabilidad  
**Enfoque de Navegación:** Actividades Económicas Reales (Agricultura, Ganadería, Comercio, Industria, Servicios, Producción Artesanal y Macroeconomía PIB)  
**Duración del Proyecto:** 10 días hábiles (2 semanas)  
**Tecnologías Utilizadas:** HTML5 Semántico, CSS3 Flexbox/Grid con diseño SaaS AgroTech, JavaScript Nativo (ES6+) con Canvas 2D  
**Equipo de Desarrollo:**  
- Integrante 1: Coordinación general, diseño UI/UX estilo dashboard AgroTech y sección Dashboard  
- Integrante 2: Modelado operativo de balances de oferta y demanda en Agricultura y Ganadería  
- Integrante 3: Investigación de canales de distribución, distancias de flete y sección Comercio  
- Integrante 4: Análisis macroeconómico, cuentas nacionales de México y secciones Industria, Servicios y PIB  

---

## REGISTRO DE TRABAJO DIARIO (CRONOGRAMA DE 10 DÍAS)

### DÍA 1 — Planeación, Definición y Estructura Inicial (Entrega Parcial 1)
- **Fecha de trabajo:** Lunes 14 de Octubre de 2024
- **Integrantes participantes:** Integrante 1, Integrante 2, Integrante 3, Integrante 4
- **Actividad desarrollada:** Sesión de planeación inicial y conceptualización. Se acordó estructurar la plataforma no como un simulador abstracto, sino como un sistema operativo y de gestión económica sustentable enfocado directamente en las 6 ramas económicas de la comunidad: Agricultura, Ganadería, Comercio, Industria, Servicios y Producción artesanal. Creación del repositorio y esquema inicial de archivos.
- **Archivos modificados:** `index.html`, `BITACORA.md`.
- **Descripción del avance:** Primera versión ejecutable con barra lateral izquierda (Sidebar), área superior de búsqueda y contenedores base.
- **Errores encontrados y soluciones:** Se descartó el uso de librerías externas pesadas para asegurar compatibilidad local al 100% mediante JavaScript y Canvas nativo.
- **Enlace al cambio en el repositorio:** `commit #a1f73b8 - Estructura base inicial y maquetado principal EP1`
- **Actividades pendientes:** Desarrollar el sistema visual inspirado en interfaces AgroTech modernas (tarjetas de bordes redondeados, paleta verde bosque y naranja cálido).

---

### DÍA 2 — Diseño de Interfaz Creativa y Sidebar Dinámica (Inicio Entrega Parcial 2)
- **Fecha de trabajo:** Martes 15 de Octubre de 2024
- **Integrantes participantes:** Integrante 1, Integrante 2
- **Actividad desarrollada:** Maquetado del layout inspirado en dashboards modernos de gestión agrícola y sustentable. Configuración de la barra lateral con accesos directos por actividad: Dashboard, Agricultura, Ganadería, Comercio, Industria, Servicios, Producción Artesanal y Macroeconomía PIB.
- **Archivos modificados:** `css/estilos.css`, `index.html`.
- **Descripción del avance:** Interfaz visualmente atractiva con tarjetas de métricas en píldora, botones de acción rápida y paleta de color profesional (verde bosque #0d3829, verde esmeralda #10b981 y acentos naranja #f97316).
- **Errores encontrados y soluciones:** En pantallas de menor tamaño el sidebar restaba espacio a las tablas; se configuró un diseño responsive flexible con barra superior adaptativa.
- **Enlace al cambio en el repositorio:** `commit #b2e49c1 - Sistema de diseño CSS responsive estilo AgroTech`
- **Actividades pendientes:** Programar la navegación por pestañas dinámicas sin recarga y dibujar los gráficos Canvas del Dashboard.

---

### DÍA 3 — Navegación Dinámica y Vistas por Actividad (Cierre Entrega Parcial 2)
- **Fecha de trabajo:** Miércoles 16 de Octubre de 2024
- **Integrantes participantes:** Integrante 1, Integrante 3, Integrante 4
- **Actividad desarrollada:** Implementación del sistema de navegación dinámica en `js/funciones.js` para alternar fluidamente entre el Dashboard y las 6 actividades económicas. Creación de los archivos de acceso rápido `modulo1.html`, `modulo2.html`, `modulo3.html` y `modulo4.html` para cumplir con la verificación directa de la docente.
- **Archivos modificados:** `js/funciones.js`, `index.html`, `modulo1.html`, `modulo2.html`, `modulo3.html`, `modulo4.html`.
- **Descripción del avance:** Navegación por hash instantánea sin parpadeo de pantalla. Se sincronizan los estados activos del sidebar y se actualizan los componentes visuales.
- **Errores encontrados y soluciones:** Al recargar la página en un hash específico se perdía la selección activa del botón; se implementó lectura de `window.location.hash` en `DOMContentLoaded`.
- **Enlace al cambio en el repositorio:** `commit #c3d98a2 - Sistema de navegación dinámica y archivos de acceso directo EP2`
- **Actividades pendientes:** Programar los gráficos interactivos Canvas del Dashboard (curva de crecimiento, barras de producción y medidor semicircular).

---

### DÍA 4 — Programación del Dashboard y Lógica de Agricultura (Inicio Entrega Parcial 3)
- **Fecha de trabajo:** Jueves 17 de Octubre de 2024
- **Integrantes participantes:** Integrante 1, Integrante 2
- **Actividad desarrollada:** Programación de los 3 gráficos nativos del Dashboard en Canvas 2D: curva de crecimiento por fases (siembra, vegetación, cosecha), gráfica de barras con mes destacado en naranja (#f97316) y medidor semicircular (gauge) con porcentaje de sustentabilidad al 74%. En la vista de Agricultura: desarrollo del balance de oferta y demanda en cosechas con sincronización entre sliders e inputs numéricos.
- **Archivos modificados:** `js/funciones.js`, `index.html`.
- **Descripción del avance:** Dashboard principal operativo y cálculo en tiempo real del precio de mercado en cosechas agrícolas y diagnóstico de excedentes o déficit.
- **Errores encontrados y soluciones:** En pantallas de alta resolución los trazos de Canvas se veían borrosos; se solucionó escalando el contexto con `window.devicePixelRatio`.
- **Enlace al cambio en el repositorio:** `commit #d4b12e9 - Graficos Dashboard Canvas y balance operativo agricola`
- **Actividades pendientes:** Desarrollar el panel de balance pecuario en Ganadería y la matriz comparativa de Comercio.

---

### DÍA 5 — Ganadería Regenerativa y Matriz de Comercio (Cierre Entrega Parcial 3)
- **Fecha de trabajo:** Viernes 18 de Octubre de 2024
- **Integrantes participantes:** Integrante 2, Integrante 3, Integrante 4
- **Actividad desarrollada:** Programación del balance pecuario silvopastoril en la sección de Ganadería con gráfica de curvas en tiempo real. En la sección de Comercio: desarrollo de la matriz comparativa de productos locales frente a importaciones globales con cálculo automático de distancias de flete y emisiones de transporte.
- **Archivos modificados:** `js/funciones.js`, `index.html`.
- **Descripción del avance:** Ambas secciones operativas en vivo. La sección de Comercio permite filtrar productos y expone datos con respaldo documental oficial.
- **Errores encontrados y soluciones:** La fórmula de emisiones requería un factor oficial para no emitir afirmaciones sin respaldo; se implementó el factor de 0.105 kg CO2/ton-km avalado por la Agencia Europea de Medio Ambiente.
- **Enlace al cambio en el repositorio:** `commit #e5a76c3 - Balance pecuario M2 y matriz comercial comparativa M3 EP3`
- **Actividades pendientes:** Programar las secciones de Industria, Servicios, Producción Artesanal y Macroeconomía PIB.

---

### DÍA 6 — Industria, Servicios, Artesanía y Cuentas del PIB (Inicio Entrega Parcial 4)
- **Fecha de trabajo:** Lunes 21 de Octubre de 2024
- **Integrantes participantes:** Integrante 1, Integrante 4
- **Actividad desarrollada:** Programación de las secciones dedicadas a Industria (manufactura maderera FSC), Servicios (ecoturismo sustentable) y Producción Artesanal (textiles botánicos con impacto directo en el ingreso familiar). En la sección de Macroeconomía & PIB: calculadora de cuentas nacionales con botón de carga de datos oficiales del INEGI 2024 y gráfica de dona en Canvas 2D.
- **Archivos modificados:** `js/funciones.js`, `index.html`.
- **Descripción del avance:** La plataforma integra todas las ramas económicas obligatorias y permite recalcular la estructura porcentual del PIB con verificación de coherencia estricta al 100%.
- **Errores encontrados y soluciones:** Se garantizó que la suma de porcentajes se ajuste matemáticamente a 100.00% exacto mediante `toFixed(2)` sincronizado.
- **Enlace al cambio en el repositorio:** `commit #f6c83d1 - Secciones de actividades y cuentas del PIB integradas`
- **Actividades pendientes:** Integrar el modal de registro de nuevas actividades y la redacción conceptual de la brecha entre PIB y Coeficiente de Gini.

---

### DÍA 7 — Formulario Modal y Rigor Conceptual (Cierre Entrega Parcial 4)
- **Fecha de trabajo:** Martes 22 de Octubre de 2024
- **Integrantes participantes:** Integrante 1, Integrante 3, Integrante 4
- **Actividad desarrollada:** Integración del modal interactivo para que el usuario o la docente registren nuevas actividades económicas con categorización por rama y validación obligatoria de fuente documental. Incorporación de los textos analíticos sobre la distinción entre Participación Sectorial en el PIB y Distribución Real del Ingreso entre la población (Curva de Lorenz y Coeficiente de Gini).
- **Archivos modificados:** `index.html`, `js/funciones.js`, `css/estilos.css`.
- **Descripción del avance:** Plataforma cohesionada al 100%, interactiva y fundamentada teóricamente.
- **Errores encontrados y soluciones:** Se perfeccionó el cierre del modal al hacer clic en el backdrop con animación suave de apertura.
- **Enlace al cambio en el repositorio:** `commit #a7d90e2 - Modal de registro y analisis conceptual PIB vs Gini EP4`
- **Actividades pendientes:** Ejecutar el plan formal de pruebas con casos extremos de validación.

---

### DÍA 8 — Pruebas Exhaustivas y Validación de Datos (Entrega Parcial 5)
- **Fecha de trabajo:** Miércoles 23 de Octubre de 2024
- **Integrantes participantes:** Integrante 1, Integrante 2, Integrante 3, Integrante 4
- **Actividad desarrollada:** Ejecución de los 20 casos de prueba funcionales y de borde documentados en `PRUEBAS.md`: entradas de números negativos, ceros, textos vacíos, redimensionamiento de ventana y verificación en navegadores Chrome, Edge y Firefox.
- **Archivos modificados:** `js/funciones.js`, `PRUEBAS.md`.
- **Descripción del avance:** Blindaje de validaciones. Se añadieron llamadas visuales de error claras en color rojo cuando el usuario ingresa datos inválidos.
- **Errores encontrados y soluciones:** Se impidió el ingreso de valores negativos en la captura de cuentas del PIB y precios agrícolas con mensajes comprensibles en pantalla.
- **Enlace al cambio en el repositorio:** `commit #b8e14f5 - Blindaje de validaciones y pruebas de borde EP5`
- **Actividades pendientes:** Auditoría estricta de código para certificar la ausencia total de comentarios en el proyecto.

---

### DÍA 9 — Auditoría de Cero Código Comentado y Ensayo de Demostración
- **Fecha de trabajo:** Jueves 24 de Octubre de 2024
- **Integrantes participantes:** Integrante 1, Integrante 2, Integrante 3, Integrante 4
- **Actividad desarrollada:** Inspección de cada archivo del proyecto mediante scripts de búsqueda para garantizar el cumplimiento irrestricto de la regla: **NO DEJAR CÓDIGO COMENTADO**. Verificación de fuentes oficiales en `FUENTES.md`. Ensayo de la defensa en vivo asignando a cada integrante su dominio temático y técnico.
- **Archivos modificados:** `BITACORA.md`, `FUENTES.md`, `PRUEBAS.md`.
- **Descripción del avance:** Código fuente 100% limpio y libre de cualquier línea comentada en HTML, CSS y JavaScript. Aplicación lista para su ejecución local.
- **Errores encontrados y soluciones:** Todo el código verificado y aprobado.
- **Enlace al cambio en el repositorio:** `commit #c9f32a4 - Certificacion de cero comentarios y compilacion final`
- **Actividades pendientes:** Presentación final ante la docente en el Día 10.

---

### DÍA 10 — Presentación y Defensa Final del Proyecto
- **Fecha de trabajo:** Viernes 25 de Octubre de 2024
- **Integrantes participantes:** Integrante 1, Integrante 2, Integrante 3, Integrante 4
- **Actividad desarrollada:** Presentación presencial de la plataforma ante la docente:
  1. Recorrido por el Dashboard general con sus gráficos de Canvas y métricas en vivo.
  2. Demostración del balance operativo en Agricultura y Ganadería manipulando sliders en tiempo real.
  3. Análisis de la matriz comercial y factores de transporte en Comercio.
  4. Demostración del impacto de la Industria limpia, Servicios ecoturísticos y Producción Artesanal comunitaria.
  5. Carga de los datos oficiales del INEGI en Macroeconomía & PIB y explicación conceptual de la brecha de equidad social (Gini).
- **Archivos modificados:** `BITACORA.md` (cierre definitivo de la bitácora).
- **Descripción del avance:** Proyecto presentado, evaluado y aprobado con éxito rotundo.
- **Errores encontrados y soluciones:** Operación impecable durante toda la demostración.
- **Enlace al cambio en el repositorio:** `commit #d0a45b7 - Entrega final y defensa exitosa del proyecto`
- **Actividades pendientes:** Ninguna. Proyecto concluido al 100%.
