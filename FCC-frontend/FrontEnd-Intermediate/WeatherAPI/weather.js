
            
 var api = "https://fcc-weather-api.glitch.me/api/current?";
 var lat,lon;
 var tempUnit = 'C';


           
                $(document).ready(function(e){
                    if (navigator.geolocation) {
                 navigator.geolocation.getCurrentPosition(function (position) {
                var lat = "lat=" + position.coords.latitude;
                 var lon = "lon=" + position.coords.longitude;
                   getWeather(lat, lon);
                   console.log( position.coords.latitude);
                   console.log(position.coords.longitude);
               });
               } else {
              console.log("Geolocation is not supported by this browser.");
              }         
                    

                    $("button").click(function(){
            $(this).text($(this).text() == 'F' ? 'C' : 'F');
        });
                });
        
        function getWeather(lat,lon){
            var urlString =api + lat + "&" +lon;
            $.ajax({
                url:urlString,success:function(result){
                     $("#city").text(result.name);
                    // $("#country").text(result.sys.country);
                     currentTempInCelsius = Math.round(result.main.temp * 10) / 10;
                     $("#temp").text(currentTempInCelsius + " C " + String.fromCharCode(176));
                    // $("#tempunit").text(tempUnit);
                    // $("#desc").text(result.weather[0].main);
                    // IconGen(result.weather[0].main);
                     // console.log(result.name,result.sys.country,result.weather[0].main);
                      choseIcon( result.weather[0].main);
                      
                }
            });
        }
        

        function choseIcon(res){
            console.log(res);
            //  var res = res.toLowerCase()
             switch(res){
                 case 'Thunderstorm':
                 $("#jojo").html("<p id='jojo'><img src='https://image.flaticon.com/icons/svg/17/17785.svg'></p>");
                 break;

                 case 'Clear':
                 $("#jojo").html("<p id='jojo'><img src='http://www.freeiconspng.com/uploads/cloud-outline-icon-9.png'></p>");
                 break;
                
                 case 'Snow':
                 $("#jojo").html("<p id='jojo'><img src='https://d30y9cdsu7xlg0.cloudfront.net/png/3777-200.png'></p>");
                 break;

                 case 'Clouds':
                 $("#jojo").html("<p id='jojo'><img src='https://d30y9cdsu7xlg0.cloudfront.net/png/41906-200.png'></p>");
                 break;

                 case 'Drizzle':
                 $("#jojo").html("<p id='jojo'><img src='https://d30y9cdsu7xlg0.cloudfront.net/png/12058-200.png'></p>");
                 break;

                 case 'Rain':
                 $("#jojo").html("<p id='jojo'><img href='http://simpleicon.com/wp-content/uploads/rain.png'></p>");
                 break;
              
             }
         

        }
          
                
               