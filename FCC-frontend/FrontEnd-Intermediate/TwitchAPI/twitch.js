var users = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff", "comster404"];

$(document).ready(function(){
    for(var i=0;i<users.length;i++){
      $.ajax({
          type:'GET',
          url:' https://wind-bow.gomix.me/twitch-api/users/'+ users[i],
          headers: {

          },
          success:(function(data){
              var html = '';
               console.users(users);
              if(data.status == 422 ){
                html += '<div class="twitchDiv nullClass">';
                html += '<h5 class="displayNameNull">' + data.message + '</h5>';
                html += '</div>';
                $('#twitchBox').append(html);
              }
              else{
                $.ajax({
                    type: 'GET',
                    url: data._links.channel,
                    headers: {
                      'Client-ID': '7plekxgs8xyo1fbtqglm8ngqf95z4ea'
                    },
                    success: (channelData) => { 
                      var name   = channelData.display_name; 
                      var logo   = channelData.logo;
                      var url    = channelData.url;
                      var online = channelData.status;
                      var stat   = '';
                        if (logo == null) {
                          logo = "http://i1361.photobucket.com/albums/r662/bonham000/Twitch%20API/text4142_zpsyrkxdf4z.png";
                        }
                        if (online == null) {
                          online = "This user is currently offline";
                          stat   = "offline";
                        }
                        else {
                          online = "This user is currently streaming";
                          stat   = "online";
                        }
      
                        // console.log(channelData);
                        console.log(name, logo, url, online);
      
                        html += '<div class="twitchDiv ' +  stat + '">';
                        html += '<a target=/"_blank/" href="' + url + '"><img class="logo" src="' + logo + '"/></a>';
                        html += '<h5 class="displayName">' + name + '</h5>';
                        html += '<p class="userStatus">' + online + '</p>';
                        html += '</div>';
      
                        $('#twitchBox').append(html);
                     }
                });
              }
          })
      })
    }
})