# Base image setup
FROM node:14.15.4-alpine

# Create and change app directory
WORKDIR /usr/app

# Copy application from the repository to the app directory
COPY . .

# Ignore the Node engine
RUN yarn config set ignore-engines true

# Install production dependencies
RUN yarn install --pure-lockfile

# Build the Blitz build application
RUN yarn build

# Run the Blitz app on container startup
CMD [ "yarn", "start" ]
