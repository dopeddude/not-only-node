# not-only-node

#### The stack has been developed in the spirit of facilitating a common web application architecture to server side Java and NodeJS Developers both.

---------------------------------

##### Please note that followings are the specs/features which will be implemented in future.
##### Current status is not complete and not at all ready for use as of now.

---------------------------------

**Description**

* The client serving assets are placed in `src/main/webapp/client-assets` folder.
* This folder is common for using in either of the mode be it Java or be it NodeJS.
* Running the front-end-build does the following
   * downloads the bower dependencies and installs it to the `client-assets/bower-repo` folder.
   * will compile the css files to the output counterparts css
   * will run the JSLint / CSSLint related validations
   * will run the browserify to make us feel the node way scripting inside the browser.
   * will combine and minify the files with the help of grunt / gulp
   * will minify the images for browsers
   * will convert all data found within a stylesheet (those within a url( ... ) declaration) into base64-encoded data URI strings. This includes images and fonts.
   * ...
   * ...

* Using as a server side Java Stack
   * root folder in this case is the `code-base` having pom.xml in it.
   * pom.xml is configured to run the front-end-build *(This plugin downloads/installs Node and NPM locally for your project, runs NPM install, installs bower dependencies, run Grunt and/or gulp and/or Karma.)*
   * lets' open command prompt and go to the `code-base` directory
   * Run the command `mvn clean install`
   * As an output we have the web archive file named `ROOT.war` in `code-base/target` folder.
   * Deploy this war file to the application server like Apache Tomcat/Glassfish/JBoss etc.
* Using as a server side NodeJS stack
   * root folder in this case is the `code_base\src\main\webapp\code_for_node` having package.json in it.
   * `package.json` is configured to run the front-end-build which is with the help of npm.
   * The scripts related to running the front-end-build are placed in the `package.json`
   * Being in the root folder for this we just need to run the command `npm install` for building the application
   * To start the server we just need to run `npm start` from the root directory



