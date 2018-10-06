var myObjects = {
    brand : "OnePlus",
    modelo : "3T",
    turOn: () => {console.log("Turning On...")
        return "hello";
    }
}

console.log(myObjects.modelo);
console.log(myObjects["brand"]);
console.log(myObjects.turOn());

for (const key in myObjects){
    console.log(key, myObjects[key]);
}