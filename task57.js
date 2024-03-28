function stringIsPalindromeOrNot( str )
{
    let flag = true;
    for( let i=0, j = str.length - 1; i <= Math.floor( str.length /2 ) ; i++ , j-- )
    {
            if ( str[i] != str [j])
            {
                flag = false;
                break;
            }
    }   
    return flag;
}



if ( stringIsPalindromeOrNot("maa"))
{
    console.log("String Is A Palindrome");
}
else
{
    console.log("String Is Not A Palindrome");
}
