# SLP Prep Room · Guía de puesta en marcha

Solo hay que hacerlo una vez. Calcula unos 30–45 minutos.
Coste: 0 €. La dirección será `https://slp-prep-room.netlify.app`.

## 1. Crear una cuenta en GitHub
GitHub es donde se guardan los archivos de la web.
1. Entra en https://github.com/signup y créate una cuenta gratuita.
2. Confirma el correo.

## 2. Subir los archivos
1. En GitHub, pulsa **+ → New repository**.
2. En *Repository name* escribe `slp-prep-room`. Puede ser público o privado. Pulsa **Create repository**.
3. En la página del repositorio, pulsa **uploading an existing file**, o bien **Add file → Upload files**.
4. Descomprime el zip en tu ordenador. Abre la carpeta `slp-prep-room` y arrastra **todo su contenido** a la ventana del navegador: las carpetas `admin`, `content` e `images` y los archivos sueltos. No arrastres la carpeta entera.
5. Pulsa **Commit changes**.
6. Comprueba que en la lista aparecen `admin`, `content`, `images`, `index.html`, `build.js` y `netlify.toml`.

## 3. Publicar en Netlify
1. Entra en https://app.netlify.com/signup y elige **Sign up with GitHub** (así quedan conectadas).
2. Pulsa **Add new project → Import an existing project → GitHub**, autoriza el acceso y elige `slp-prep-room`.
3. No cambies nada de la configuración: ya la lee del archivo `netlify.toml`. Pulsa **Deploy**.
4. Cuando termine, ve a **Project configuration → Change project name** y escribe `slp-prep-room`.
   Si ese nombre está cogido, elige otro (por ejemplo `slp-preproom` o `raquel-slp-prep`). Funcionará igual.

## 4. Activar el acceso al panel
1. En el menú del proyecto, busca **Identity** y pulsa **Enable Identity**.
2. En los ajustes de Identity, en *Registration*, elige **Invite only**. Así solo entras tú.
3. Más abajo, en *Services → Git Gateway*, pulsa **Enable Git Gateway**.
4. Vuelve a la pestaña **Identity**, pulsa **Invite users** y escribe tu correo.
5. Abre el correo de invitación y pulsa el enlace. Se abrirá tu web y te pedirá una contraseña. Al guardarla, entrarás en el panel.

## 5. Usar el panel
- Entra siempre en `https://slp-prep-room.netlify.app/admin/`. También hay un enlace discreto, *Teacher login*, al pie de la web.
- **Entradas → Nueva entrada**: rellena título, sección, tipo, nivel, resumen, enlace (opcional), etiquetas y texto. Pulsa **Publicar**.
- La web se actualiza en uno o dos minutos.
- **Ajustes de la web**: cambia el título, el texto de bienvenida, el nombre del pie ("Created by…") y el texto del pie.
- Etiquetas: escríbelas separadas por comas. Las entradas con etiquetas en común aparecen como *Related*.
- En el texto puedes usar negrita, listas, enlaces e imágenes con los botones del editor.

## 6. Compartir con los alumnos
Pásales `https://slp-prep-room.netlify.app`. No necesitan cuenta.
También puedes enlazar directamente una sección (`.../#writing`, `.../#speaking`) o una entrada concreta (copia la dirección cuando la tengas abierta).

## Si más adelante quieres un dominio propio
En Netlify: **Domain management → Add a domain**. No hay que tocar nada más de la web.
