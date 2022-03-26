# Base image setup
FROM node:14.15.4-alpine

# Create and change app directory
WORKDIR /usr/app

# Copy application from the repository to the app directory
COPY . .

# Install production dependencies
RUN yarn install

# Build the Blitz build application
RUN yarn build

# Run the Blitz app on container startup
CMD [ "yarn", "start" ]
