'use strict';

//Függvény neve: `removeDuplicatesFromArray`
//Írj egy függvénykifejezést, amely a paraméterként megadott tömbből eltávolítja a duplikált elemeket!
//A függvény visszatérési értéke a duplikált elemektől mentes új tömb.

const removeDuplicatesFromArray = (arr) => {
    const arr2 = [...new Set(arr)]; 
    return arr2
};



export default removeDuplicatesFromArray
