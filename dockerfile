# Use a Node.js official image as the base
FROM node:20

# Create app directory inside the Docker image
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code
COPY . .

RUN npm run prisma:generate

# Compile TypeScript to JavaScript
RUN npm run build

# Your app binds to port 3000, so use the EXPOSE instruction to have it mapped by the Docker daemon
EXPOSE 3000

# Define the command to run your app
CMD [ "npm", "start" ]