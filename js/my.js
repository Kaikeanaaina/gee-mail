window.onload = function(){
	
	var message = document.getElementsByClassName('message');
		message.addEventListener('mouseover',function(){
			this.style.backgroundColor = '#FFA1A1';
		})
		
		message.addEventListener('mouseout',function(){
			this.style.backgroundColor = 'inherit';
		})
		
};