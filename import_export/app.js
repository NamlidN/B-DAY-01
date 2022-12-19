// EcmaScript Module -> import hoisting
// import hallo from hallo.jsx
// nicht vergesen: package.json => "type:"module"
// commonJs Modules -> kein hoisting
// const hallo = require('./hallo.jsx')

// als erstes npm init -y  ins terminal tippen
// -y akzeptiert automatisch alle default werte

import haus from "./calc.js";


console.log(haus());