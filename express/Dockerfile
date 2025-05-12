# Use the official Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy files
COPY package.json ./
COPY index.js ./

# Install dependencies
RUN npm install --production

# Run the app
CMD ["node", "index.js"]

