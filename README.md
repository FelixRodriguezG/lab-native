# ¡Bienvenido a tu aplicación de Expo! 👋

Este es un proyecto de [Expo](https://expo.dev) creado con [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Comenzar

1. Instalar dependencias

   ```bash
   npm install
Iniciar la aplicación

Bash
npx expo start


En la salida de la terminal, encontrarás opciones para abrir la aplicación en:
- Una [versión de desarrollo (development build)](https://docs.expo.dev/develop/development-builds/introduction/)
- Un [emulador de Android](https://docs.expo.dev/workflow/android-studio-emulator/)
- Un [simulador de iOS](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), un entorno de pruebas limitado para experimentar el desarrollo de aplicaciones con Expo

Puedes empezar a desarrollar editando los archivos dentro del directorio **app**. Este proyecto utiliza [enrutamiento basado en archivos (file-based routing)](https://docs.expo.dev/router/introduction).

## Obtener un proyecto limpio

Cuando estés listo para empezar desde cero, ejecuta:

```bash
npm run reset-project
Este comando moverá el código inicial al directorio app-example y creará un directorio app vacío para que empieces a desarrollar tu propio código.

🐧 Guía específica para Entorno Linux e instalación en móvil Android
Debido a las restricciones de permisos globales (EACCES), variables de entorno faltantes y problemas con el aislamiento de paquetes en Linux, se documentan los pasos exactos que hicieron funcionar este despliegue de desarrollo.

🚀 Método A: Despliegue Inalámbrico con Expo Go (Recomendado / Rápido)
Este método permite programar sin necesidad de configurar localmente el pesado SDK de Android Studio ni pelearse con cables USB.

Instalar soporte para Túneles localmente: Evita el error de permisos globales instalando ngrok directamente como dependencia de desarrollo en el proyecto:

Bash
npm install -D @expo/ngrok

2. **Lanzar el servidor de desarrollo:** Obliga a Expo a levantar un puente seguro hacia la nube:
   ```bash
   npx expo start --tunnel
   
Sincronizar el móvil: Abre la app Expo Go en tu dispositivo Android físico, selecciona "Scan QR code" y escanea el código QR gigante que imprimirá la terminal.

🔌 Método B: Conexión Nativa mediante Cable USB (ADB)
Si prefieres conectar tu teléfono por cable y saltarte los túneles de red:

Instalar herramientas de Android en Linux:

Bash
sudo apt update
sudo apt install android-tools-adb android-tools-fastboot

2. **Configurar el teléfono:**
   * Ve a **Ajustes** > **Acerca del teléfono** y pulsa **7 veces** seguidas el *Número de compilación* para activar las *Opciones de desarrollador*.
   * Entra a ese nuevo menú y activa la **Depuración USB**.
   * Conecta el cable USB a la PC y **acepta el cartel de permisos** que saldrá en la pantalla del teléfono.
3. **Verificar y lanzar:**
   ```bash
   adb devices  # Debería listar tu ID de dispositivo sin el texto "unauthorized"
   npx expo start --android
   
⚠️ Notas de Soporte y Troubleshooting (Linux)
Warnings de Deprecación (npm warn deprecated): Son completamente normales al crear el proyecto debido a dependencias internas heredadas de React Native. Se deben ignorar; nunca ejecutes npm audit fix --force, ya que romperá las versiones exactas que el SDK 54 de Expo necesita para ser estable.

Errores de Permisos (EACCES): Si experimentas problemas de bloqueo al ejecutar comandos, asegúrate de que tu usuario local sea el propietario absoluto de la carpeta de trabajo:

Bash
sudo chown -R $USER:$USER .


---

## Más información

Para saber más sobre cómo desarrollar tu proyecto con Expo, echa un vistazo a los siguientes recursos:

- [Documentación de Expo](https://docs.expo.dev/): Aprende los fundamentos o profundiza en temas avanzados con nuestras [guías](https://docs.expo.dev/guides).
- [Tutorial de aprendizaje de Expo](https://docs.expo.dev/tutorial/introduction/): Sigue un tutorial paso a paso donde crearás una aplicación que funciona en Android, iOS y la web.

## Únete a la comunidad

Únete a nuestra comunidad de desarrolladores que crean aplicaciones universales.

- [Expo en GitHub](https://github.com/expo/expo): Visita nuestra plataforma de código abierto y contribuye.
- [Comunidad de Discord](https://chat.expo.dev): Chatea con otros usuarios de Expo y h