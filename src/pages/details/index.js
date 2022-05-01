//样式
import '../../assets/styles/reset.css';//公共样式
import 'styles/base.css';//当前网站公共样式
import 'styles/layout.css';//当前网站公共布局样式 
import './details.css';
import 'icons/iconfont.css'

// 页面组件
import './components/proHeader__layout';
import './components/proIntros__layout';
import './components/proRefund__layout';
import './components/proHandle__layout';

// 顶部
import Header from '../../components/header';

// 数据注入
import { getData } from 'api/getData';
import { DETAILS__URL } from './config';

import randerHerder from './components/proHeader__layout/proHeader__layout.art';
import randerIntros from './components/proIntros__layout/proIntros__layout.art';
import randerRefund from './components/proRefund__layout/proRefund__layout.art';


let id = parseInt(location.search.slice(4));
getData(`${DETAILS__URL}${id}`).then(data => {
    ;
    document.querySelector('.proHeader__layout').innerHTML = randerHerder({
        ...data
    });
    document.querySelector('.proIntros__content').innerHTML = randerIntros({
        ...data
    });
    document.querySelector('.proRefund__content').innerHTML = randerRefund({
        ...data
    });
}).then(() => {
    //滚动的元素
    const $proHeader__tab = document.getElementById('proHeader__tab');
    // overflowy:auto 超出屏幕高度，滚动条
    const $details__page = document.getElementById('details__page');
    new Header($proHeader__tab, 300, $details__page);

    //回退
    document.querySelector('.proHeader .proHeader__tab .icon-right').addEventListener('click', () => {
        history.back();
        // history.go(-2);
    }, false)
})