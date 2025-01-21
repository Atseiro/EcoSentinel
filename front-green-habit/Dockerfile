# Use an official Node.js runtime as the base image
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy only package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Build the application (if needed for production)
# RUN npm run build

# Use a smaller runtime image for the final container
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy only the built application (if applicable)
COPY --from=builder /app /app

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "dev"]
