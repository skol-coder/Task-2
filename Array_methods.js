var arr = ["abcd","efgh","qrst"];
console.log(arr);
arr.pop();
console.log("pop: "+arr);
arr.push("qrst");
console.log("push: "+arr);
arr.shift();
console.log("shift: "+arr);
arr.unshift("abcd");
console.log("unshift: "+arr);
arr.splice(2,2,"ijkl","mnop");
console.log("splice: "+arr);
arr.splice(0,2);
console.log("splice to remove elements: "+arr);

var arr1 = ["abcd","efgh"];
arr2 = arr1.concat(arr);
console.log("concat: "+arr2);

var arr3 = arr2.slice(1,3);
console.log("slice: "+arr3);

console.log("toString: "+arr3.toString());

console.log(arr2.find(function(e){return e==="ijkl";}));

console.log("arr2: "+arr2);
console.log(arr2.map(e=>e.length));

var arr4 = [3,5,1,7,2,8,6,4,9,0]
console.log("arr4: "+arr4);

arr4.sort();
console.log("sorted arr4: "+arr4);

arr4.reverse();
console.log("reverse arr4: "+arr4);

console.log("reduce fn : "+arr4.reduce((sum,e)=>sum+e));

console.log("filter fn: "+arr4.filter(e=> {return e>5}));



