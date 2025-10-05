Este proyecto se inicio el dia miercoles 1 de octubre del 2025 para cumplir con una prueba de conocimiento de CIACA para la gobernación de antioquia

# Creador Andres Camilo Rodriguez Lopez
#  Tecnico en desarrollo de software

# Tecnologias que se usaron:

Iniciamos con React + Vite creado por consola con npm create vite@latest paralelamente creación de repositorio en github y vinculación repositorio remoto con local

Ramas de proyecto master y developerMilo

Repositorio: https://github.com/CamiloRol/proywebai.git

Instalé tailwind para el tema de estilización y empece con la estructuración visual en este apartado se utilizo el procesador
# Deepsite
Por temas de agilidad al momento de diseñar la parte creativa es lo que mas toma tiempo y puede ser una barrera mental. la
herramienta me entrega HTML crudo y como el proyecto esta basado en componentes y react era tema de organización.

El primer punto a tocar fue las base de datos para esto recurri a supabase una plataforma muy completa basada en Postgres y
por medio de query´s SQL cree las tablas:

- users_data
- users
- user_profiles
- roles
- faq
- documents
- chunks

para darle forma a interacción usuario-web, preguntas quemadas para el sistema AI y RAG con enlistamiento de los documentos que se van cargando y creando embeddings.

En Kaggel tomamos los CSV en un principio no se hizo limpieza de datos se subieron los archivos al RAG(Punto muy importante que me creo inconvenientes prosteriores)

Y empece a realizar conexiones API aca utilicé FastAPI de python y su estructura.
para empezar con el modelo de LLM se usó API_KEY de OPEN AI ya que lo he trabajado con n8n y pues me resultaba mas practicó ademas que tenia un saldo entonces para
aprovecharlo. cuando empecé hacer pruebas la consulta de preguntas quemadas se entregaba muy facil sin demora en su respuesta y practicó pero cuando preguntaba acerca
de algo del RAG como restringí la respuesta solo me da que no esta en la base de conocimiento realice muchas pruebas en la terminal de supabase y aunque con un embedding
aleatorio en un query si me traia información relevante me sigue respondiendo que no esta en su base de conocimiento así que decidi moverme a otros apartados.

# Plotly, login, register, perfil, cargar archivos desde el sistema para generar embeddings e insertarlos como chunks, ETL, etc..

Cuando terminé todo empece hacer ajuste de protección de rutas, habilitación de apartados y logica front.

Terminando con docker-compose el cual es el que corre en este momento el sistema para mi equipo local.

# Mejoras que se me quedan

Quiero que el botón de nuevo chat si abra otra conversación y que quede el chat anterior estacionario por si quiero continuar en el otro.
Que OPEN AI analice el inicio de la conversación y decida que titulo ponerle
Que el chat funcione en su totalidad con LLM desde un RAG mas robusto y bien definido (Siento que falló tambien la dispersión de temas es información muy suelta y alzar)
El perfil de Moderador No hace nada entonces es algo como a pulir
Revisar consumos del sistema.

Fue un reto muy interesante por que es generar una linea de tiempos y en SCRUM hacer sprints para ir cumpliendo a cabalidad lo que me proponia en el dia
Consumí mas de 40 horas de producción.

# Errores presentados

- HTTP 404
- 422
- 400
- 500

