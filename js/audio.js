as = function(status) {
	
	if(audioToContinue.stopIt || stopIt) { return; }
	
	try {
	
		if(status == 4) {
		
			audioToContinue.play();
		
		}
	
	} catch(e) {}

}

play = function(file, loop) {

	if(loop) {
	
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.appVersion) ) {
		
			var root = document.location.href.match(/^.*\//);
			var url = root + "audio/" + file;				
			var audio = new Media(url, function () {}, function (err) {}, as);
			audio.stopIt = false;
			audioToContinue = audio;
			sounds.push(audioToContinue);
		
		} else {
			
			var url = "audio/" + file;
			
			var audio = document.createElement("AUDIO");	
			audio.src = url;
			audio.loop = true;
		
		}
	
	} else {
	
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.appVersion) ) {
		
			var root = document.location.href.match(/^.*\//);
			var url = root + "audio/" + file;				
			var audio = new Media(url, function () {}, function (err) {});
			this.audioToContinue = audio;
			sounds.push(this.audioToContinue);
		
		} else {
			
			var url = "audio/" + file;
			
			var audio = document.createElement("AUDIO");	
			audio.src = url;
		
		}
	
	}
	
	audio.play();	
	return(audio);
}

stopPlaying = function(audio) {

		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.appVersion) ) {
		
			audio.stopIt = true;
			audio.stop();
			audio.release();		
			
		} else {
		
			audio.pause();
			audio.src = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAVFYAAFRWAAABAAgAZGF0YQAAAAA=";
		
		}
}