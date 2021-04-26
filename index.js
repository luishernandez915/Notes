console.log("hello honey");
console.log("allahu akbar");

const a = [1, 2, 3]
/* By using the length = we can either add or delete the length of the array  */
a.length = 7
a

// How to add elements to the END of the array
let hijos = ["luis", "Fer", "faby"];
hijos
hijos.push("pelusita")
hijos

// How to add elements to the BEGINNING of the array
hijos.unshift("Kiri Kiri")
hijos

// How to remove the LAST item of an array
hijos.pop()
hijos

// remove item from BEGINNING of array
hijos.shift()
hijos

// How to join two or more arrays

const ay = [1, 2]
const b = [3,4]
const c = ay.concat(b)
ay
b
c

//or we can use spread operator ...
const d = [1,2]
const e = [3,4]
const f = [ ...d, ...e]
f

