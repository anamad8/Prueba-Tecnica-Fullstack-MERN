# Prueba-Técnica-Fullstack-MERN
 Prueba Técnica - Para desarrollador Fullstack	MERN - JDigital Group Solutions


# ToDo App con Autenticación - MERN Stack


Aplicación fullstack para gestión de tareas con autenticación JWT, desarrollada con el stack MERN (MongoDB, Express, React, Node.js).

## 🌐 Enlaces

- **Frontend (React):** [https://tudominio-frontend.vercel.app](https://tudominio-frontend.vercel.app)
- **Backend (API):** [https://tudominio-backend.render.com](https://tudominio-backend.render.com)
- **Repositorio GitHub:** [https://github.com/anamad8/Prueba-Tecnica-Fullstack-MERN](https://github.com/tuusuario/todo-app-mern)

## 🛠️ Tecnologías

**Frontend:**
- React vite
- Zustand (gestión de estado)
- Axios (peticiones HTTP)
- Tailwind CSS (estilos)
- React Router (navegación)
- React Toastify (notificaciones)


**Backend:**
- Node.js + Express
- MongoDB Atlas (base de datos)
- Mongoose (ODM)
- JWT (autenticación)
- Bcrypt (hash de contraseñas)
- Express Rate Limit (protección API)

## 🚀 Instalación Local

1. **Clonar repositorio:**
   ```bash
   git clone https://github.com/anamad8/Prueba-Tecnica-Fullstack-MERN
   cd todo-app-mern

**Configurar backend:**

-   cd backend
-   npm install
-   cp .env.example .env
-   "Configurar variables en .env"
-   npm run dev

**Configurar frontend:**

-   cd frontend
-   npm install
-   cp .env.example .env
-   npm run dev

**Probar el Sistema**

Email: test@example.com
Contraseña: Test1234

**O registrarse manualmente:*

-   Acceder a /register

-   Completar formulario con:

-   Email válido

-   Contraseña (mínimo 6 caracteres)

-   Iniciar sesión en /login

-   Gestionar tareas en el dashboard


## 🚀 Funcionalidades

- ✔️ Autenticación JWT (registro/login)
- ✔️ CRUD completo de tareas
- ✔️ Tareas privadas por usuario
- ✔️ Diseño responsivo
- ✔️ Validación de formularios
- ✔️ Protección contra ataques (rate limiting)


## 🗂 Estructura del Proyecto

todo-app-mern/
- |-- backend/ # API Node.js
- | |-- src/
- | |-- config/ # Config DB, rate limit
- | |-- controllers/ # Lógica de endpoints
- | |-- models/ # Schemas MongoDB
- | |-- routes/ # Definición de rutas
- | |-- app.js # Config Express
- 
- -- frontend/ # Aplicación React
- |-- public/
- |-- src/
- | |-- api/ # Conexiones API
- | |-- components/ # Componentes UI
- | |-- pages/ # Vistas principales
- | |-- stores/ # Zustand stores
- | |-- App.jsx # Config principal

## Bonus Implementados
- Rate limiting en API
- Logs de errores en backend
- Actualización optimista en frontend
- Diseño responsive con Tailwind
- Validación de inputs en ambos lados

##  Licencia

MIT © Anabel Amad