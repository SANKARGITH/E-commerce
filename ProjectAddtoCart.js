var subnavv = document.querySelector('.subnav')
var allbtn = document.querySelector('.iconallimg')
var addss = document.querySelector('.addspage')
var addsimg =document.querySelector('.addimg img')
var allimg = document.querySelector('#allicon')
var alllist = document.querySelector('#listitemsall')
var add = document.querySelector('.adds')
var productdisplay = document.querySelectorAll('.products')
allbtn.addEventListener('click',()=>{
	if(subnavv.style.display == ""){
	subnavv.style.display ="block"
	addss.style.width = "80%"
	addsimg.style.marginLeft ="40px"
	addss.style.float ="right"
	allimg.src ="https://icon-library.com/images/cancel-icon-transparent/cancel-icon-transparent-3.jpg"	
	alllist.innerHTML = "Clear"	
	}else{
		subnavv.style.display =""
        addss.style.width = "100%"
        addsimg.style.marginLeft ="80px"
        allimg.src ="https://icon-library.com/images/white-menu-icon/white-menu-icon-4.jpg"
        alllist.innerHTML ="All"
	}
})

// -------------------------------------subnav---------------------------
var vegitem= document.getElementById('vegitems')
var secondul1 =document.getElementsByClassName('second-ul')[0]
vegitem.addEventListener('click',()=>{
	if(secondul1.style.display ==""){
	secondul1.style.display ="block"
     }else{
     	secondul1.style.display =""
     }
}) 
var leafs= document.getElementById('leafveg')
var secondul2 =document.getElementsByClassName('second-ul')[1]
leafs.addEventListener('click',()=>{
	if(secondul2.style.display ==""){
	secondul2.style.display ="block"
     }else{
     	secondul2.style.display =""
     }
})
var nonvegs= document.getElementById('nonveg')
var secondul3 =document.getElementsByClassName('second-ul')[2]
nonvegs.addEventListener('click',()=>{
	if(secondul3.style.display ==""){
	secondul3.style.display ="block"
     }else{
     	secondul3.style.display =""
     }
}) 
var ricepacket= document.getElementById('ricepack')
var secondul4 =document.getElementsByClassName('second-ul')[3]
ricepacket.addEventListener('click',()=>{
	if(secondul4.style.display ==""){
	secondul4.style.display ="block"
     }else{
     	secondul4.style.display =""
     }
})
var  otherstuff= document.getElementById('others')
var secondul5 =document.getElementsByClassName('second-ul')[4]
otherstuff.addEventListener('click',()=>{
	if(secondul5.style.display ==""){
	secondul5.style.display ="block"
     }else{
     	secondul5.style.display =""
     }
})

function productdiv(x){
      var e=Number(x)
      for(var i=0;i<=productdisplay.length;i++){
      	if(e==i){
      		productdisplay[i].style.display ="block"
      		addss.style.display ='none'
      		add.style.display = "none"
      	}
      	else{
      		productdisplay[i].style.display ="none"
      	}
      }
}


//--------------------------------cart----------------------------

var cartdisplay = document.querySelector('.cartimgclk')
var cartpageshow = document.querySelector('.cartcls')
cartdisplay.addEventListener('click',()=>{
	if(cartpageshow.style.display ==""){
	cartpageshow.style.display ="block"
	cartpageshow.style.zIndex ="2"
     }else{
     	cartpageshow.style.display =""
     }
})

