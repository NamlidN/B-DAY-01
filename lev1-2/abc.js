import {arrays} from './app.js'
import {names} from "./data.js"
import { numbers } from './data.js';

import { hs } from './app.js';
import { hs2 } from './app.js';
import { hs3 } from './app.js';
import { hs4 } from './app.js';
import { hs5 } from './app.js';
import { hs6 } from './app.js';
import { hs7 } from './app.js';
import { hs8 } from './app.js';
console.log(arrays(numbers[0], names[0]));
console.log(hs([...numbers] , [...names]));
console.log(hs2([...numbers] , [...names]));
console.log(hs3([...numbers] , [...names]));
console.log(hs4(["remove", "stay", "stay5", 22, true, "remove"], "remove"));
console.log(hs5(10,15));
console.log(hs6("hallo"));
console.log(hs7("hallo"));
console.log(hs8("hallo", "h"));