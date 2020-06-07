function signupFunction(){
	var token = document.querySelector("input[name=csrfmiddlewaretoken]").value
	url = '/usersaccounts/registeruser/'
	inputemail = document.querySelector('#signupemail').value
	inputPassword = document.querySelector('#signuppassword').value
	inputconfirmPassword = document.querySelector('#signupconfirmpassword').value
	document.querySelector('#registerhead').style.display = 'none'
	document.querySelector('#registerhead1').style.display = 'block'
	document.querySelector('#errordiv').style.display = 'none'
	if(inputPassword != inputconfirmPassword){
		head = document.querySelector('#errordiv')
		head.style.display = 'block'
		head.innerHTML = "password don't match"
	document.querySelector('#registerhead').style.display = 'block'
	document.querySelector('#registerhead1').style.display = 'none'
	}else{
	
	let  formData = new FormData()
	formData.append('email', inputemail)
	formData.append('password', inputPassword)
	
	fetch(url,
	{
	body: new URLSearchParams(formData),
	method: 'post',
	headers:{
	'X-CSRFTOKEN': token
	}
	}).then(res => res.json()).then(function(data) {
		console.log(data)
		if (data.error){
			console.log('error')
			head = document.querySelector('#errordiv')
			head.style.display = 'block'
			head.innerHTML = data.error
			head.style.color = 'red'
			document.querySelector('#registerhead').style.display = 'block'
			document.querySelector('#registerhead1').style.display = 'none'
		}
		else if(data.response){
			document.querySelector('#registerhead').style.display = 'block'
			document.querySelector('#registerhead1').style.display = 'none'
		window.location.href = '/'
		}
		
	})

	}



	// console.log("clicked", inputemail, inputname, inputPassword)
}