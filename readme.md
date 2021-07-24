# Render web-page using JavaScript Objects

The aim of this project is make use of some of the fundamental JavaScript
concepts to render a plain web-page using JavaScript and the DOM API. To
understand this application code, preliminary understanding of following
concepts is necessary

- JavaScript Function (ES6 Syntax)
- Objects and accessing object properties
- Event listeners
- DOM API usage
- CSS styling, usage of id and classes
- **JavaScript Modules.**

The web-page code is split into separate modules to reduce complexity. Each
module is responsible for rendering a section of the web-page. Data for the
web-page is store separately in a **./data/data.js** file. This is to mimic any
data that is received after making a call to a backend api, or a CMS.

```
Folder Structure
├── index.html
├── referenceMarkUp.html
├── src
│   ├── app.js
│   ├── components
│   │   ├── banner.js
│   │   ├── hamburger.js
│   │   ├── logo.js
│   │   ├── navigation.js
│   │   └── navLinks.js
│   └── data
│       └── data.js
└── styles
    ├── media-queries.css
    └── style.css
```

Different sections of the web-page are stored in **./components** directory
where the file contains code that will render the necessary markup. This markup
can be changed without affecting the rest of the web-page structure. Entire
rendering process is launched by **./src/app.js** file which sequentially calls
each component and adds the markup within a div with **id="root"**. Since code
is made modular in nature, there is no need to separately include all the
application files. A single script file with an attribute= 'module', will import
all the necessary code from different modules.

```
<script src="./src/app.js" type="module" defer></script>
```

This simplifies the process of writing code. The code complexity can be
abstracted into separate modules and relevant functionality can be exported out
of a module to be used by another part of the application. A working demo of
this page is present
[here](https://niravkpatel28.github.io/webpage-rendering-plain-js/).
