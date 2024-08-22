# Use the official lightweight Node.js image.
FROM node:20.17.0

# Set the working directory to /app inside the container.
WORKDIR /app

# Copy package.json and package-lock.json.
COPY package*.json ./

COPY tsconfig.json ./

# Install dependencies.
RUN npm i

COPY ./src ./src

# Build the app (compiling TypeScript to JavaScript).
RUN npm run build

# Expose the port the app runs on.
EXPOSE 3000

# Start the application.
CMD ["npm", "run", "serve"]
