## Docker RNP Stack

This is a docker-compose stack, running React Web App, Node API server, and Prostgresql DB.

### Running the Stack in dev mode

```
$ docker-compose up
```

- Any changes to the react app will auto-reload the browser.
- Any changes to the server code will auto-reload the server.
- Installing/uninstalling dependencies will require restarting the stack.
- Installing/uninstalling devDependencies will require rebuilding and restarting the stack.

### Installing/uninstalling dependencies in the container

There is no need to have node and npm installed on your machine. Node and npm are installed in your containers.

```
docker-compose run --rm <app|api> npm install --save <package>
```

Because your code base is mounted into the container this will update you `package.json` file, as well as install the package to the `node_modules/` directory.

_NOTE:_ If you are using a Mac or Windows machine for development running `npm` commands on your host machine could cause failures as it will install dependencies for your platform and not the container's linux platform.
