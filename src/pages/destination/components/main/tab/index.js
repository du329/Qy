import './tab.css';
import { getData } from 'api/getData';
import { MAIN__TAB__CONTENT__AVTIVE, CONTENT__URL } from './config'

class Tab {
    constructor(el) {
        this.items = el.querySelectorAll('.main__tab__content li');
    }
    // 添加active
    setActiveItem(index) {
        for (const item of this.items) {
            item.classList.remove(MAIN__TAB__CONTENT__AVTIVE);
        }
        this.items[index].classList.add(MAIN__TAB__CONTENT__AVTIVE)
    }

    // content展示对应内容
    to(index) {
        if (this.dataPromise && this.dataPromise.xhr) {
            this.dataPromise.xhr.abort();
        }
        this.dataPromise = getData(`${CONTENT__URL}/${index}`);
        console.log('ajax');
        return this.dataPromise;
    }

}

export default Tab;