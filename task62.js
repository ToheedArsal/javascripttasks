function countVowels( str )
{
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let countOfVowels = 0;
    for ( let i = 0; i < str.length; i++)
    {
        if ( vowels.includes(str[i]))
        {
            countOfVowels = countOfVowels + 1;
        }
    }

    console.log(countOfVowels);
}


countVowels("The quick brown fox");