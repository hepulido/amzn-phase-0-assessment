// 1. Write your functions here



let waitList = [" "," Carlos", " Maria", " John", " Tom"];



function line(arr){
    let currentlyLine = "The line is currently: ";
    for (let i = 1; i < arr.length; i++){
        currentlyLine = currentlyLine +" "+ arr.indexOf(arr[i])+ "." + arr[i] ;
    }
    if (arr.length === 0 ){
    console.log("The line is currently empty.")
    }
;
return currentlyLine;
}
console.log(line(waitList));
 
  console.log("------------------------------")

function takeANumber(arr, str){
arr.push(str)
console.log ("Welcome, "+ str +". You are number " + arr.indexOf(str)+" in line." )
}
 
 takeANumber(waitList, "David")

console.log("------------------------------")


function nowServing (arr){
let currentlyServing = waitList[1]
    for (let i = 1; i < arr.length; i++){
    if ( arr[1] === arr[1]){
        arr.shift(); 
    }
    else if (arr.length === 0 ){
        console.log("There is nobody waiting to be served!")
    }
    }

return "Currently serving "+ currentlyServing +"."
}
      
console.log(nowServing(waitList))
console.log(waitList)




// 2. Example Usage

// const katzDeli = []

// takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
// takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
// takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.
 
// line(katzDeli) //=> "The line is currently:1. Ada 2. Grace 3. Kent"

// nowServing(katzDeli) //=> "Currently serving Ada."

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

// takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

// nowServing(katzDeli) //=> "Currently serving Grace."

// line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"