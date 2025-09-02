const students = [{ name: "student1", age: 19 }, { name: "student11", age: 18 }, { name: "student2", age: 19 }, { name: "student30", age: 20 }];


function getStudentByName(students, name) {

    return students.find(student => student.name === name)

    /*for (const student of students) {
        if (student.name === name) {
            return student;
        }
    }
    return null;
    */
}

//console.log(getStudentByName(students, "student20"));

let map = new Map();
/*map.set("IT_2025_1_III", { id: "IT_2025_1_III", name: "Ivan", age: 20, group: "IT_2025_1" });
map.set("IT_2025_1_PPP", { id: "IT_2025_1_PPP", name: "Petr", age: 19, group: "IT_2025_1" });
map.set("IT_2025_1_HHH", { id: "IT_2025_1_HHH", name: "Helen", age: 18, group: "IT_2025_1" });
map.set("IT_2025_1_OOO", { id: "IT_2025_1_OOO", name: "Olga", age: 20, group: "IT_2025_1" });
map.set("IT_2025_1_GGG", { id: "IT_2025_1_GGG", name: "Galina", age: 20, group: "IT_2025_1" });

console.log(map.get("IT_2025_1_III"));

// O(1)
console.log(map.has("IT_2025_1_III12"));*/

let obj = {name:"2", value:2};
map.set({name:"1", value:1}, "1");
map.set(obj, "2");
map.set(obj, "3");
map.set(obj, "5");



console.log(map.get({name:"2", value:2}));

const obj1 = {name:"2", value:2};
const obj2 = {...obj1};

map.set(NaN, "erere");

console.log(map.get(NaN));

if (NaN === NaN) {
    console.log("true");
} else {
    console.log("false");
}

map.set("1212", "hello");
console.log("before delete map = ", map);
map.delete("1212");
console.log("after delete map = ", map);
console.log(map.size);



console.log(obj["value"]);
console.log(obj.value);

const obj3 = {true: "name", 2: "value"};

console.log(obj3[{name:""}]);
console.log(obj3);


map.forEach((value, key) => {
    console.log(`Key = ${JSON.stringify(key)} and value = ${value}`);
});

for (const [key, value] of map) {
    console.log(`Key = ${JSON.stringify(key)} and value = ${value}`);
}

map = new Map();

map.set(1, "user1");
map.set(2, "user2");
map.set(3, "user3");

console.log(map.keys());

console.log(map.entries());

const array = Array.from(map);
console.log(array);

const searchValue = "user3";
let foundKey = null;

for (const [key, value] of map) {
    if (value === searchValue) {
        foundKey = key;
        break;
    }
}

console.log(foundKey);

const content = "Hello the world and today is tuesday and another the simple and text";
const words = content.split(' ');
const wordCount = new Map(); // key = "the" value = 2

for (const word of words) {
    if (!wordCount.has(word)) {
        wordCount.set(word, 1);
    } else {
        const alreadyContains = wordCount.get(word);
        wordCount.set(word, alreadyContains + 1);
    }    
}

console.log(wordCount);
map.set("11", true);
map.set(true, {studentName:"Oleg"});
map.set(123, wordCount);

console.log(map);

//
const tools = [{name:"tool1", price: 10}, {name:"tool1", price: 20}, {name:"tool3", price: 10}, {name:"tool4", price: 10}];

const prices = new Set();
for (const tool of tools) {
    prices.add(tool.price);
}

console.log(prices);


const uniqueArray  = new Set();
const obj4 = {username: "user1"};
uniqueArray.add(obj4);
uniqueArray.add(obj4);
uniqueArray.add(obj4);
uniqueArray.add(obj4);
console.log(uniqueArray);
