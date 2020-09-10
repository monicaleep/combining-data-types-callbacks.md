// =======================================
// Combine objects, arrays, and functions
// =======================================

// 1. Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.
const crayonBox = {
  colors : ['red','chartreuse','indigo','violet']
};
console.log(crayonBox.colors[2]);



// 2. Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.
const bottle = {
  cap : {
    color : 'blue',
    materal : 'plastic',
    type : 'twistoff'
  }
}

console.log(bottle.cap.color);

//3. Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.

const receipt = [
  {
    name: 'honeycrisp',
    price: 1.29,
    quantity: 1
  },
  {
    name: 'Kashi',
    price: 3.39,
    quantity: 1
  },
  {
    name: 'Ben and Jerry',
    price: 4.49,
    quantity: 7
  }
]

console.log(receipt[2].name);

// 4. Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.

const apartmentBuilding =['100 Wall St',
                          ['Jane Doe', 'Boris Shah','Alaska Shah']
                        ];
console.log(apartmentBuilding[1][1]);


// =======================================
// Combine objects, arrays, and functions more than one level deep
// =======================================

// 1. Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc. Log a value of that object (hint: call the function and then call a property on the return value).

const knit = () => {
  return {
    item: 'blanket',
    material: 'wool',
    size: '6 square feet'
  }
};
console.log(knit().size);


// 2. Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object). Log one of the elements of that array.

const crayonSelector = () => {
  return {
    colors : ['red','chartreuse','indigo','violet']
  }
};

console.log(crayonSelector().colors[1]);


// 3. Create a function powerButton that returns a function called options - options should console.log a simple message like select a song. Call that inner function

const powerButton = () => {
  return options = () => {
    console.log("select a song");
  }
}
powerButton()();


//a vending machine is an object
// it has an array of snacks (make 3 snacks)
// snacks are objects that have a name and a price
// a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
// Be able to call vendingMachine.vend() with a valid integer to return a snack

const vendingMachine = {
  snacks : [{name:'chips',
            price: 2
            },
            {name: 'cookies',
            price: 1},
            {name: 'granola bar',
            price: 1} ],
  vend : function(num){
    return vendingMachine.snacks[num]
  }
};

vendingMachine.vend(2)
