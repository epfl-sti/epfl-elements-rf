EPFL Elements React Foundation (RF) Library
===========================================

This repository hosts a React Storybook UI components library based on the EPFL Elements specification (https://epfl-si.github.io/elements/#/), designed for easy integration into your React projects. The original components were initially developed for an internal tool and later generalized in the library's first iteration. However, the initial version included some dependencies non-related to the pure library (e.g., Plotly). This library aims to stay as close as possible to the Elements specification while remaining lightweight and efficient.

Please note this is just a subset of all the components available in EPFL Elements, but feel free to expand and contribute to this project! (see below.)


Requirements
------------

You need to have `react (> 18)` installed in your application in order to use this library. It has been successfully tested with `npm create vite` projects (JavaScript and TypeScript).


Explore
------------


If you want to explore this library, you can clone this repository and run:

```
npm install
npm run storybook
```

This command will launch a storybook server running on localhost in the port `:6006` where you can check what components are available in the library and the documentation about how they can be imported and used.

```
@storybook/core v8.5.5

info => Starting manager..
info => Starting preview..
info Using tsconfig paths for react-docgen
╭──────────────────────────────────────────────────────╮
│                                                      │
│   Storybook 8.5.5 for react-vite started             │
│   466 ms for manager and 2.14 s for preview          │
│                                                      │
│    Local:            http://localhost:6006/          │
│    On your network:  http://192.168.188.109:6006/    │
│                                                      │
╰──────────────────────────────────────────────────────╯
15:09:26 [vite] ✨ new dependencies optimized: @storybook/blocks
15:09:26 [vite] ✨ optimized dependencies changed. reloading
```

Install
------------

If you are happy with the contents of the library, and you would like to use it in your project, you just need to install it as any other NPM dependency. This library (and all the other epfl-sti npm packages) are scoped under the `@epfl-sti` namespace.

```
npm install @epfl-sti/epfl-elements-rf
```

Contribute 
------------

As described on the README.md of the project. The next version of this library is available at https://www.npmjs.com/package/epfl-elements-react. This project runs now as collaboration with the FSD team. So we encourage you to contribute to that library.


Usage
-------

You can use this library importing any of its components as you would with any other react library.

1. Bootstrap a new react app using vite: `npm create vite`. (Fill your project name and select react with js or ts)

```

▶ npm create vite    
✔ Project name: … test-app
? Select a framework: › - Use arrow-keys. Return to submit.
    Vanilla
    Vue
❯   React
    Preact
    Lit
    Svelte
    Others

```

2. cd into this `test-app` directory.
5. Install the library with the command described in the previous section: `npm install @epfl-sti/epfl-elements-rf`
6. Remove the `import './index.css` line from `main.jsx`
4. Edit the source of the code of the app and replace the contents of the `App.js` file with:

```js

import { Base } from '@epfl-sti/epfl-elements-rf'

function App() {
  return (
    <Base asideMenuItems={[]}>
      This is a test page
    </Base>
  );
}

export default App;

```

4. Run `npm run dev` and you should see your starter page with the Elements look and feel. Check the storybook to change the menus, breadcrumbs, etc

License
-------
Apache 2.0

Author Information
------------------

Juan Convers (juan dot convers at epfl dot ch).