(function(){
	
	// takes today's date
	var timeElapsed = Date.now();
	
	var date1 = new Date('10/20/2017');
	var date2 = new Date(timeElapsed);
	
	// calculates delta
	var diffTime = Math.abs(date2 - date1);
	var diffDays = Math.ceil(diffTime / (1000 * 3600 * 24));
	// var diffDays = (diffDays);

	// console.log(diffDays);
    document.getElementById("time").innerHTML = diffDays;
	
	// timeout 60 secs
	setTimeout(arguments.callee, 60000);

})();