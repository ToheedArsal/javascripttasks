function valueAtIndex(arr, index) {
  if (index >= arr.length) {
    throw new RangeError("Invalid Index");
  } else {
    console.log("Element Is :" + arr[index]);
  }
}

const arr = [1, 2, 3];



try
{
    valueAtIndex(arr, 4);
}
catch ( error )
{
    if ( error instanceof RangeError)
    {
        console.log(error.message);
    }
}
