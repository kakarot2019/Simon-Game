var colors = ["red","green","blue","yellow"]; /*different available colors*/
var pattern=[];
var userPattern=[];
var start=false;
var level=0;

$(".btn").click(function(){
    var userChosen = $(this).attr("id");
    userPattern.push(userChosen);
    awaaz(userChosen);
    animatePress(userChosen);
    compare(userPattern.length);
});


function nextSeq(){
    level++;
    var message = "Level "+ level;
    $("h1").text(message);    
    var randNum = Math.floor((Math.random()*4));
    var chosen = colors[randNum];
    pattern.push(chosen);
    console.log(pattern.length);
    $("#"+chosen).fadeOut(100).fadeIn(100);
    awaaz(chosen);
}

function compare(n){
    if(userPattern[n-1]!=pattern[n-1]){
    
        userPattern=[];
        pattern=[];
        start=false;
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },100);
        awaaz("wrong");
        $("h1").html("GAME OVER !!! <br><br>Score = "+ level);
        level=0;
    }
    else{
        if(userPattern.length === pattern.length){
            userPattern=[];
            setTimeout( nextSeq , 500);
        }
    }
}

$(document).keydown(function(){
    if(!start){
        nextSeq();
        start=true;
    }
});

function basic(){

}

function awaaz(chosen){
    var audioLocation = "./sounds/" + chosen +".mp3";
    var sound= new Audio(audioLocation);
    sound.play();
}

function animatePress(clr){
    $("#"+clr).addClass("pressed");
    setTimeout(function(){
        $("#"+clr).removeClass("pressed");
    },100);
}

