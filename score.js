let count_home = 0 
let count_guest = 0 

let homebox = document.getElementById("home-box")
let guestbox = document.getElementById("guest-box")

//for home box
function fun_home_one(){
	count_home += 1
	homebox.innerHTML = count_home
	
	}
function fun_home_two(){
	count_home += 2
	homebox.innerHTML = count_home
	
	}
function fun_home_three(){
	count_home += 3
	homebox.innerHTML = count_home
	
	}	
	
	
	
//for guest box 	
function fun_guest_one(){
	count_guest += 1
	guestbox.innerHTML = count_guest
	
	}
function fun_guest_two(){
	count_guest += 2
	guestbox.innerHTML = count_guest
	
	}
function fun_guest_three(){
	count_guest += 3
	guestbox.innerHTML = count_guest
	
	}		
