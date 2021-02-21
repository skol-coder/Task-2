var obj = {1:'a',2:'b',3:'c',4:'d'};
process.stdout.write("Object: ");
console.log(obj);

var shallow_copy = obj;
process.stdout.write("Shallow copy of Object: ");
console.log(shallow_copy);

var deep_copy = JSON.parse(JSON.stringify(obj));
process.stdout.write("Deep copy of Object: ");
console.log(deep_copy);