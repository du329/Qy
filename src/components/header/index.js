import './header.css';

// 引入滚动类
import Scroll from '../../utils/scroll/scroll';
const CHANGE_CLASS_NAME = 'header-transition';

class Header {
    constructor(el, critical_point, scrollContainer, eventEl = scrollContainer) {

        //滚动的元素
        this.el = el;
        //触发点
        // this.critical_point = critical_point;
        //滚动条所在的容器（index-page）
        // this.scrollContainer = scrollContainer;
        // //监听滚动事件的DOM元素
        // this.eventEl = eventEl;

        // 类的本质是一个函数,简单的认为类就是构造函数的另一种写法
        new Scroll({
            critical_point,
            Change: () => {
                this.show();
            }
            ,
            Reset: () => {
                this.hide();
            }
        }, scrollContainer, eventEl)

    }

    show() {
        this.el.classList.add(CHANGE_CLASS_NAME)
    }
    hide() {
        this.el.classList.remove(CHANGE_CLASS_NAME);
    }


}
export default Header;