# Preguntas quemadas
[{"idx":0,"id":1,"question":"Quien es el creador de este sistema?","answer":"Este proyecto fue creado el primero de octubre para cumplir con una postulación para la gobernación de Antioquia por parte de Andres camilo rodriguez Lopez","created_at":"2025-10-02 21:39:52.546672+00"},{"idx":1,"id":2,"question":"Que temas se pueden tocar en estas interacciones?","answer":"El sistema solo puede responder preguntas muy genéricas y encontrae información de varios datasets tomados desde kaggle entre los temas son electricidad, Reporte de delitos de violencia intrafamiliar, Balances de alertas ocasionados por temblores e información de series, peliculas u otros datos de Disney plus","created_at":"2025-10-02 21:39:52.546672+00"},{"idx":2,"id":3,"question":"Puedes decirme de cuanto es la magnitud del dataset?","answer":"No como tal solo dejamos estipulado cuales son los temas que se tienen como conocimientos pero mas en especifico como quedó la base de datos no es posible","created_at":"2025-10-02 21:39:52.546672+00"},{"idx":3,"id":4,"question":"¿Quién desarrolló este sistema?","answer":"Tecnico en desarrollo de software para demostrar conocimiento y tener como referencia","created_at":"2025-10-02 21:39:52.546672+00"},{"idx":4,"id":5,"question":"¿Cuál fue la motivación para crear este proyecto?","answer":"El postularme a una oferta de trabajo me llevo a invertirle tiempo y dedicación al proceso","created_at":"2025-10-02 21:39:52.546672+00"},{"idx":5,"id":6,"question":"¿Desde cuándo existe este sistema?","answer":"Desde el 1 de Octubre del 2025","created_at":"2025-10-02 21:39:52.546672+00"},{"idx":6,"id":7,"question":"¿Este sistema está disponible públicamente o es solo para uso interno?","answer":"La idea al finalizar es que este subido públicamente","created_at":"2025-10-02 21:39:52.546672+00"},{"idx":7,"id":8,"question":"¿Qué temas puede responder este sistema?","answer":"Balances de terremotos, electricidad, delitos intrafamiliares y programas de Disney plus","created_at":"2025-10-02 21:39:52.546672+00"},{"idx":8,"id":9,"question":"¿Puede el sistema responder preguntas sobre política o actualidad?","answer":"No puede esto ya por una restricción de acceso a información.","created_at":"2025-10-02 21:39:52.546672+00"},{"idx":9,"id":10,"question":"¿Puede el sistema dar consejos profesionales o médicos?","answer":"No, el sistema es solo informativo","created_at":"2025-10-02 21:39:52.546672+00"},{"idx":10,"id":11,"question":"¿Qué tipo de datasets utiliza el sistema?","answer":"Datasets subidos en chuncks a supabase tomados desde kaggel","created_at":"2025-10-02 21:39:52.546672+00"},{"idx":11,"id":12,"question":"¿Puede el sistema generar información no incluida en los datasets?","answer":"No, esta estructurado a que solo tome información de las tablas creadas para su funcionamiento","created_at":"2025-10-02 21:39:52.546672+00"},{"idx":12,"id":13,"question":"¿Qué tipo de preguntas no puede responder este sistema?","answer":"Que no esten generalizadas diferentes a preguntas de estructuración o que no tengan relación con el RAG","created_at":"2025-10-02 21:39:52.546672+00"},{"idx":13,"id":14,"question":"¿El sistema puede acceder a información privada o confidencial?","answer":"No, no puede acceder por que esta solo con conexión a base de datos relacionada","created_at":"2025-10-02 21:39:52.546672+00"},{"idx":14,"id":15,"question":"¿Cuánto detalle puede dar sobre los datasets?","answer":"Cualquier información que este dentro del dataset y que sea coherente.","created_at":"2025-10-02 21:39:52.546672+00"},{"idx":15,"id":16,"question":"¿El sistema puede calcular estadísticas o hacer predicciones?","answer":"No, al haberse creado con el fin de entregar información especifica no puede generar estos procesos","created_at":"2025-10-02 21:39:52.546672+00"},{"idx":16,"id":17,"question":"¿Cómo debo formular mis preguntas para obtener mejores respuestas?","answer":"Por el momento esta en entrenamiento, ira aprendiendo a medida del uso","created_at":"2025-10-02 21:39:52.546672+00"},{"idx":17,"id":18,"question":"¿El sistema recuerda mis preguntas anteriores?","answer":"Si, al ingresar al sistema con usuario y contraseña tendra historial de conversaciones","created_at":"2025-10-02 21:39:52.546672+00"},{"idx":18,"id":19,"question":"¿Se pueden hacer preguntas complejas que mezclen varios temas?","answer":"No, lo mas probable es que de una respuesta no coherente o que no tenga relación con otros datos mas allá de la configuración por datasets","created_at":"2025-10-02 21:39:52.546672+00"},{"idx":19,"id":20,"question":"¿Este sistema utiliza inteligencia artificial?","answer":"Si, utiliza OPEN AI como procesador de inteligencia artificial","created_at":"2025-10-02 21:39:52.546672+00"},{"idx":20,"id":21,"question":"¿Qué modelo de lenguaje está usando el sistema?","answer":"Se puede seleccionar para utilizar uno mas robusto o menor aunque no influye ya que la cantidad de datos no es grande","created_at":"2025-10-02 21:39:52.546672+00"},{"idx":21,"id":22,"question":"¿El sistema puede equivocarse?","answer":"Si, al ser un sistema recién configurado y con información no tan limpia puede no dar relación relevante entre los datos","created_at":"2025-10-02 21:39:52.546672+00"}]