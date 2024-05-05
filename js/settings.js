// Show Menu
toggle_btn = document.getElementById("setting-btn")
setting_menu = document.getElementById("settings-menu")
showMenu = 1
toggle_btn.onclick=()=>{
	showMenu++
	if (showMenu%2==0){
		setting_menu.style.transform = "translateY(0px)"
	}else{
		setting_menu.style.transform = "translateY(100vh)"
	}
}
// Set max
max_add = documeny.querySelector(".setting.max.add")
