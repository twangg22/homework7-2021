var video = document.querySelector("#player1"); //assign the video variable

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume/0.01;
	//console.log(video.currentTime);
});

document.querySelector("#slider").addEventListener("input", function() {
		document.querySelector("#volume").innerHTML = this.value;
		video.volume = this.value/100;
});	


document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	//console.log("Old video speed is "+ video.playbackRate);
	video.playbackRate = 0.95*video.playbackRate;
	console.log("New video speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	//console.log("Old video speed is "+ video.playbackRate);
	video.playbackRate = video.playbackRate/0.95;
	console.log("New video speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function(){
	video.currentTime = video.currentTime+15
	if (video.ended == true) {
		video.play()
		console.log(video.currentTime);
	}
	else{
		console.log(video.currentTime);	
	}
});

document.querySelector("#mute").addEventListener("click", function(){
	if (video.muted == true) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute"

	}
	else{
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute"

	} 
})

document.querySelector("#vintage").addEventListener("click", function(){
	document.getElementById("player1").classList.remove("video");
	document.getElementById("player1").classList.add("oldSchool");
//	var elements = document.querySelector("#video")
//	elements[0].className = "oldSchool";
});

document.querySelector("#orig").addEventListener("click", function(){
	document.getElementById("player1").classList.remove("oldSchool");
	document.getElementById("player1").classList.add("video");
});

