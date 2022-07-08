const btt_topo = document.getElementById("btt_topo_container")
const btt_mobile = document.getElementById("btt_mobile")

function mostrar_botao_topo(){
    if(window.scrollY > 700){
        btt_topo.style.opacity=1
        btt_topo.style.visibility="visible"
        
    }else{
        btt_topo.style.opacity =0
        btt_topo.style.visibility="hidden"
        
    }
}

function toggle_menu(){
    const nav = document.getElementById("nav")
    nav.classList.toggle("active")
}


btt_mobile.addEventListener('click',toggle_menu)

window.addEventListener('scroll',mostrar_botao_topo)