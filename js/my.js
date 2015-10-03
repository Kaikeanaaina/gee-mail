window.onload = function(){
	
	//need to find a way to count the emails and display it
	//i assume we will be counting an array of messages
	//there will need to be a count that can keep up with the input
	var counter = document.getElementById('counter');
	counter.InnerHTML=messageCount;
	document.body.appendChild(counter);

	//below here is an example of the array of messages
	//i used strings for now
	var count = ['kai','noa','people','love'];
	//i used a plus one in the for loop 
	//because the array counts from zero
	var messageCount = function(arrMessage){
		for(var i=0;i< arrMessage.length;i++){
			console.log((i)+1);
		}
	};
	//called the function
	messageCount(count);


	var main_mes = document.getElementById('main_mes');
		//this will change the background color of a message when it's mouseover
	main_mes.addEventListener('mouseover',function(){
		this.style.backgroundColor = '#FFA1A1';
		this.style.color = '#0033FF';
	});
	//this will change back the message to the regular color when mouseout
	main_mes.addEventListener('mouseout',function(){
		this.style.backgroundColor = 'inherit';
		this.style.color = 'inherit';
	});
	
	// hide the sub_mes
	main_mes.querySelectorAll('ul')[0].style.display = 'none';
	//click it
	main_mes.addEventListener('click', function(){
		//show the sub_mes
		this.querySelectorAll('ul')[0].style.display = 'block';

	});
	
	//this will call on the sub_mes classes
	var messageStuff = document.getElementsByClassName('sub_mes')[0];

	//mouseout out of a sub_mes it will dissapear from display
	//**** QUESTION ***** is mouseout the right term to use for something
	//that has been click to return to it's normal state?
	messageStuff.addEventListener('mouseout', function(){
			this.querySelectorAll('ul')[0].style.display = 'none';
		});
	//highlighted sub_mes when mouseover
	//this is after the message is clicked open
	messageStuff.addEventListener('mouseover',function(){
		this.style.backgroundColor = '#FFA1A1';
	})
	//return inherit when mouseout
	messageStuff.addEventListener('mouseout',function(){
		this.style.backgroundColor = 'inherit';
	})





};