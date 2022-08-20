// Ecmascript
// Create file add.js
// Import file in this file
import {add} from './add.js'

// Modify index.html from this:
// <script src="./index.js"></script>

// to this: 
// <script type = "module" src="./index.js"></script>

//Used the funtion exported
console.log(add(10,20))
