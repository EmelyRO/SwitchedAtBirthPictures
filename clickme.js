var list = ["http://cimg.tvgcdn.net/i/r/2016/03/12/88a393f3-bc24-47e1-ae50-6f424b7983e4/resize/900x600/52a6bf5ab4da4b0d3bb27ef708fc18d7/160311-news-switched-at-birth.jpg" , "http://images5.fanpop.com/image/photos/29000000/switched-at-birth-cast-photoshoot-switched-at-birth-29067864-500-375.jpg", "http://images5.fanpop.com/image/photos/29000000/Switched-At-Birth-Cast-photoshoot-switched-at-birth-29068617-500-375.jpg","http://images5.fanpop.com/image/photos/29000000/Switched-At-Birth-Cast-photoshoot-switched-at-birth-29068645-500-375.jpg","http://images5.fanpop.com/image/photos/29000000/Switched-At-Birth-Cast-photoshoot-switched-at-birth-29068625-500-375.jpg","http://mr.comingsoon.it/imgdb/SerieTV/serie/170/foto/10642.jpg","http://mr.comingsoon.it/imgdb/SerieTV/serie/170/foto/10641.jpg","http://images5.fanpop.com/image/photos/29000000/Switched-At-Birth-Cast-photoshoot-switched-at-birth-29068630-500-375.jpg","http://www.wired.com/wp-content/uploads/2015/09/switched-at-birth.jpg"];

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