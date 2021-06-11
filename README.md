# my-webpack-build

### My basic custom configuration of Webpack

### This configuration is designed to fit all the basic needs, it is able to:
* Compile JS / TS, CSS / SCSS (SASS) and HTML;
* Optimize HTML, CSS and JS (**production** mode) and compile JS with Babel;
* Check the script with ESLint (configure it in .eslintrc file);
* Copy static files (like favicon) to dist;
* Create source-map (**development** mode);
* Draw the dependencies' size graph with bundle analyzer (**production** mode);
* And more!

### To use:
1. Clone this repository to your local machine
2. Run `npm i` to install all dependencies
3. Done! Delete all demo content and customize files to fit your needs!

### Scripts:
– Build the project to dist folder in **production** mode: `npm run build`
– Build the project to dist folder in **development** mode: `npm run dev`
– Launch the project with **dev-server**: `npm start`
– See **statistics** of bundle-analyzer: `npm run stats`
