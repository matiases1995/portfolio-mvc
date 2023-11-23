# Portfolio - Patrón de diseño MVC (Model - View - Controller)
MVC es un patrón en el diseño de software comúnmente utilizado para implementar interfaces de usuario, datos y lógica de control. Enfatiza una separación entre la lógica de negocios y su visualización. Esta "separación de preocupaciones" proporciona una mejor división del trabajo y una mejora de mantenimiento.
***
### View(Vista)
Conforma la interfaz gráfica de la aplicación y contiene todos los elementos que son visibles al usuario. A través de ella, el usuario interactúa enviando y solicitando información al servidor.
Su responsabilidad es definir la apariencia de los datos y mostrarlos en pantalla.
Las vistas no se comunican de forma directa con los modelos.
***
### Controller(Controlador)
Conforma la capa intermedia entre las vistas y los modelos.
Su responsabilidad es procesar los datos que recibe de los modelos y elegir la vista correspondiente en función de aquellos datos. 
Tiene relación directa con las vistas y con los modelos y es un componente fundamental dentro del flujo del patrón.
***
### Model(Modelo)
Conforma y contiene la lógica de la aplicación. Sus responsabilidades son conectarse con la base de datos, realizar consultas y administrar lo que se conoce como la lógica de negocio. 
Los modelos no se comunican de forma directa con las vistas.