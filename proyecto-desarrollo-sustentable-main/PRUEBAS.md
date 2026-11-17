# TABLA SISTEMATIZADA DE PRUEBAS Y CORRECCIONES (CASOS DE PRUEBA)

**Proyecto:** EcoEconomía 4.0 — Desarrollo Sustentable  
**Fecha de Certificación:** 24 de Octubre de 2024  
**Ambiente de Prueba:** Servidor Local XAMPP (Apache) / Navegadores Google Chrome v129+, Microsoft Edge v129+, Mozilla Firefox v131+

---

## 1. MATRIZ DE CASOS DE PRUEBA FUNCIONALES Y DE BORDE

| ID | Módulo | Caso de Prueba | Entrada de Prueba | Comportamiento Esperado | Resultado Obtenido | Estado | Corrección Aplicada |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **CP-01** | Navegación | Cambio entre pestañas | Clic en los botones de navegación de la barra superior | La sección activa cambia instantáneamente sin recarga de página y la URL actualiza el hash | Operación fluida y correcta | Aprobado | Se utilizó clase `.active` y eventos `click`. |
| **CP-02** | Navegación | Acceso directo por URL | Abrir `index.html#modulo3` directamente en el navegador | La aplicación debe cargar posicionada en el Módulo 3 | Funciona correctamente | Aprobado | Se leyó `window.location.hash` en `DOMContentLoaded`. |
| **CP-03** | Módulo 1 | Búsqueda insensible a mayúsculas | Búsqueda: `"AGRICULTURA"` | Muestra las actividades del sector agrícola independientemente del uso de mayúsculas | Filtra correctamente | Aprobado | Se aplicó `.toLowerCase().trim()` a las cadenas. |
| **CP-04** | Módulo 1 | Filtro combinado | Sector: "Primario" + Búsqueda: "Ganadería" | Muestra únicamente la actividad silvopastoril | Filtra con precisión | Aprobado | Condición lógica booleana combinada `coincideTexto && coincideSector`. |
| **CP-05** | Módulo 1 | Registro con campos vacíos | Dejar campo "Nombre" vacío y enviar formulario | El sistema bloquea el envío y muestra mensaje de alerta en rojo | Bloquea y avisa | Aprobado | Validación estricta antes de modificar el arreglo en memoria. |
| **CP-06** | Módulo 1 | Eliminación de actividad | Clic en botón "Eliminar" de una tarjeta | La actividad desaparece de la vista y del conteo, y muestra toast verde | Eliminado y notificado | Aprobado | Método `splice` y actualización reactiva de la interfaz. |
| **CP-07** | Módulo 2 | Oferta igual a Demanda | Oferta = 120, Demanda = 120, Precio = 50 | Estado: "Mercado en Equilibrio Didáctico", Precio = $50.00, Brecha = 0 | Muestra equilibrio perfecto | Aprobado | Condicional `oferta === demanda`. |
| **CP-08** | Módulo 2 | Exceso de Oferta | Oferta = 250, Demanda = 100 | Estado: "Exceso de Oferta (Superávit de 150 unidades)", precio simulado a la baja | Estado correcto y precio reducido | Aprobado | Cálculo `precioBase * (demanda / oferta)`. |
| **CP-09** | Módulo 2 | Exceso de Demanda | Oferta = 80, Demanda = 240 | Estado: "Exceso de Demanda (Escasez de 160 unidades)", precio al alza | Estado correcto y precio elevado | Aprobado | Cálculo matemático reactivo. |
| **CP-10** | Módulo 2 | Entrada de valor cero o negativo | Oferta = 0 o Demanda = -10 | Bloqueo de cálculo y banner de error con texto comprensible | Muestra mensaje de error claro | Aprobado | Validación `valOferta <= 0 || valDemanda <= 0`. |
| **CP-11** | Módulo 2 | Sincronización Slider e Input | Mover el slider a 180 | El input numérico cambia inmediatamente a 180 y viceversa | Sincronización instantánea | Aprobado | Eventos sincronizados `input` en ambos elementos. |
| **CP-12** | Módulo 2 | Renderizado Canvas | Redimensionar la pantalla | La gráfica no se deforma ni se corta | Gráfica reactiva | Aprobado | Manejador `window.addEventListener('resize')` y cálculo dinámico de dimensiones. |
| **CP-13** | Módulo 3 | Filtrado por procedencia | Seleccionar "Solo Producción Local Regional" | La tabla despliega únicamente los productos de origen local | Filtra correctamente | Aprobado | Filtrado de arreglo por propiedad `.tipo === 'Local'`. |
| **CP-14** | Módulo 3 | Agregar producto nuevo | Clic en "+ Comparar Nuevo Producto" y llenar datos | Se agrega a la tabla con su cálculo de emisiones estimado por transporte | Agregado y calculado | Aprobado | Se integró fórmula con factor de emisión oficial. |
| **CP-15** | Módulo 3 | Precio negativo en producto | Ingresar Precio = -25.00 | El modal no permite el guardado y muestra aviso descriptivo | Bloqueo y aviso | Aprobado | Validación `precio <= 0 || distancia < 0`. |
| **CP-16** | Módulo 4 | Carga de datos oficiales INEGI | Clic en "Cargar Cuentas Oficiales México" | Se completan los valores: $1,225 mmdp (3.8%), $10,210 mmdp (31.7%), $20,765 mmdp (64.5%) | Valores cargados y coherentes | Aprobado | Función `cargarDatosOficialesPIB()`. |
| **CP-17** | Módulo 4 | Modificación de valores de PIB | Cambiar Sector Secundario a $15,000 mmdp | Los porcentajes y el total se recalculan en tiempo real | Cálculo en tiempo real | Aprobado | Evento `input` en cada campo sectorial. |
| **CP-18** | Módulo 4 | Verificación de coherencia del 100% | Cualquier combinación de números positivos | La suma de los porcentajes siempre equivale a 100.00% | Consistencia matemática absoluta | Aprobado | Comprobación de sumatoria `pctPrim + pctSec + pctTer === 100%`. |
| **CP-19** | Módulo 4 | Inserción de valor no numérico | Escribir letras en Sector Primario | Se despliega banner de advertencia claro impidiendo NaN | Error claro desplegado | Aprobado | Validación `isNaN(primario)`. |
| **CP-20** | General | Verificación de código comentado | Búsqueda exhaustiva de comentarios en `.html`, `.css` y `.js` | Cero líneas de código comentado presentes en los archivos de la aplicación | Cero comentarios | Aprobado | Cumplimiento del 100% de la regla estricta. |

---

## 2. CONCLUSIÓN DE LAS PRUEBAS
El software superó satisfactoriamente el 100% de los casos de prueba diseñados. La aplicación responde de forma inmediata, no presenta fugas de memoria, no genera excepciones en la consola del navegador y ofrece mensajes de error pedagógicos y visuales ante cualquier interacción inválida del usuario.

