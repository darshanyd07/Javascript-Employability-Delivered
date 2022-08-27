function rearrangeArray(arr, n)
{
    // Sorting the array elements
    arr.sort();
 
    // To store modified array
    let tempArr = new Array(n);
     
    // Adding numbers from sorted array 
    // to new array accordingly
    let ArrIndex = 0;
 
    // Traverse from begin and end simultaneously
    for (let i = 0, j = n-1; i <= n / 2
         || j > n / 2; i++, j--) {
                                     
        if(ArrIndex < n)
        {
            tempArr[ArrIndex] = arr[i];
            ArrIndex++;
        }
         
        if(ArrIndex < n)
        {
            tempArr[ArrIndex] = arr[j];
            ArrIndex++;
        }
    }
 
    // Modifying original array
    for (let i = 0; i < n; i++)
        arr[i] = tempArr[i];
}
 
// Driver Code
 
let arr =[5, 8, 1, 4, 2, 9, 3, 7, 6]
let n = arr.length;
rearrangeArray(arr, n);
 
for (let i = 0; i < n; i++)
    console.log(arr[i] + " ");
 