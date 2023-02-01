//Write a JavaScript function to Uncapitalize the first letter of each word of a string
function unCapitalize_Words(str)
{ 
  return str.replace(/\w\S*/g, 
    function(txt)
       {
          return txt.charAt(0).toLowerCase() + txt.substr(1).toLowerCase();});
}

console.log(unCapitalize_Words('Js String Exercises'));
