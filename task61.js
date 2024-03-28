function longestString ( str )
{
    
    let highestLength = 0, currentLength = 0 ;
    let highestLengthStr;
    for ( let i = 0; i < str.length; i++)
    {
        if ( str[i] == " ")
        {
            if ( currentLength > highestLength)
            {
                highestLength = currentLength ;
                highestLengthStr = str.substring( i - currentLength-1 , i)
                current = 0;
            }
        }
        else
        {
            currentLength++;
        }
    }

    console.log(highestLengthStr);

}


longestString('Web Development Tutorial');