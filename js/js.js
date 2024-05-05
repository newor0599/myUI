out = document.getElementById("out")
btn = document.getElementById("btn")
btn.onclick=()=>{
	rnd = Math.ceil(Math.random()*10)
	out.innerText=rnd
}
