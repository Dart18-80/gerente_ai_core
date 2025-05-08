# 🧠 Backend NestJS - Goals API

Este proyecto es una API REST construida con **NestJS**, organizada en módulos y configurada para múltiples entornos (`development`, `staging`, `production`). Incluye autenticación, gestión de usuarios y objetivos (goals), con conexión a base de datos PostgreSQL usando TypeORM.

---

## 🚀 Tecnologías principales

- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [@nestjs/config](https://docs.nestjs.com/techniques/configuration)
- Validación de variables de entorno con [Joi](https://joi.dev/)

---

## 📦 Instalación

```bash
npm install
```

## 🌐 Variables de entorno

El proyecto soporta múltiples entornos. Crea archivos .env según el entorno en la raíz del proyecto:

.env

```bash
NODE_ENV=development
```

.env.development

```bash
NODE_ENV=development
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=1234
DB_NAME=nest_goals_dev
```

.env.staging y .env.production
Modifica según tu servidor, credenciales o contenedor.

## 🧱 Estructura del proyecto

```bash
src/
├── config/              # Archivos de configuración por entorno
├── common/              # Archivos en comun entre modulos
├── entities/            # Entidades TypeORM
├── modules/
│   ├── auth/            # Módulo de autenticación
│   ├── goals/           # Módulo de objetivos
│   └── users/           # (opcional)
├── main.ts              # Punto de entrada
├── app.module.ts        # Módulo raíz
```

## 🐳 Uso con Docker Compose

Este proyecto incluye un archivo docker-compose.yml que te permite levantar la base de datos PostgreSQL y conectarte desde tu backend NestJS local.

```bash
docker-compose up -d
```

Esto iniciará el contenedor de PostgreSQL en segundo plano. Puedes verificar con:

```bash
docker ps
```
