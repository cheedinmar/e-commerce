//capitalize every word in a string 'Once upon a time in new york'


function ToCapitalize(input){
   
    //split the input string using spaces
    let arrayOfString = input.split(' ');

    //loop over the arrayOf String
    for(i=0; i<arrayOfString.length; i++){
        //inside the loop exttract the first letter of all the word and save the result in a variable'
        let firstChar = arrayOfString[i].charAt(0);

        //make the first letter of the firstchar uppercase
     var firstCharUpperCase = firstChar.toUpperCase();

        //remove the first letter of every word and replace it with the one we made uppercase
        arrayOfString[i] = firstCharUpperCase + arrayOfString[i].slice(1);
    }

}
const input = "Once upon a time in new york"
var output =  ToCapitalize(input)

console.log(output);