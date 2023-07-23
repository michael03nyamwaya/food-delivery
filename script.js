


firebase.database().ref().get()
.then((snapshot)=>{
	var data = snapshot.val()
	var items = data
	
	for(i =0; i < items.length; i++){
	
	function getItems(item){
	//getting elements from DOM
	var cont = document.getElementById("container");
	
	//creating elements
	var card = document.createElement("div");
	var foodName= document.createElement("p");
	var Price = document.createElement("p");
	var Hotel = document.createElement("p")
	var image = document.createElement("img")
	var sbtn = document.createElement("button")
	var itemLink = document.createElement("a")

		
	//editing element attributes
	card.setAttribute("id","card");
	foodName.setAttribute("id","title")
	Price.setAttribute("id", "price")
	Hotel.setAttribute("id", "hotel")
	image.setAttribute("id", "image")
	sbtn.setAttribute("id", "sbtn")
	itemLink.setAttribute("href","cart.html?index="+items[i].index)
	
	
	foodName.innerHTML= "Meal: "+items[i].name
	Price.innerHTML="price: "+items[i].price
	Hotel.innerHTML = "from: "+items[i].hotel
	image.src = items[i].image
	sbtn.innerHTML = "Buy"
		
	
	//appending elements after they've been created
	cont.appendChild(card)
	card.appendChild(image)
	card.appendChild(foodName)
	card.appendChild(Price)
	card.appendChild(Hotel)
	card.appendChild(itemLink)
	itemLink.appendChild(sbtn)
	
	}
		getItems()
	}
	//Submit order

	
})
