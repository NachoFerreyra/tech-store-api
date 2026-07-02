# 🛒 Tech Store API | Ignacio Ferreyra

<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="80" alt="NestJS Logo" />
</p>

<p align="center">
  REST API profesional para una tienda de tecnología, construida con <strong>NestJS</strong>, <strong>MongoDB Atlas</strong> y <strong>JWT Authentication</strong>.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/NestJS-v11-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS" />
  <img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/JWT-Auth-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT" />
  <img src="https://img.shields.io/badge/Swagger-API_Docs-85EA2D?style=for-the-badge&logo=swagger&logoColor=black" alt="Swagger" />
</p>

---

## 📋 Descripción

**Tech Store API** es una REST API diseñada para gestionar productos de una tienda de tecnología. Implementa autenticación basada en JWT, control de acceso por roles (RBAC) y documentación interactiva con Swagger.

El proyecto fue desarrollado como práctica de desarrollo backend, aplicando arquitectura modular, autenticación con JWT, autorización basada en roles (RBAC) y buenas prácticas de desarrollo con NestJS.

---

## 🚀 Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| **NestJS 11** | Framework principal del backend |
| **TypeScript 5** | Lenguaje de programación |
| **MongoDB Atlas** | Base de datos en la nube (NoSQL) |
| **Mongoose** | ODM para modelado de datos |
| **Passport + JWT** | Autenticación basada en tokens |
| **bcrypt** | Hashing de contraseñas |
| **class-validator** | Validación de DTOs |
| **class-transformer** | Transformación de datos entrantes |
| **Swagger (OpenAPI)** | Documentación interactiva de la API |

---

## 🏗️ Arquitectura

El proyecto sigue la **arquitectura modular de NestJS**, organizando el código en módulos independientes y reutilizables:

```
Módulos:
├── AppModule          → Módulo raíz (configuración global)
├── AuthModule         → Autenticación (JWT + Passport)
├── UsersModule        → Gestión de usuarios
└── ProductsModule     → CRUD de productos
```

Cada módulo encapsula sus propios controllers, services, DTOs y schemas, promoviendo la separación de responsabilidades y la escalabilidad.

---

## ✨ Características principales

- ✅ **CRUD completo de productos** — Crear, leer, actualizar y eliminar
- ✅ **Registro de usuarios** — Con hashing seguro de contraseñas (bcrypt)
- ✅ **Login con JWT** — Genera tokens de acceso con expiración de 1 hora
- ✅ **JWT Authentication** — Protección de endpoints mediante Bearer token
- ✅ **Role Based Access Control (RBAC)** — Roles `user` y `admin`
- ✅ **MongoDB Atlas** — Base de datos en la nube, lista para producción
- ✅ **Swagger / OpenAPI** — Documentación interactiva con botón Authorize
- ✅ **Validación de datos** — DTOs con `class-validator` y `whitelist` activado
- ✅ **CORS habilitado** — Preparado para consumir desde frontends

---

## 📦 Instalación

### Prerrequisitos

- **Node.js** v18 o superior
- **npm** v9 o superior
- Cuenta en **MongoDB Atlas** (o MongoDB local)

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/tech-store-api.git

# 2. Entrar al directorio
cd tech-store-api

# 3. Instalar dependencias
npm install
```

---

## 🔐 Variables de entorno

Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
PORT=3000
MONGODB_URI=mongodb+srv://<usuario>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority
JWT_SECRET=tu-clave-secreta-aqui
```

| Variable | Descripción | Ejemplo |
|---|---|---|
| `PORT` | Puerto donde corre la API | `3000` |
| `MONGODB_URI` | Connection string de MongoDB Atlas | `mongodb+srv://...` |
| `JWT_SECRET` | Clave secreta para firmar tokens JWT | `mi-clave-secreta-123` |

---

## ▶️ Cómo ejecutar el proyecto

### Desarrollo (con hot-reload)

```bash
npm run start:dev
```

### Producción

```bash
# 1. Compilar el proyecto
npm run build

# 2. Ejecutar en producción
npm run start:prod
```

La API estará disponible en `http://localhost:3000`.

---

## 📡 Endpoints principales

### Auth

| Método | Ruta | Descripción | Auth |
|---|---|---|---|
| `POST` | `/auth/register` | Registrar un nuevo usuario | ❌ No |
| `POST` | `/auth/login` | Iniciar sesión (devuelve JWT) | ❌ No |

### Products

| Método | Ruta | Descripción | Auth |
|---|---|---|---|
| `GET` | `/products` | Obtener todos los productos | ❌ No |
| `GET` | `/products/:id` | Obtener un producto por ID | ❌ No |
| `POST` | `/products` | Crear un nuevo producto | ❌ No |
| `PATCH` | `/products/:id` | Actualizar un producto | ❌ No |
| `DELETE` | `/products/:id` | Eliminar un producto | ❌ No |

