out = document.getElementById("out")
btn = document.getElementById("btn")
btn.onclick=()=>{
    max_num = parseInt(document.querySelector("input.max.out").value)
    min_num = parseInt(document.querySelector("input.min.out").value)
    rnd = Math.ceil(Math.random() * (max_num - min_num)) + min_num
    out.innerText=rnd
}
