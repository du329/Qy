import './product.css';
import { getData } from 'api/getData';

import rander from './product-items.art';
import { PRODUCT_URL, PRODECU_LIST } from './config'

getData(PRODUCT_URL).then(data => {
    document.querySelector(PRODECU_LIST).innerHTML = rander({
        items:data
    })
})