//Victor Enrique Tuz Dzidz
//  

/* REFLEXIÓN - EJERCICIO 1.3
¿Cuál es la diferencia fundamental entre un módulo nativo (como 'fs') 
y un módulo de NPM (como 'sillyname') en cuanto a su origen e instalación?

Los módulos nativos (como fs) ya vienen integrados en el núcleo de NodeJS y
no necesitan instalación, solo se importan. Los paquetes externos 
(como sillyname o superheroes) son creados por la comunidad, se descargan 
desde NPM y requieren ser instalados en la carpeta del proyecto antes de usarse.


Investigando la sintaxis: ¿Qué diferencia existe entre 'require' (CommonJS) y 'import' (ES Modules)?
Considera el momento en que se cargan los módulos.

La diferencia fundamental entre require (CommonJS) e import (ES Modules) reside en cuándo y cómo se carga el código. Mientras que require es dinámico y síncrono, funcionando en tiempo de ejecución (mientras el programa ya está corriendo línea por línea), import es estático y asíncrono, lo que significa que NodeJS analiza todas las dependencias antes de empezar a ejecutar el código.

Al usar require, NodeJS detiene la ejecución para buscar y cargar el módulo en ese 
preciso instante, permitiendo incluso cargarlo dentro de condicionales o funciones. 
En cambio, import crea un grafo de dependencias previo que permite cargar varios 
módulos en paralelo y aplicar técnicas como el tree-shaking (eliminar código no usado), 
lo que hace que las aplicaciones modernas sean más rápidas y eficientes. Por esta razón, 
al configurar "type": "module" en tu proyecto, estás adoptando el estándar actual que mejora 
la detección de errores y el rendimiento.

Sobre el archivo 'package.json':

a) ¿Por qué es vital compartir este archivo pero NO la carpeta 'node_modules' al subir a un repositorio?

El peso: La carpeta node_modules suele ser extremadamente pesada (puede contener miles de archivos y pesar cientos de megabytes), 
mientras que el package.json es un simple archivo de texto de unos pocos kilobytes. Subir node_modules a un repositorio (como GitHub) 
haría que el proceso fuera lento y desperdiciaría espacio de almacenamiento.

Compatibilidad de Sistema: Algunas librerías se compilan específicamente para el sistema operativo donde se instalan
(Windows, Mac o Linux). Si subes tu carpeta node_modules desde Windows y alguien la descarga en Linux, es muy probable 
que el proyecto no funcione.

La "Receta" vs. el "Plato": El package.json funciona como una lista de ingredientes (la receta). 
No necesitas enviar el plato cocinado; basta con enviar la receta para que cualquier otra persona 
pueda instalar exactamente lo mismo en su propia computadora.


b) ¿Qué sucede si ejecutas 'npm install' en una carpeta que solo tiene el package.json?

Lectura: NPM abre el archivo package.json y busca la sección llamada "dependencies".

Descarga: Identifica todos los paquetes listados (en tu caso, sillyname y superheroes) y sus versiones específicas.

Restauración: Descarga automáticamente cada una de esas librerías desde el registro de NPM en internet.

Creación: Crea desde cero la carpeta node_modules y coloca allí todo el código necesario.


*/


