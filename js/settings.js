// Show Menu
toggle_btn = document.getElementById("setting-btn")
setting_menu = document.getElementById("settings-menu")
showMenu = false
toggle_btn.onclick=()=>{
    showMenu = !showMenu
    if (showMenu){
	setting_menu.style.transform = "translateY(0px)"
    }else{
	setting_menu.style.transform = "translateY(100vh)"
    }
}
// Set max
max_add = document.querySelector(".setting.max.add")
max_sub = document.querySelector(".setting.max.sub")

// Set min
min_add = document.querySelector(".setting.min.add")
min_sub = document.querySelector(".setting.min.sub")


max_add.onclick = () => {
    max_num = document.querySelector("input.max.out")
    max_num.value = parseInt(max_num.value) + 1
}

max_sub.onclick = () => {
    max_num = document.querySelector("input.max.out")
    max_num.value = parseInt(max_num.value) - 1
}

min_add.onclick = () => {
    min_num = document.querySelector("input.min.out")
    min_num.value = parseInt(min_num.value) + 1
}

min_sub.onclick = () => {
    min_num = document.querySelector("input.min.out")
    min_num.value = parseInt(min_num.value) - 1
}
