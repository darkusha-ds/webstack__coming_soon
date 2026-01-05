# Базовый образ Node.js на основе Debian
FROM node:20-slim

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY web_stack/webstack__coming_soon/coming_soon/package*.json ./
RUN npm install

# Копируем приложение
COPY web_stack/webstack__coming_soon/coming_soon/ .

# Экспонируем порты
EXPOSE 3000

# Запуск
CMD ["npm", "run", "start"]
