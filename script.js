// Escreva seu código aqui
// let arr = [1,2,3,4]
function newForEach(array, callback){
    for(let i = 0; i < array.length; i++){
        callback(array[i],i,array)
    }
}
// console.log(newForEach(arr,(elem,index,array) => (array)))
// console.log(arr.forEach((elem,index,array) => (array)))





function newMap(array, callback){
    let newArray = []
    for(let i = 0; i < array.length; i++){
        newArray.push (callback(array[i],i,array))
    }
    return newArray
}
// console.log(newMap(arr,(elem,index,array) => (array)))
// console.log(arr.map((elem,index,array) => (elem)))





// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
function newFilter(array,callback){
    let newArray = []
    for(let i = 0; i < array.length; i++){
        if(callback(array[i],i,array) === true){

            newArray.push((array[i]))
        }
    }
    return newArray
}
// console.log(newFilter(words,(elem,index,array) => index > 4))
// console.log(words.filter((elem,index,array) => index > 4))





function newFind(array,callback){
    for(let i = 0; i < array.length; i++){
        if(callback(array[i],i,array) === true){
            return array[i]
        }
    }
    return undefined
}
// console.log(newFind(words,(elem,index,array) => index > 4))
// console.log(words.find((elem,index,array) => index > 4))





// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
function newIndexOf(array, search){
    for(let i = 0; i < array.length; i++){
        if(array[i] === search){
            return i
        }
    }
    return -1
}
// console.log(newIndexOf(beasts, "camel"));
// console.log(beasts.indexOf('bison'));





// const pets = ['cat', 'dog', 'bat'];
function newIncludes(array, search){
    for(let i = 0; i < array.length; i++){
        if(array[i] === search){
            return true
        }
    }
    return false
}
// console.log(newIncludes(pets, "cat"));
// console.log(pets.includes('cat'));





// const array1 = [1, 2, 3, 4];
function newReduce(array,callback,valorInicial){
    let acc = valorInicial || 0
    for(let i = 0; i < array.length; i++){
        acc = callback(acc,array[i],i,array)
    }
    return acc
}
// console.log(newReduce(array1, (acc,elem,index,array) => acc + elem));
// console.log(array1.reduce((a,b) => a + b));
