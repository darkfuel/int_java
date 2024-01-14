precio = 400000

precioSpan = document.querySelector(".precio-inicial")
precioSpan.innerHTML = precio

//totales y cantidades
total = document.querySelector(".valor-total")
cant = document.querySelector(".cantidad")
act = cant.innerHTML
tot = total.innerHTML

//variable botones
const btnsum = document.querySelector("#bmax")
const btnmin = document.querySelector("#bmin")

//suma
btnsum.addEventListener('click',function(){
cant.innerHTML = ++act
total.innerHTML = precio * +act
})

//resta
btnmin.addEventListener('click',function(){
    cant.innerHTML = --act
    total.innerHTML = precio * +act
})




