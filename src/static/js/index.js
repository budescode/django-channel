function changeCard(e, id){
	var name = e + id
	console.log(name);
	if(name == 'usa'+ id){
		document.querySelector('#usahead'+id).className = "top-active"
		document.querySelector('#ukhead'+id).className = "top-not-active"
		document.querySelector('#eurhead'+id).className = "top-not-active"
		document.querySelector('#auhead'+id).className = "top-not-active"
		document.querySelector('#cadhead'+id).className = "top-not-active"
		document.querySelector('#usaprice' + id).style.display = 'block'
		document.querySelector('#ukprice'+ id).style.display = 'none'
		document.querySelector('#eurprice'+ id).style.display = 'none'
		document.querySelector('#auprice'+ id).style.display = 'none'
		document.querySelector('#cadprice'+ id).style.display = 'none'
	}else if(name== 'uk'+ id){
		document.querySelector('#usahead'+id).className = "top-not-active"
		document.querySelector('#ukhead'+id).className = "top-active"
		document.querySelector('#eurhead'+id).className = "top-not-active"
		document.querySelector('#auhead'+id).className = "top-not-active"
		document.querySelector('#cadhead'+id).className = "top-not-active"

		document.querySelector('#ukprice'+ id).style.display = 'block'
		document.querySelector('#usaprice'+ id).style.display = 'none'
		document.querySelector('#eurprice'+ id).style.display = 'none'
		document.querySelector('#auprice'+ id).style.display = 'none'
		document.querySelector('#cadprice'+ id).style.display = 'none'
	}else if(name== 'eur'+ id){
		document.querySelector('#usahead'+id).className = "top-not-active"
		document.querySelector('#ukhead'+id).className = "top-not-active"
		document.querySelector('#eurhead'+id).className = "top-active"
		document.querySelector('#auhead'+id).className = "top-not-active"
		document.querySelector('#cadhead'+id).className = "top-not-active"

		document.querySelector('#eurprice'+ id).style.display = 'block'
		document.querySelector('#usaprice'+ id).style.display = 'none'
		document.querySelector('#ukprice'+ id).style.display = 'none'
		document.querySelector('#auprice'+ id).style.display = 'none'
		document.querySelector('#cadprice'+ id).style.display = 'none'
	}else if(name== 'au' + id){
		document.querySelector('#usahead'+id).className = "top-not-active"
		document.querySelector('#ukhead'+id).className = "top-not-active"
		document.querySelector('#eurhead'+id).className = "top-not-active"
		document.querySelector('#auhead'+id).className = "top-active"
		document.querySelector('#cadhead'+id).className = "top-not-active"

		document.querySelector('#auprice'+ id).style.display = 'block'
		document.querySelector('#usaprice'+ id).style.display = 'none'
		document.querySelector('#ukprice'+ id).style.display = 'none'
		document.querySelector('#eurprice'+ id).style.display = 'none'
		document.querySelector('#cadprice'+ id).style.display = 'none'
	}else if(name== 'cad' + id){
		document.querySelector('#usahead'+id).className = "top-not-active"
		document.querySelector('#ukhead'+id).className = "top-not-active"
		document.querySelector('#eurhead'+id).className = "top-not-active"
		document.querySelector('#auhead'+id).className = "top-not-active"
		document.querySelector('#cadhead'+id).className = "top-active"

		document.querySelector('#cadprice'+ id).style.display = 'block'
		document.querySelector('#usaprice'+ id).style.display = 'none'
		document.querySelector('#ukprice'+ id).style.display = 'none'
		document.querySelector('#eurprice'+ id).style.display = 'none'
		document.querySelector('#auprice'+ id).style.display = 'none'
	}
}
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
		document.location.reload(true)
		}
		
	})

	}
	// signupconfirmpassword = document.querySelector('#signupconfirmpassword').value
	// console.log(signuppassword, signupconfirmpassword, signupemail)
}
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
		document.location.reload(true)
		}
		
	})

	}



	// console.log("clicked", inputemail, inputname, inputPassword)
}


var openbtn = document.getElementById('openbtn')
var closebtn = document.getElementById('closebtn')
var sidenav = document.getElementById('sidenav')
var nav = document.getElementById('nav')
var list = document.getElementById('list-container')
var list1 = document.getElementById('list1')
var list2 = document.getElementById('list2')
var list3 = document.getElementById('list3')
var list4 = document.getElementById('list4')
var a1 = document.getElementById('a1')
closebtn.style.display = 'none'
openbtn.addEventListener('click', function(){
	nav.style.display = 'block'
	nav.style.marginRight="20px";
	list.style.display = 'block'
	list1.style.display = 'block'
	list2.style.display = 'block'
	list3.style.display = 'block'
	list4.style.display = 'block'
	a1.style.display = 'block'
	sidenav.style.display = 'block'
	sidenav.style.width = '250px'
	closebtn.style.display = 'block'
	openbtn.style.display = 'none'
})
closebtn.addEventListener('click', function(){
	sidenav.style.display = 'none'
	openbtn.style.display = 'block'
	closebtn.style.display = 'none'
})



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}




signIn = document.getElementById('signIn')
loginPage = document.getElementById('modal')
signInPageClosebtn = document.getElementById('signInPageClosebtn')
loginPage.style.display = 'none'
signIn.addEventListener('click', function(){
	loginPage.style.display = 'flex'
})
signInPageClosebtn.addEventListener('click', function(){
	loginPage.style.display = 'none'
})

signUp = document.getElementById('signUp')
signUpPage = document.getElementById('signUpModal')
signUpPageClosebtn = document.getElementById('signUpPageClosebtn')
signUpPage.style.display = 'none'

signUp.addEventListener('click', function(){
	signUpPage.style.display = 'flex'
})
signUpPageClosebtn.addEventListener('click', function(){
	signUpPage.style.display = 'none'
})



window.__lo_site_id = 216230;

	(function() {
		var wa = document.createElement('script'); wa.type = 'text/javascript'; wa.async = true;
		wa.src = 'https://d10lpsik1i8c69.cloudfront.net/w.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(wa, s);
	  })();