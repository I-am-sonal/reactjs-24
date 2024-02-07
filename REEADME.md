#Namaste reactJS

#parcel
- Dev Build
- local server
- HMR - Hot Module Replacement
- File Watching Algorithm - written in C++
- Catching - Faster Builds 
- Image Optimization - this will be done by some other libraries of react
- Minification
- Bundling
- Compress
- Consistent Hashing - is a special kind of hashing technique such that when a hash table is resized, it will only remapped the updated changes.
- Code Splitting - split your files
- Differential Bundling - support older brwsers, diff bundler for diff type of app.
- Dignostic - dignos the issues and show it on the browser.
- Error Handing
- HTTPs
- Tree Shaking - too many lines of code, then it will remove unused code.
- parcel is fast - it has parcel-cache folder inside it.
- Different Dev and Production bundles  
- parcel documentation - parceljs.org

#Project Structure
{/* 
Header
- Logo
- Nav Items
Body
- Search
- Restaurant Container
- Restaurant Card
    - img, star rating, cuisine, delivery time
Footer
- Copyright
- Links
- Address
- Contact

**/}

# 2 types of Routing in web apps
- Client side routing
- Server side routing

# Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice (cartSlice)
- Dispatch (action)
- Selector

# Types of testing
- Unit testing
- Integration testing 
- End to end (e2e) testing

# Setting up Testing in our app
- Install React Testing Library.
- Install Jest
- Install Babel dependencies (its required when we are using Jest along with Babel)
- Configure Babel
- Configure Parcel config file to disable default Babel transpilation
- jest Configuration ( npx jest --init)
- Install jsdom library - npm install --save-dev jest-environment-jsdom (Jest 28
If you're using Jest 28 or later, jest-environment-jsdom package now must be installed separately.)
- Install @babel/preset-react to make JSX work in test cases.
- Include @babel/preset-react inside my babel config. (npm i -D @babel/preset-react)
- Install npm i -D @testing-library/jest-dom

# Parcel uses Babel behind the scene
- There can be conflict as parcel already has babel configuration in it  and now we are trying to configure Babel again separately.
- We have to accomodate some changes in parcel configuration
- parcel docs - search for jest and click on javascript - (https://parceljs.org/languages/javascript/#usage-with-other-tools) or on left navigation check javascript and on right click babel
- Usage with other tools section - To disable Babel transpilation in Parcel, override the default Parcel config for JavaScript to exclude @parcel/transformer-babel.
- create new file "parcelrc" and add code.


