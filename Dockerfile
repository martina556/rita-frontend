# Copia el archivo package.json y package-lock.json al contenedor
COPY package*.json ./

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