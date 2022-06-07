function solution(inputArray) {
    var x=null;
    var y= inputArray.length;
   
   
    var z4=null;
    var z5=null;
    var z2=null;
    var z1=null;
    z4=inputArray[0]*inputArray[1];
    z2=z4;
    for(x=1;x<=y;x++)
        {
            z5=inputArray[x]*inputArray[x+1];
            if(z5>z2)
                {
                    z2=z5;
                }
            
        }
    return z2;
    
}
