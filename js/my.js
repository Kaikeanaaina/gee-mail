window.onload = function(){
	

	var main_mes = document.getElementsByClassName('main_mes');
		//this will change the background color of a message when it's mouseover
		main_mes.addEventListener('mouseover',function(){
			this.style.backgroundColor = '#FFA1A1';
		})
		//this will change back the message to the regular color when mouseout
		main_mes.addEventListener('mouseout',function(){
			this.style.backgroundColor = 'inherit';
		})


		//this will call on the sub_mes classes
	var messageStuff = document.getElementsByClassName('sub_mes')[0];
	
	//this will hide the sub_mes. by setting display to none
	messageStuff.querySelectorAll('ul')[0].style.display = 'none';

	//when click it will display the sub_mes by setting display to block
	messageStuff.addEventListener('click', function(){
		//show the sub_mes
		this.querySelectorAll('ul')[0].style.display = 'block';

	});

	//when mouseout out of a sub_mes it will dissapear from display
	//**** QUESTION ***** is mouseout the right term to use for something
	//that has been click to return to it's normal state?
	messageStuff.addEventListener('mouseout', function(){
			this.querySelectorAll('ul')[0].style.display = 'none';
		});

	//now i want the sub_mes to be highlighted when mouseover
	//this is after the message is open
	messageStuff.addEventListener('mouseover',function(){
		this.style.backgroundColor = 'FFA1A1';
	})
	//returning it back to inherit
	messageStuff.addEventListener('mouseout',function(){
		this.style.backgroundColor = 'inherit';
	})

	



};