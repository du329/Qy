import Backtop from '../../../../components/backtop';

const $backtop = document.getElementById('backtop');
// 超出设定高度时，overflow-y: auto
const $scrollContainer = document.querySelector('.main__layout');
// 调用Backtop类
new Backtop($backtop, 300, $scrollContainer)