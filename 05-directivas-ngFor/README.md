### 05-directivas-ngFor

El contenido de esta carpeta hace referencia a [este video](https://youtu.be/hp1hNMmdJfY)

### Para ejecutar el código

* Hay que tener instalado NodeJS y NPM
* Instalar globalmente jspm ``` npm install -g jspm@beta ```
* Ejecutar el comando ``` jspm install ```
* Levantar el servidor desde la terminal sobre la carpeta /public

### Nota temporal

* Ante un error cómo ser `Error: Zone is not defined`, ir al archivo que se encuentra en `/public/jspm_packages/npm/angular2@2.0.0-beta.0/src/core/zone/ng_zone.js` y renombrar `Zone.longStackTraceZone` por `zone.longStackTraceZone`