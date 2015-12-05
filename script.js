var feed;
var message;
function main() {
    var riddles = ["Who framed __ the rabbit?", "Star ___", "Marist _____", "Marist College ___ Society"];

     feed = $('[id^=topnews_main_stream], [id^=mostrecent_main_stream], [id^=pagelet_home_stream]');
    message = $('#distracted');


    if (feed.length == 0) {
        message.hide();
    } else if (message.length == 0) {
        message = $('<h1>')
            .attr('id', 'distracted')
            .text("Loading....")
            .css('font-size', '20px')
            .css('font-family', "'Helvetica Neue'sans-serif")
            .css('position', 'relative')
            .css('top', '2px');
        $('[data-location=maincolumn]').append(message);
// window.open("index.html");
var divTag = document.createElement("div");
divTag.setAttribute('id',"divy")

divTag.innerHTML= '<style> position: relative </style>Fill in the blank' + '<br> ' + riddles[Math.floor(Math.random()*riddles.length)] + '</br>' + '<input id="txt" type="text"> <input id ="btn" type="Submit">';

$(message).append(divTag);


     }


    feed.children().hide();
    $('.ticker_stream').hide();
    $('.ego_column').hide();
    $('#pagelet_games_rhc').hide();
    $('#pagelet_trending_tags_and_topics').hide();
    $('#pagelet_canvas_nav_content').hide();


$("#btn").click(function(){
var d = document.getElementById("txt").value;
  if(d==="College"){

  getRidOfThis();
    }
    else if(d==="Wars"){
getRidOfThis();


    }
     else if(d==="Computer"){

   
    getRidOfThis();


     }
         else if(d==="Roger"){
   
getRidOfThis();

    

         }


});
  
} 

function getRidOfThis(){
    window.clearInterval(ap);
    feed.children().show();
    $('.ticker_stream').show();
    $('.ego_column').show();
    $('#pagelet_games_rhc').show();
    $('#pagelet_trending_tags_and_topics').show();
    $('#pagelet_canvas_nav_content').show();
    message.hide();


}
var ap = window.setInterval(main, 100);
setTimeout(getRidOfThis, 8000);



 

