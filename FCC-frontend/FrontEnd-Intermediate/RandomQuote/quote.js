$(document).ready(function(){
    $("#getMessage").on("click",function(){
        $.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/random", function(a) {
         
       console.log(a);
            $("#panel-content").html("<p id='panel-content'>"+ a.quote +"</p>"+ "<p id ='author'>"+ a.author +"</p>")
          });
    });
   });




   function twitter () {
var phrase = document.getElementById('panel-content').innerText;
var author = document.getElementById('author').innerText;
var tweetUrl = 'https://twitter.com/share?text=' +
encodeURIComponent(phrase) +
encodeURIComponent(author) +
'.' +
'&url=' +
'http://www.freecodecamp.com';

window.open(tweetUrl);
}