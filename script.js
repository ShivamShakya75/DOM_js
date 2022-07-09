const incrementBtn = document.querySelector('#increment')
const decrementBtn = document.querySelector('#decrement')
const counterEL = document.getElementById('counter')

const ulElement = document.getElementById('listitems')


let counter = 0

function incrementcounter(){
    counter++
    counterEL.innerText = counter
    
    // create an Element
    const li = document.createElement('li')
    li.setAttribute('data-counter', counter)

    //append and element
    ulElement.appendChild(li) 
    if (counter % 2 == 0){
        li.setAttribute('class', 'red')
    }else{

        li.setAttribute('class', 'yellow ')
    }

    const textNode = document.createTextNode('Sentece' + counter)
    li.appendChild(textNode)
       
}

function decrementcounter(){
    const li =  ulElement.querySelector('[data-counter="'+counter+'"]')
    li.remove()


    counter--
    counterEL.innerText = counter
}

incrementBtn.addEventListener('click', incrementcounter)
decrementBtn.addEventListener('click', decrementcounter)


