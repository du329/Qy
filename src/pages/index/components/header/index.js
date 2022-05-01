// 引入header组件（index-page中滚动值大于0，显示header组件）
import Header from 'components/header';
import 'components/searchbox';

const scrollContainer = document.getElementById('index-page');
const herderEl = scrollContainer.querySelector('.header');

// 调用Header类
new Header(herderEl,0,scrollContainer)


