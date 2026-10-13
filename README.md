# 🌐 APIs Web App

🔗 **Demo en vivo:** [https://xapis.netlify.app/](https://xapis.netlify.app/)

Esta es una aplicación web desarrollada con **HTML, CSS y JavaScript vanilla**, cuyo objetivo es consumir distintas APIs públicas y mostrar información dinámica al usuario. La plataforma integra múltiples servicios externos (Pokémon, Giphy, memes, usuarios y un chatbot) mediante funciones serverless desplegadas en Netlify.

---

## 🚀 Características principales

- ✅ Consumo de múltiples APIs externas.
- ✅ Visualización dinámica de datos en el navegador.
- ✅ Funciones serverless para proteger claves de API.
- ✅ Chatbot integrado mediante Netlify Functions.
- ✅ Diseño responsive con CSS puro.
- ✅ Estructura modular de archivos JavaScript.
- ✅ Interfaz intuitiva y ligera.
- ✅ Despliegue en Netlify.

---

## 🛠 Tecnologías utilizadas

### Frontend

- HTML5
- CSS3
- JavaScript (ES6+)

### Backend / Funciones

- Netlify Functions
- Node.js
- Chatbot (API externa)

### Herramientas

- Git
- GitHub
- Visual Studio Code
- Netlify


## 📂 Estructura del proyecto

```text
APIs-main/
│
├── netlify/
│   └── functions/
│       ├── chat.mjs
│       ├── datosChat.js
│       ├── datosGiphy.js
│       ├── datosMemes.js
│       ├── datosPokemon.js
│       └── datosUsers.js
│
├── index.html
├── styles.css

---

## 🔌 APIs integradas

La aplicación consume las siguientes APIs:

- **Pokémon API**: Obtiene información de Pokémon (nombre, tipo, imagen, etc.).
- **Giphy API**: Busca y muestra GIFs animados.
- **Memes API**: Recupera memes aleatorios o por categoría.
- **Users API**: Obtiene datos de usuarios de prueba.
- **Chatbot API**: Responde preguntas del usuario mediante un flujo automatizado.

Cada API está encapsulada en su propio archivo JavaScript dentro de `netlify/functions`, lo que permite mantener el código organizado y proteger las claves de acceso.

---

## 🤖 Chatbot

El chatbot está implementado como una función serverless en `chat.mjs` y `datosChat.js`. Recibe los mensajes del usuario desde el frontend y devuelve respuestas generadas por un servicio externo (como Zapier o similar).

---

## 📱 Responsive Design

La interfaz fue desarrollada con CSS puro, adaptándose correctamente a:

- Teléfonos móviles.
- Tablets.
- Computadoras.

---

## ☁️ Despliegue

La aplicación se encuentra desplegada mediante Netlify.

**Sitio web:**

https://xapis.netlify.app/

---

## ⚙️ Instalación

Clonar el repositorio:

```bash
git clone https://github.com/sebxs29/APIs.git
```

Entrar al proyecto:

```bash
cd APIs
```

Instalar dependencias (si usas Netlify CLI):

```bash
npm install
```

Ejecutar el proyecto localmente:

```bash
netlify dev
```

O simplemente abre `index.html` en tu navegador para la parte estática.

---

## 👥 Integrantes

- Sebastián Toapanta
- Andrés Oto

---

## 📄 Licencia

Proyecto académico desarrollado para la asignatura **Desarrollo de Aplicaciones Web**.

---

