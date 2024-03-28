function upperCaseFirstWordEachLetter( str )
{
    for ( let i = 0; i < str.length; i++)
    {
        if ( i == 0 )
        {
           str = str.charAt(i).toUpperCase() + str.substring (i + 1, str.length);
        }
        else if ( str[i] == " ")
        {
            str = str.substring(0, i + 1) + str.charAt(i+1).toUpperCase() + str.substring (i + 2, str.length);
        }
    }
    console.log( str );
}


upperCaseFirstWordEachLetter("the brown fox");