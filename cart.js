var url_string = window.location.href
var url = new URL(url_string);
var i = url.searchParams.get("index");

firebase.database().ref().get()
.then((snapshot)=>{
	var y = snapshot.val()
	
	var food = document.getElementById("name")
	var price =  document.getElementById("price")
	var hotel = document.getElementById("hotel")
	var image = document.getElementById("image")
		document.getElementById("itemName").innerHTML = y[i].name
		document.getElementById("itemPrice").innerHTML = y[i].price
		document.getElementById("itemHotel").innerHTML = y[i].hotel
	console.log(y[i])
		
	
	food.value = y[i].name
	price.value= y[i].price
	hotel.value = y[i].hotel
	image.src = y[i].image
})
	
var x = 0;
function submitted(){
	x = 1;
}

function loaded(){
	if(x == 1){
		alert("form submitted successfuly")
	}
}
	
