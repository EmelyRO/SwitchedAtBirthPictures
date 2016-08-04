var list = ["http://televisionpromos.com/wp-content/uploads/2013/07/Switched-at-Birth-logo-key-art-ABC-Family-TV-series-740x416.jpg", "http://images5.fanpop.com/image/photos/29000000/switched-at-birth-cast-photoshoot-switched-at-birth-29067864-500-375.jpg", "http://images5.fanpop.com/image/photos/29000000/Switched-At-Birth-Cast-photoshoot-switched-at-birth-29068617-500-375.jpg","http://images5.fanpop.com/image/photos/29000000/Switched-At-Birth-Cast-photoshoot-switched-at-birth-29068645-500-375.jpg","http://images5.fanpop.com/image/photos/29000000/Switched-At-Birth-Cast-photoshoot-switched-at-birth-29068625-500-375.jpg","http://mr.comingsoon.it/imgdb/SerieTV/serie/170/foto/10642.jpg","http://mr.comingsoon.it/imgdb/SerieTV/serie/170/foto/10641.jpg","http://images5.fanpop.com/image/photos/29000000/Switched-At-Birth-Cast-photoshoot-switched-at-birth-29068630-500-375.jpg","http://www.wired.com/wp-content/uploads/2015/09/switched-at-birth.jpg"];

var image = document.getElementById("image");
var button = document.getElementById("button");
var index=0;

$(document).ready(function(){
    $("button").click(function(){
    	console.log("click")
		if (list.length == index){
			index = 0; //the array will restart at this point.
		};
  
        $("#myImage").attr("src", list[index++]);
    });
});