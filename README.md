# PROYECTO PORTAFOLIO MÓDULO 7

## ALUMNO

FERNANDO STUBING ALVEAR

## CUENTA DE GITHUB

https://github.com/fstubing

## LINK AL PROYECTO PORTAFOLIO MODULO 7

[PROYECTO PORTAFOLIO MODULO 7](https://github.com/fstubing/portafolio-m7)

## PARA TENER PRESENTE EN EL USO DE LA APP
- Al renderizar el proyecto, desde el home se puede ir a las vistas de buscador, inventory y usuario, ingresando a través del login de usuario.
- Los usuarios y password se pueden rescatar de la tabla usuarios de la base de datos cuyo backup se incluye en la carpeta raíz del proyecto bajo el nombre de "backup_bd_portafolio_my.sql".
- Para modificar un producto se requiere llenar todos los campos y subir las tres imagenes, debido a que el frontend necesita de ellas para su correcto funcionamiento.
- El proyecto incluye paquete nodemon que se instaló como dependencia de desarrollo. Para iniciar servidor teclear comando 'npm run dev'.

## CONTENIDO DEL PROYECTO

- Se desarrolla un ecommerce que contiene una api rest y un frontend que la consume. La información rescatada por la api se extrae de base de datos dentro del localhost. Se utilizó como base el portafolio desarrollado desde el módulo 4, debiendo por tanto modificar la lógica de los archivos .js y la estructura html.
- El archivo index.js contiene el servidor y extructura de la api desarrollada con node express en el backend y en el frontend para mostrar las vistas se utilizó express-handlebars.
- En app.js se intentó dividir dentro del mismo archivo la lógica del servidor, los endpoints y rutas de vistas. Se separaron funciones controladoras y archivos propios del funcionamiento de sequelize.
- Se cumplen con las rutas básicas solicitas y se agregan algunas más para mejorar su funcionalidad.
- Las lógicas del carrito de compras y del inventario están vinculadas, de modo que si, por ejemplo, se generase una compra se produce una retroalimentación rebajándose el stock del producto.
- El front de la aplicación se desarrolló principalmente con handlebars, utilizando variadas vistas y un layout.