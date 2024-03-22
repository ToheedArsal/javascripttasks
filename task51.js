

function checkTwoNumber ( number1, number2 )
{
    if ( number2 == 0 )
    {
        throw ("Second Number Is Zero");
    }
    else 
    {
        console.log("Result Is : " , number1 / number2)
    }
}

try
{
    checkTwoNumber(2,2);
}
catch(error)
{
    console.log("Error :" , error);
}