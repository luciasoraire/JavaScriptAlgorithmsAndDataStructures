/*En sus inicios, JavaScript comenzó desempeñando un pequeño rol, cuando la web estaba mayormente hecha en HTML. Hoy Javascript se ha vuelto gigante y algunos sitios web están casi completamente construidos con JavaScript. Con la finalidad de hacer JavaScript más modular, limpio y mantenible, ES6 introdujo una manera de compartir código fácilmente entre archivos JavaScript. Esto implica exportar partes de un archivo para usar en uno o más archivos, e importar las partes que necesitas donde las necesites. Para aprovechar esta funcionalidad, necesitas crear un script en tu documento HTML con un type de module. A continuación, te presentamos un ejemplo:

<script type="module" src="filename.js"></script>
Un script que utilice este module ahora podrá utilizar las caraterísticas import y export, sobre las que aprenderás en los próximos desafíos.

Agrega un script de tipo module al documento HTML y asígnale el archivo fuente index.js*/

<html>
  <body>
    <script type="module" src="index.js"></script>
  </body>
</html>