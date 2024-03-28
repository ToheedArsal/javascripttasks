function sortInAlphabaticallyOrder( str )
{
    //str.split("");
    //str.sort();
    //str.join("");
    str = str.split("").sort().join("");
    console.log("Sorted String Is : " , str );
    
}

// console.log(str.charCodeAt(i));
sortInAlphabaticallyOrder("Abdc");