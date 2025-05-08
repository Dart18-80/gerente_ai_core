# Etapa 1: Build
FROM node:22 AS builder

WORKDIR /app

# Copiar solo lo necesario para instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Compilar TypeScript
RUN npm run build

# Etapa 2: Imagen final
FROM node:22 

WORKDIR /app

# Copiar solo lo necesario del builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

# Exponer el puerto
EXPOSE 3000

# Comando por defecto
CMD ["node", "dist/main"]
