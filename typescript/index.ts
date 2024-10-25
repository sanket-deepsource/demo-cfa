import { add, someCondition, someString } from "./lib";
import * as Config from "./lib";

// JS-W1029 - since `add` is marked as deprecated in lib.ts file
add();


// JS-E1007 - since TTY is not exported from lib.ts file
const tty = Config.TTY

// JS-0345 - we detect that someCondition is a boolean based on it's definition in lib.ts
let res= someCondition === true


// JS-0371 - we detect that someString is a string based on it's definition in lib.ts
res = someString[0] === "s"
