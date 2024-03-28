function combinationOfString( str )
{

    let stringCombination= [];
    for ( let i = 0; i < str.length; i++)
    {
        for ( let j = i + 1; j <= str.length; j++)
        {
            stringCombination.push ( str.substring(i , j));
        }
    }

    console.log(stringCombination);

}

combinationOfString("Dog");


