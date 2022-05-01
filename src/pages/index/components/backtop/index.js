import Backtop from '../../../../components/backtop';

const $backtop = document.getElementById('backtop');
const $scrollContainer = document.getElementById('index-page');
// 调用Backtop类
new Backtop($backtop, 300, $scrollContainer)
