class Item {
    constructor(name, price, weight) {
        this.name = name;
        this.weight = weight;
        this.price = price;
        this.value = price / weight;
    }
}

// hammer 10 10  value = 1
// saw 40 2      value = 20
// 

const by_price_desc = (item1, item2) => item2.price - item1.price;
const by_price_asc = (item1, item2) => item1.price - item2.price;
const by_id_asc = (item1, item2) => item1.id - item2.id;

const array = [new Item(1, "hammer", 100), new Item(2, "saw", 200), new Item(3, "clay", 30)]
    .sort(by_id_asc);
//console.log(array);


// 1, 5, 10, 25 => 62
// 25 25 10 1 1 
// 1, 2, 3, 4 => 6
// 4 2 
// 1, 3, 4 => 6
// 4 1 1 => 3 3

// 1 5 10 30 2 
// 20
// step 1  sort = 30 10 5 2 1
// step 2  compare with result
//  step 3 estimate 10 10 goto step 2 
// return 10 10 
// O (logn) => binary search 
// O (n* logn) = > quick sort merge sort

// Задача о размене монет


// [10, 5, 1, 2, 25, 50]
function greedyCoinChange(coins, amount) {
    // Сортировать монеты по убыванию номинала
    const sortedCoins = [...coins].sort((a, b) => b - a);
    // Инициализация результата
    let result = [];
    let reminingAmount = amount;
    for (let coin of sortedCoins) {
        while (reminingAmount >= coin) {
            result.push(coin);
            reminingAmount -= coin;
        }
    }
    if (reminingAmount > 0) {
        throw new Error("Cannot make exact change");
    }
    return result;
}

//console.log(greedyCoinChange([10, 5], 57));


function greedyBackpack(items, capacity) {
    let sortedItems = [...items].sort((item1, item2) => item2.value - item1.value);

    let totalValue = 0;
    let remainingCapacity = capacity;
    let result=[];

    for (let item of sortedItems) {
        if (item.weight <= remainingCapacity) {
            totalValue += item.value;
            remainingCapacity -= item.weight;
            result.push({resultItem: item, value: item.value});
        } else if (remainingCapacity > 0) {
            const fraction = remainingCapacity / item.weight;
            totalValue += item.value * fraction;
            result.push({resultItem: new Item(item.name, item.price, fraction), value: item.value * fraction});
            remainingCapacity = 0;
        }
    }
    return {totalValue: totalValue, items: result};
}

const result = greedyBackpack([
    new Item("Iphone 17", 1500, 0.5),
    new Item("Freeze", 300, 50),
    new Item("TV", 400, 10),
    new Item("money", 10000, 0.1),
    new Item("ring", 5000, 0.05)],
    20
);

console.log(result.items.reduce((sum, item) => sum + item.resultItem.weight, 0));
//console.log("greedyBackpack = ", JSON.stringify());


