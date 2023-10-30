
const showTab = (id) => {
    const parent = document.querySelector("#tabview").children
    const showChild = document.getElementById(id)
    const load = document.querySelector("#load")
    for (const element of parent) {
        element.classList.remove("z-10") ? element.classList.remove("z-10") : "";
    }
    load.classList.add("w-full")
    showChild.classList.add("z-10")
    setInterval(() => load.classList.remove('w-full'), 1000)


}
const active = (event) => {
    const children = document.querySelector("#tabBtnParent").children
    for (const child of children) {
        child.classList.contains('active') && child.classList.remove('active')
    }
    const activeElement = event.classList.add('active')
}
const modalShow = (id) => {
    const element = document.querySelector(`#${id}`)
    if (element.classList.contains('w-[0px]')) {
        element.classList.replace('w-[0px]', 'w-fit')
        element.classList.replace('h-[0px]', 'h-fit')
    } else {
        element.classList.replace('w-fit', 'w-[0px]')
        element.classList.replace('h-fit', 'h-[0px]')
    }

}

const preview = () => {
    let img = document.querySelector('#img')
    let preview = document.querySelector('#preview img')
    preview.src=`file:///${img.value}`
    console.dir(preview);
}
const showSearch = (id) => {
    const element = document.querySelector(`#${id}`)
    for (const child of element.children) {
        child.addEventListener('click', (e) =>{
            
            element.classList.toggle(null)
        })
    }
    element.classList.toggle('invisible')

}


document.addEventListener('click', (e) => {
    switch (e.target) {
        case document.querySelector('#headerSearch'):
            document.querySelector('#searchView').classList.toggle('invisible')
            document.querySelector('#searchView input').focus()

        default:
    }
})

