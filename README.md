# react-pack

HMR-enabled boilerplate for:
* React
* Redux + DevTools
* React Router
* React CSS Modules + LESS
* ImmutableJS
* Webpack + HMR
* Heroku

Application gets random GIF from [Giphy](http://giphy.com/) and shows it to user.

### Development server

Install dependencies and start development server with:

```
npm install
npm run dev
```

Server with HMR should now be running on `http://localhost:3000`

Redux DevTools are hidden by default. You can change this behavior and other settings from `src/containers/utils/DevTools.js`.

***To toggle the DevTool panel during development:***
<kbd>CTRL</kbd> + <kbd>H</kbd>

***Change the DevTool panel's position during development:***
<kbd>CTRL</kbd> + <kbd>Q</kbd>

### Production build

```
npm run build
```


## Acknowledgements

This project is a grateful recipient of the [Futurice Open Source sponsorship program](http://futurice.com/blog/sponsoring-free-time-open-source-activities).

Also thanks to [@anttti](https://github.com/anttti/) for his [yet-another-redux-example](https://github.com/anttti/yet-another-redux-example) and providing base for this project.
