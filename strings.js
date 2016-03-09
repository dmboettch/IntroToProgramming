/**
 * Created by Deanne on 2/9/2016.
 */

var a = upperCaseFirstLetters("something to uppercase"); //"Something To Uppercase"
var b = upperCaseFirstLetters("output");  //"Output"
var c = upperCaseFirstLetters("nathan t white");  //"Nathan T White"
var d = upperCaseFirstLetters("         hello there     ");  //"Hello There"

//This is a named function and can be "hoisted" to anywhere in the code
function upperCaseFirstLetters(aStr) {
    var cleaned = aStr.trim();
    var words = cleaned.split(" ");
    var output = [];

    //Below is an example of a JavaScript For Loop
    words.forEach(function(word){
        var uppercased = word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
        output.push(uppercased);
    })

    //for(var i =0; i < words.length; i++){
    //    var word = words[i];
    //    var uppercased = word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
    //    output.push(uppercased);
    //}

    //console.log([cleaned, words].join("\n"));
    //console.log(output.join(" "));
    return output.join(" ");
};
    console.log([a,b,c,d].join("\n"));

//Below declares the function as a variable
//var upperCaseFirstLetters = function (aStr){
//    var cleaned = aStr.trim();
//    var words = cleaned.split(" ");
//};
