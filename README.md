# Webpack Lint & Minify
Simple Webpack config for linting and minifying CSS and JavaScript libraries

## About
It turns out the trick to using a Webpack-only approach for outputting both linted/minified CSS and JavaScript is the [multi compiler](https://github.com/webpack/webpack/blob/main/examples/multi-compiler/webpack.config.js) design pattern. This is a cleaner approach and avoids the complications with routing, .map files, and rules when the same entry point object contains both file formats.

Interestingly, ChatGPT and other code assistants will suggest the multiple entry point concept, however, this assumes that the CSS will be imported in a JavaScript file. When specifying that you want to minify the CSS separately, the code assistants aren't able to suggest a workable (non-erroring) solution using the multiple entry point concept.

## Todos
- Add support for React, .jsx
- Confirm support in Visual Studio
