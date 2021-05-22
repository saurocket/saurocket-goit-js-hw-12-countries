import { card } from './Card';
import { onCheckedCountry } from './onCheckedCountry';


export const createTable = (elemets) => {
  const rootList= document.querySelector('#root1')


  rootList.innerHTML = null

 if (!Array.isArray(elemets)) throw ('Something wrong')

  if (elemets.length>1){
    const arrElemetns =  elemets.map(element => {
      return `<li class="list-group-item">${element.name}</li>`
    }).join('')

    const rootUl = document.createElement('ul')
    rootUl.classList.add('list-group')

    rootUl.innerHTML = arrElemetns
    rootList.append(rootUl)

    const listCountiest = document.querySelectorAll('#root1 .list-group-item')

    listCountiest.forEach(counry => counry.addEventListener('click',
      (e)=>onCheckedCountry(e,counry,listCountiest, elemets))
    )

  }
  if(elemets.length === 1){
    card(elemets)
  }
}
