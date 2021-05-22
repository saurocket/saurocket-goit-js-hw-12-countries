import './styles.scss';
import debounce from 'lodash/debounce';
import {fetchCountries} from './fetchCountries'
import {swalAlert} from './Component/swapAlert';
import { createTable } from './Component/CreateTable';


const rootLeft= document.querySelector('#root1')
const rootRight= document.querySelector('#root2')

const formRef = document.querySelector('#wrapper_country')
const inputRef = document.querySelector('#country')

const onInput = (e) => {
  fetchCountries(e.target.value).then(res => {
    rootLeft.innerHTML = ''
    rootRight.innerHTML = ''
    if (res.length > 0) {
   createTable(res)
    }
  })
    .catch((err) => {
      if (err.message === 'Unexpected end of JSON input'){
        rootLeft.innerHTML = ''
        rootRight.innerHTML = ''
        return
      }
      swalAlert(err.message)


  })

}








inputRef.addEventListener(
  'input',
  debounce(onInput, 500),
);

