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

console.log(receipt[2].name)

// 4. Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.

const apartmentBuilding =['100 Wall St',
                          ['Jane Doe', 'Boris Shah','Alaska Shah']
                        ];
console.log(apartmentBuilding[1][1])
