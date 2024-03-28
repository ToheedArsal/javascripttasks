function reverseANumber( number )
{
    var reversedNumber = 0, reminder = 0 ;
    for( let i = 0; number != 0; i++)
    {
        reminder = number % 10;
        reversedNumber = (reversedNumber * 10) + reminder;
        number = Math.floor( number / 10 );
    }
    return reversedNumber;
}


let reversedNumber = reverseANumber(1234);
console.log("Reversed Number Is :", reversedNumber);