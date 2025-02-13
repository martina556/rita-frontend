# Usa una imagen oficial de Node.js como base para construir la aplicación
FROM node:18-alpine AS build

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json (o yarn.lock si usas Yarn)
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Construye la aplicación
RUN npm run build

# Usa una imagen ligera de Nginx para servir la aplicación
FROM nginx:alpine

# Copia los archivos generados en la carpeta de build al directorio de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expone el puerto 80 para que se pueda acceder a la aplicación
EXPOSE 5173

# Inicia Nginx
CMD ["nginx", "-g", "daemon off;"]