//-----------------------------------Add to cart page---------------
const btn = document.querySelectorAll('.cartbtn')
const displayitems = document.querySelector('.cartitems')
var itemcount = document.querySelector('.count')
var Count =0
var total = document.querySelector('.totalamount')
var totalprice = 0;
var success= document.querySelector('.placeorder')
btn.forEach(btn=>{
	btn.addEventListener('click',()=>{
		var itemget = btn.parentNode
		var product ={
			img:itemget.getElementsByClassName("productimg")[0].getAttribute('src'),
			name:itemget.getElementsByClassName("produtname")[0].innerHTML,
			price:itemget.getElementsByClassName("productprice")[0].innerHTML,
			qty:1
		};
		btn.disabled= true
		if(btn.disabled == true){
			btn.style.background = "green"
		}
		++Count;
		itemcount.innerHTML = Count
		totalprice+=Number(product.price)
		total.innerHTML = totalprice
		displayitems.innerHTML+=`<div class="maindiv">
            <div class="addcartimg"><img src="${product.img}"></div>
            <div class="addname">${product.name}</div>
            <div class="addprice">${product.price}</div>
            <div class="qtys"><button class="incbtn">+</button>
            <span class="productqty">${product.qty}</span>
            <button class="decbtn">-</button></div>
            <div class="addpriceqty">${product.price}</div>
            <div><button class="cancel"> X</button></div>
		 </div>
		 `
		 var cartdiv = document.querySelectorAll('.maindiv')
		 cartdiv.forEach(cartdiv=>{
		 	var pricebeforeinc =cartdiv.getElementsByClassName('addprice')[0].innerHTML
		 	var incrbtn =cartdiv.getElementsByClassName('incbtn')[0]
		 	var decrbtn =cartdiv.getElementsByClassName('decbtn')[0]
		 	var qnty =cartdiv.getElementsByClassName('productqty')[0].innerHTML
		 	var clearx =cartdiv.querySelectorAll('.cancel')
            var incrprice = cartdiv.getElementsByClassName('addpriceqty')[0]
            var clear = document.querySelector('.clearbtn')

		 	incrbtn.addEventListener('click',()=>{
                ++qnty;
                cartdiv.getElementsByClassName('productqty')[0].innerHTML = qnty
                incrprice.innerHTML = qnty*pricebeforeinc
                totalprice+=Number(pricebeforeinc)
		        total.innerHTML = totalprice
		 	})

		 	decrbtn.addEventListener('click',()=>{
		 		--qnty;
		 		if(qnty <= 0){
		 			qnty =1
		 			cartdiv.remove()
		 			--Count
		 			itemcount.innerHTML = Count
		 			btn.disabled= false
		 			if(btn.disabled == false){
		 		  	btn.style.background ="orangered"
		 		  }
		 		}
		 		cartdiv.getElementsByClassName('productqty')[0].innerHTML = qnty
		 		incrprice.innerHTML = qnty*pricebeforeinc
		 		totalprice-=Number(pricebeforeinc)
		        total.innerHTML = totalprice

		 	})
		 	clearx.forEach(clearx=>{
		 	clearx.addEventListener('click',()=>{
		 		totalprice-=Number(cartdiv.getElementsByClassName('addpriceqty')[0].innerHTML)
		 		total.innerHTML =totalprice
		 		--Count
		 		  itemcount.innerHTML = Count
		 		  cartdiv.remove()
		 		  btn.disabled= false
		 		  	if(btn.disabled == false){
		 		  	btn.style.background ="orangered"
		 		  }
		 	})
		 })
		 	clear.addEventListener('click',()=>{
		 	cartdiv.remove()
		 	Count =0
		 	itemcount.innerHTML =Count
		 	totalprice =0
            total.innerHTML =totalprice
            btn.disabled = false
            if(btn.disabled == false){
		 	    btn.style.background ="orangered"
		     }
		 })

		 })
		 success.addEventListener('click',()=>{
		 	if(Count == 0){
		 		alert('Please add your items into the cart')
		 	}else{
                 alert('your order has been placed successfully Thank you for using Fresh Mart')
		 	}
		 })
	})
})
/*--------------------------------wishlist selectors-------------------------------*/
var wishlist = document.querySelectorAll('.wishlistimg')
wishlist.forEach(wishlist=>{
	wishlist.addEventListener('click',()=>{
		if(wishlist.src == "https://png.pngitem.com/pimgs/s/529-5299573_heart-white-png-transparent-png.png"){
			wishlist.src ="https://icon-library.com/images/heart-icon-svg/heart-icon-svg-14.jpg"
		}else{
			wishlist.src ="https://png.pngitem.com/pimgs/s/529-5299573_heart-white-png-transparent-png.png"
		}
	})
})
/*------------------------------------------function home---------------------*/
function start(){
	subnavv.style.display =""
	addss.style.display = "block"
	add.style.display ="block"
    addss.style.width = "100%"
    addsimg.style.marginLeft ="80px"
    allimg.src ="https://icon-library.com/images/white-menu-icon/white-menu-icon-4.jpg"
    alllist.innerHTML ="All"
    // if(productdisplay.style.display =="block"){
    // 	productdisplay.style.display = ""
    // }
}
/*  -------------------------------------log in form dispaly--------------------*/

var profiled = document.querySelector('.Profile')
var profiledisplay = document.querySelector('.profiledata')
profiled.addEventListener('click',()=>{
	if(profiledisplay.style.display ==""){
	profiledisplay.style.display ="flex"
     }else{
     	profiledisplay.style.display =""
     }
})

/*o-----------------------o---------------login/signup pages-------------------*/