### Users

| Método | Ruta | Descripción | Auth |
|---|---|---|---|
| `GET` | `/users` | Obtener todos los usuarios | ✅ Admin |

---

## 🔑 Cómo autenticarse

### 1. Registrar un usuario

```bash
POST /auth/register

{
  "name": "Juan Pérez",
  "email": "juan@email.com",
  "password": "password123"
}
```

### 2. Iniciar sesión

```bash
POST /auth/login

{
  "email": "juan@email.com",
  "password": "password123"
}
```

**Respuesta:**

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### 3. Usar el token en endpoints protegidos

Agregar el token en el header `Authorization`:

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## 📖 Cómo usar Swagger

1. Iniciar la API (`npm run start:dev`).
2. Abrir el navegador en: **http://localhost:3000/api**
3. Hacer clic en el botón **"Authorize"** 🔓.
4. Pegar el `access_token` obtenido del login (sin la palabra "Bearer").
5. Ahora podés probar los endpoints protegidos directamente desde Swagger.

---

## 🌐 Deploy

> **URL del deploy:** `https://tu-url-de-deploy.com`

## 📸 Capturas sugeridas

> Para completar la presentación del proyecto, se recomienda agregar capturas de:
>
> 1. **Swagger UI** — Vista general de los endpoints (`/api`)
> 2. **Swagger Authorize** — Modal del botón Authorize con Bearer token
> 3. **POST /auth/register** — Ejemplo de registro exitoso
> 4. **POST /auth/login** — Ejemplo de login con respuesta del token
> 5. **GET /users (protegido)** — Respuesta exitosa con token de admin
> 6. **GET /users (sin token)** — Respuesta 401 Unauthorized
> 7. **MongoDB Atlas** — Vista del cluster con las colecciones

---

## 📁 Estructura del proyecto

```
tech-store-api/
├── src/
│   ├── auth/
│   │   ├── decorators/
│   │   │   └── roles.decorator.ts       # Decorador personalizado @Roles()
│   │   ├── dto/
│   │   │   └── login.dto.ts             # DTO para login
│   │   ├── guards/
│   │   │   ├── jwt-auth.guard.ts        # Guard de autenticación JWT
│   │   │   └── roles.guard.ts           # Guard de autorización por roles
│   │   ├── auth.controller.ts           # Controller de autenticación
│   │   ├── auth.module.ts               # Módulo de autenticación
│   │   ├── auth.service.ts              # Servicio de autenticación
│   │   └── jwt.strategy.ts              # Estrategia Passport JWT
│   ├── products/
│   │   ├── dto/
│   │   │   ├── create-product.dto.ts    # DTO para crear producto
│   │   │   └── update-product.dto.ts    # DTO para actualizar producto
│   │   ├── schemas/
│   │   │   └── product.schema.ts        # Schema de Mongoose para Product
│   │   ├── products.controller.ts       # Controller de productos
│   │   ├── products.module.ts           # Módulo de productos
│   │   └── products.service.ts          # Servicio de productos
│   ├── users/
│   │   ├── dto/
│   │   │   └── create-user.dto.ts       # DTO para crear usuario
│   │   ├── schemas/
│   │   │   └── user.schema.ts           # Schema de Mongoose para User
│   │   ├── users.controller.ts          # Controller de usuarios
│   │   ├── users.module.ts              # Módulo de usuarios
│   │   └── users.service.ts             # Servicio de usuarios
│   ├── app.controller.ts                # Controller raíz (health check)
│   ├── app.module.ts                    # Módulo raíz
│   ├── app.service.ts                   # Servicio raíz
│   └── main.ts                          # Entry point de la aplicación
├── .env                                 # Variables de entorno (no subir a Git)
├── .gitignore
├── nest-cli.json
├── package.json
├── tsconfig.json
└── README.md
```

---
 
## ✅ Buenas prácticas implementadas

- **Arquitectura modular** — Cada feature en su propio módulo NestJS
- **DTOs con validación** — `class-validator` con `whitelist` y `forbidNonWhitelisted`
- **Hashing de contraseñas** — bcrypt con salt rounds
- **Password excluido por defecto** — `select: false` en el schema de User
- **Variables de entorno** — Configuración segura con `@nestjs/config`
- **Manejo de errores** — Excepciones HTTP estándar de NestJS (`NotFoundException`, `UnauthorizedException`, `ConflictException`, `ForbiddenException`)
- **CORS habilitado** — Listo para integrar con frontends
- **Swagger documentado** — Endpoints, DTOs y autenticación documentados
- **Timestamps automáticos** — `createdAt` y `updatedAt` en todos los schemas

---
