NPM INSTALLS

npm i -S @react-google-maps/api

npm install --save use-places-autocomplete

npm install @reach/comboboxp

npm install react-bootstrap bootstrap

npm install react-router-dom

npm install react-icons --save

<!-- npm install --save react-map-gl mapbox-gl -->

npm install deck.gl

npm install react-bootstrap-sidebar-menu

npm install three @react-three/fiber

npm install @react-three/drei

npm install gh-pages --save-dev

if error run: --legacy-peer-deps

Deploy Instructions, React on Github Pages

npm install gh-pages --save-dev

"homepage": "http://kotaueshima.github.io capstone-project-frontend",

"predeploy": "npm run build",
"deploy": "gh-pages -d build",

then npm run deploy

API:

https://developer.spotify.com/

Project Pitch:

Have you ever wondered what somebody across the world is listening to? This project will create a global platform for users to browse and add songs based on their location. This project will utilize google maps API as well as spotify API to display user locations and song choice.

User story:

As a user, you should be able to browse through a global map, where there will be markers of other user posts, and they should be able to click on these markers to access a title of a song that the user has posted. The song should also have a valid link to a spotify version of the song. The user can also login to create his own posts of a song based on their current location.
