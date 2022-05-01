import './nav.css';
import { getData } from 'api/getData';

// 模板
import rander from './nav.art';
import { NAV_URL, LAYOUT_ID } from './config'

getData(NAV_URL).then(data => {
  // 传递数据
  document.getElementById(LAYOUT_ID).innerHTML = rander({
    items: data
  });
})

