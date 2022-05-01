import './main.css';
import './content';
import Tab from './tab';
import Content from './content';

// tab 
const $main__tab__content = document.querySelector('.main__tab__content');

const tab = new Tab($main__tab__content);
const content = new Content(document.querySelector('.main__content'));


// 亚洲
if (sessionStorage.getItem(`data1`)) {
    // 从sessionStorage解析数据
    content.setContent(JSON.parse(sessionStorage.getItem(`data1`)));
} else {
    tab.to(1).then(data => {
        content.setContent(data);
        // 将数据转换成字符串存入sessionStorage
        sessionStorage.setItem(`data1`, JSON.stringify(data))
    })
}


// 点击tab 添加样式  / 替换对应洲国家
$main__tab__content.addEventListener('click', (e) => {
    // 
    if (e.target.tagName.toLowerCase() === 'li') {

        tab.setActiveItem(e.target.dataset.index - 1);
        // 判断 sessionStorage 是否有值
        if (sessionStorage.getItem(`data${e.target.dataset.index}`)) {
            // 从sessionStorage解析数据
            content.setContent(JSON.parse(sessionStorage.getItem(`data${e.target.dataset.index}`)));
        } else {
            content.setLoading();
            tab.to(e.target.dataset.index).then(data => {
                content.setContent(data);
                // 将数据转换成字符串存入sessionStorage
                sessionStorage.setItem(`data${e.target.dataset.index}`, JSON.stringify(data))
            });
        }
    }
},true)