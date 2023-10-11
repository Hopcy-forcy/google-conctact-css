
const showTab = (id) =>{
    const parent = document.querySelector("#tabview").children
    const showChild = document.getElementById(id)
    const load = document.querySelector("#load")
    for (const element of parent) {    
        element.classList.remove("z-10") ? element.classList.remove("z-10"): "";      
    }
    load.classList.add("w-full")
    showChild.classList.add("z-10")
    setInterval(()=>load.classList.remove('w-full'),1000) 
    

}
const active = (event) =>{
    const children = document.querySelector("#tabBtnParent").children
    for (const child of children) {
        child.classList.contains('active') && child.classList.remove('active')
    }
    const activeElement = event.classList.add('active')
}
const modalShow = ({id,ui}) =>{

}