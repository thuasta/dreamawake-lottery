# Use the official Node.js 16 image as base image
FROM node:16.14.0-buster

# Upgrade npm to the latest version
RUN npm install -g npm@9.6.2

# Set the working directory to the root directory of the application
WORKDIR /lottery

# Copy the application source code to the container
COPY . /lottery/

# Set the ownership of the application directory to root
RUN chown -R root /lottery \
    # Remove the line that opens the default browser when starting the server
    && sed -i '/openBrowser/ d' ./server/server.js \
    # Install dependencies for the server and product directories
    && cd server && npm install \
    && cd ../product && npm install \
    # Build the application
    && npm run build

# Expose port 8888 to the outside world
EXPOSE 8888

# Set the working directory to the product directory
WORKDIR /lottery/product

# Start the server
CMD ["npm", "run", "serve"]
