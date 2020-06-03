## Boilerplate `monorepo` for React and React Native.

The purpose of this repository is to server as a template workspace for future applications that will share logic between react and react native.
The project is based on React 16.x and Expo SDK 37 set up with Typescript templates for both of the clients and the common section.

The folder structure is as follows:

- main level
  +-- packages
  | +-- common (houses the common logic to be shared between the apps)
  | +-- mobile (expo based react native app)
  | +-- web (web based react project)

### Package naming convention

There is a top level `package.json` file that denotes that this a workspace and that all packages within the workspace will be found in the `packages/` directory. Within each package lives another `package.json`. The naming convention is `monorepo/{module}` where the module = common, mobile or web. It is recommended that you replace the `@monorepo` portion of your package name with your own workspace name in each `package.json` and all resulting references.

## Running the Sample

All of the standard commands will work for the respective platforms.

To launch the web project, go into the `web` project directory, and run:

### `yarn start`

This runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Mobile app

The mobile application can be launched in development mode by typing

### yarn start

in the `mobile` directory.

### yarn ios

to run the ios version

### yarn android

to run the Android version.

For testing:

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
