function SignInFunction(){
	url = '/usersaccounts/loginapi/'
	var token = document.querySelector("input[name=csrfmiddlewaretoken]").value	
	signinemail = document.querySelector('#signinemail').value
	signinpassword = document.querySelector('#signinpassword').value
	console.log(token, signinemail, signinpassword) 
	document.querySelector('#signinbutton').style.display = 'none'
	document.querySelector('#signinhead1').style.display = 'block'
	document.querySelector('#signinerrordiv').style.display = 'none'
	if(signinemail == '' || signinemail == null){
		head = document.querySelector('#signinerrordiv')
		head.style.display = 'block'
		head.innerHTML = "input email"
	} else if(signinpassword == '' || signinpassword == null){
		head = document.querySelector('#signinerrordiv')
		head.style.display = 'block'
		head.innerHTML = "input password"
	} else{
		console.log('yeahh', url)
	let  formData = new FormData()
	formData.append('email', signinemail)
	formData.append('password', signinpassword)	
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
			head = document.querySelector('#signinerrordiv')
			head.style.display = 'block'
			head.innerHTML = data.error
			head.style.color = 'red'
			document.querySelector('#signinbutton').style.display = 'block'
			document.querySelector('#signinhead1').style.display = 'none'
		}
		else if(data.response){
			// document.querySelector('#registerhead').style.display = 'block'
			// document.querySelector('#signinbutton').style.display = 'none'
		window.location.href = '/'
		}
		
	})

	}
	// signupconfirmpassword = document.querySelector('#signupconfirmpassword').value
	// console.log(signuppassword, signupconfirmpassword, signupemail)
}