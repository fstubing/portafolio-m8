# PROYECTO PORTAFOLIO MÓDULO 8

## ALUMNO

FERNANDO STUBING ALVEAR

## CUENTA DE GITHUB

https://github.com/fstubing

## LINK AL PROYECTO PORTAFOLIO MODULO 8

[PROYECTO PORTAFOLIO MODULO 8](https://github.com/fstubing/portafolio-m8)

## INSTRUCCIONES DE USO DE LA APP
1. Proyecto viene sin la carpeta node_modules por lo que se deben instalar (comando: npm i).
2. Para levantar al servidor el proyecto cuenta con nodemon. Para ejecutar usuar comando npm run dev.
3. En el backend se utilizó base de datos local por lo que en la carpeta raiz del proyecto de incluye backup de dicha base de datos, que ya viene cargada con algunos datos para ayudar en la revisión. Datos relevantes que contienen las tablas del backup de la BD:
    - Tabla Productos viene cargada con todos los productos, incluyendo los nombres de los archivos de sus imagenes.
    - Tabla de usuarios viene que un usuario clase Admin con password 123456 y con varios usuarios clase Comprador con password 1234.
    - Tabla Venta y detalleVenta ya viene cargadas con algunas transacciones para ser utilizadas en los buscadores de ambas clases de usuario.
4. Para manipulación de la base de datos se utilizó ORM Sequelize y para ayudar en la creación de modelos, migraciones y semillas se utilizó sequelize-cli. De tal manera, si no se desea utilizar el backup siempre se puede mendiante comandos crear la base de datos y llenar tablas con información básica. Aspectos relevantes:
    - Carpeta config, archivo config.json. Se deben modificar datos de conexión de la base de datos que se cree. se puede crear mediante comando npx sequelize db:create.
    - Carpeta models. Contiene los distintos modelos o tablas que conforman la base de datos con sus respectivas asociaciones. Con el comando npx sequelize model.generate(...) se fueron creando.
    - Carpeta migrations. Contiene las tablas de la base de datos con sus respectivos campos, tipos de datos y restricciones. Para las migraciones utilizo comando npx sequelize-cli db:migrate.
    - Carpeta seeders. Contiene data que se puede utlizar para poblar tablas de la base de datos. Se agregaron semillas para las tablas de productos y de usuarios. En la primera, se agregaron todos los productos y en la segunda solo un usuario de clase Admin. Para realizar el poblado mediante seeds se utiliza el comando npx sequelize-cli db:seed:all

## CONTENIDO DEL PROYECTO

1. Se desarrolla un ecommerce que contiene una api rest y un frontend que la consume. La información rescatada por la api se extrae de base de datos dentro del localhost. Se utilizó como base el portafolio desarrollado desde el módulo 4 y siguientes, debiendo por tanto modificar la lógica de los archivos .js y la estructura general del proyecto.
2. Detalle de mejoras agregadas:
    - Lo nuevo que se agregó respecto al proyecto de portafolio anterior es la estructura y lógica de un login y registro funcional, utilizando como herramienta el paquete jsonwebtoken. Dentro de esta nueva funcionalidad se agregaron rutas que requiren necesariamente estar logueado y con un token válido. Asimismo, para efectos de dar mayor protección a la información del password de los usuarios compradores, se agregó el paquete bcrypt.
    - El backend genera dos tipos de token, uno para usuarios compradores y otros para administradores. Los usuarios clase 'admin' pueden utilizar las vistas de inventario (CRUD de productos) y buscador, a las cuales puede acceder a través de su perfil y que además están protegidas, pero no pueden realizar compras en el sitio. Por otro lado, los usuarios clase 'comprador' pueden realizar compras en el sitio y revisar su perfil, donde encontrarán el registro completo de sus compras que podrá ordenar por fecha desde la más reciente o la más antigua. La vista de 'perfil', junto con su respectivo archivo .js, también se creo para para efectos de entregar dicha información a los usuarios compradores.
    - Tal como se pedía en los requisitos del portafolio, la lógica actualmente permite asociar a un usuario, tanto un carrito como una venta. Lo anterior, implica que para que un usuario pueda agregar productos a su carro y luego comprarlos, deba necesariamente registrarse e iniciar sesión en el sitio.
    - Finalmente, para incrementar la modularización del proyecto se eliminaron las rutas del archivo app.js(contenedor del servidor) y se creó carpeta 'routes' donde se encuentran archivos de rutas de vistas y de la api. 