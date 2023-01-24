# Messenger UI

This is the frontend for the messaging app for the NGINX Microservices March demo architecture.

**Note:** This project is very much a WIP and is not yet up to the standards of the other projects included in this org as part of the NGINX Microservices March demo architecture.

## Requirements

### NodeJS

This project uses `NodeJS`. The current version is specified in [`.tool-versions`](https://github.com/microservices-march/messenger-ui/blob/main/.tool-versions). `NodeJS` is a rapidly evolving language which makes it critical to explicitly define which version is being used to avoid any potential errors due to mismatched versions.

We recommended that you use [asdf](https://asdf-vm.com/guide/getting-started.html) to manage your local `NodeJS` installation. Once you have `asdf` installed, you can run `asdf install` to automatically install the version of `NodeJS` specified in [`.tool-versions`](https://github.com/microservices-march/messenger-ui/blob/main/.tool-versions).

<details>
<summary>

#### Why `asdf`?
</summary>
In a microservices environment, you may have to work on projects that use different versions of a runtime like `NodeJS`, or use a different language altogether!

[asdf](https://asdf-vm.com/guide/getting-started.html) is a single tool that lets you manage multiple versions of different languages in isolation and will automatically install and/or switch to the required runtime/version in any directory that has a `.tool-versions` file.

This is helpful in getting closer to [dev/prod parity](https://12factor.net/dev-prod-parity) in a microservices environment. As you can see in this project, the [GitHub action workflow](https://github.com/microservices-march/messenger-ui/blob/main/.github/workflows/test.yml) uses the same version called out in [`.tool-versions`](https://github.com/microservices-march/messenger-ui/blob/main/.tool-versions) to test the codebase and build a Docker image.

This way, if we use `asdf` we're guaranteed to be developing, testing, and releasing to a consistent version of NodeJS.
</details>

You can also install `NodeJS` by other means - just reference the version number in the `.tool-versions` file.

## Setup

1. Clone this repo:

    ```bash
    git clone https://github.com/microservices-march/messenger-ui
    ```

2. Install NodeJS modules:

    ```bash
    npm install
    ```

## Using the Service

In the project directory, you can run:

### `npm start` -> Runs the app in the development mode

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

To run with mock data:

```bash
REACT_APP_MOCK_ENABLED=true npm start
```

To run with real data (assuming the messenger app is running and listening on port `4000`):

```bash
REACT_APP_MOCK_ENABLED=false REACT_APP_BACKEND_HOST=localhost:4000 npm start
```

### `npm test` -> Launches the test runner in the interactive watch mode

See the Create React App section on [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build` -> Builds the app for production to the `build` folder

Bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

Your app will be ready to be deployed once it's built!

See the Create React App section on [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject` -> Removes the single build dependency from your project

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time.

This command will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Cleanup

If you want to cleanup any artifacts resulting from running this project, run:

```bash
rm -rf node_modules
```

## Development

Read the [`CONTRIBUTING.md`](https://github.com/microservices-march/messenger-ui/blob/main/CONTRIBUTING.md) file for instructions on how to best contribute to this repository.

## License

[Apache License, Version 2.0](https://github.com/microservices-march/messenger-ui/blob/main/LICENSE)

&copy; [F5 Networks, Inc.](https://www.f5.com/) 2023
