# Code exercise for Helpful Digital
Code exercise for the position of Front End Developer with Helpful Digital.

*Calum Ryan (dev@calumryan.com)*

Instructions for running the code test locally and as a deployment.

## Requirements
* [NodeJS](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)

## Project setup
Clone this repo. Navigate to the repository folder if required, then run ```npm install``` from your command line or terminal. This will install the required dependencies to compile the code locally.

VueJs and TailwindCSS are used for this exercise as I'm familiar with them and they provide a quick and efficient way to prototype the rendering of items in the provided JSON file.

Additionally you can view the compiled page on my website at [calumryan.com/code/helpfuldigital-exercise](https://calumryan.com/code/helpfuldigital-exercise).

## Compile and hot-reload for development
With everything installed now run ```npm run serve```. The details of the localhost and network URLs should display in the terminal/command line.

## Compile files for deployment
To compile everything ready for a production build run ```npm run build```.

## Planning / ToDo list
This is a short project plan I've created for my approach to the exercise for which I allowed half a day. I've outlined any remaining parts of the plan which I didn't have time to complete.

* ~~Review requirements and breakdown into defined components (server list, links and detail view).~~
* ~~Set up initial development environment with VueJs CLI.~~
* ~~Create components with HTML markup and include TailwindCSS for basic styling of components and general layout.~~
* ~~Test with Chrome, Firefox, Safari, IE11, Edge.~~
* ~~Test responsive layout for small/medium/large screen sizes~~
* ~~Test keyboard-only navigation~~
* Add ARIA roles to give greater enhancement to interactions and content types
* Test with a screenreader such as Mac VoiceOver.
* Write some unit tests to test against missing or malformed data.
* Audit with Lighthouse to check general performance, accessibility and offline capabilities.
* Create a function to scroll-to selected item for mobile layout.
* Enhance the UI with icons and additional focus-state styling for accessibility.
* Remove TailwindCSS CDN reference and incorporate into the compiled files.

## Customize configuration
The build environment is based on the VueJs CLI version 3.
For more details on this see [Configuration Reference](https://cli.vuejs.org/config/).