/* MIT License

Copyright (c) 2021 dei

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
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
