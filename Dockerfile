# Usa una imagen oficial de Node.js como base para construir la aplicación
FROM node:18-alpine AS build

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json (o yarn.lock si usas Yarn)
COPY package.json package-lock.json ./
# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del código de la aplicación al contenedor
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Instala un servidor estático para servir la aplicación
RUN npm install -g serve

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 5173

# Comando para ejecutar la aplicación
CMD ["serve", "-s", "dist"]