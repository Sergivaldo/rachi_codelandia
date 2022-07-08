
const btt_mobile = document.getElementById("btt_mobile")

function mostrar_botao_topo(){
    const btt_topo = document.getElementById("btt_topo_container")
    if (window.scrollY > 800){
        btt_topo.classList.add("active")
    }else{
        btt_topo.classList.remove("active")
    }
}

function toggle_menu(){
    const nav = document.getElementById("nav")
    nav.classList.toggle("active")
}

window.addEventListener('scroll',mostrar_botao_topo)

btt_mobile.addEventListener('click',toggle_menu)

