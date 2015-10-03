window.onload = function(){
	
	//message count
	function messageCount(messageArray){
		console.log(messageArray.length);
		}
	}

	//Listing messages and the context in it
	var messageList= function(messageArray){
		for(var i=0;i<messageArray.length;i++){
			console.log(messageArray(i));
		}
	};

	for(var i=0;i<messageArray.length;i++){
		//this will allow us 
		//to access the properties of the array within the for loop
		var message[i]= {
			date: date[i];
			subject: subject[i];
			sender: sender[i];
			body: body[i];
		};

		var message = document.createElement('div');
		message.className = message[i];
		message.innerHTML = message[i].textContext;
		document.body.appendChild('message');

		var ul = document.createElement('ul');
		ul.Id = 'ul';
		ul.innerHTML = message[i];
		

	}



};