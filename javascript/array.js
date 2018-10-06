var myarray = ["Monday", "Tuesday"];
        myarray.push("Wednessday");
        console.log(myarray);

        myarray.pop();
        console.log(myarray);

        myarray.unshift("Sunday");
        console.log(myarray);

        myarray.shift();
        console.log(myarray);

        myarray.push("Wednesday");
        myarray.push("Thursday");
        console.log(myarray);

        myarray.splice(1,1);
        console.log(myarray);

        myarray.splice(1,0, "nuevo", "otro");
        console.log(myarray);

        myarray.forEach( (x, y) => console.log(x, y));