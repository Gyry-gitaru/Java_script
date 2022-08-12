const obj = {
    x: 10,
    y: 20,
    inner: {
        x: 20,
        z: 30
    },
    foo2: {
        k: 23,
        p: 13
    }
}


function convert(list) {
    let newObj = {};

    for (let key in list) {
        if (typeof(list[key]) === 'object') {

            for(let childKey in list[key]) {
                newObj[childKey] = list[key][childKey];
            }
        } else {
            newObj[key] = list[key];
        } 
    }
    return newObj;
}


let newObj = convert(obj);
console.log(newObj);



