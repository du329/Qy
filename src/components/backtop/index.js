import './backtop.css';
import 'icons/iconfont.css';

// 引入滚动类
import Scroll from '../../utils/scroll/scroll';

const CHANGE_CLASS_NAME = 'backtop-hidden';

class Backtop {
    constructor(el, critical_point, scrollContainer, eventEl = scrollContainer) {

        //滚动的元素
        this.el = el;

        // //触发点
        // this.critical_point = critical_point;

        //滚动条所在的容器（index-page）
        this.scrollContainer = scrollContainer;
        
        //监听滚动事件的DOM元素
        this.eventEl = eventEl;

        // 类的本质是一个函数,简单的认为类就是构造函数的另一种写法
        new Scroll({
            critical_point,
            Change: () => {
                this.show();
            },
            Reset: () => {
                this.hide();
            }
        }, scrollContainer, eventEl);
        //绑定事件
        this.bindEvent();

    }

    bindEvent() {
        this.el.addEventListener('click', () => {
            this.scrollTop();
        }, false)
    };

    scrollTop(top = 0, left = 0) {
        this.scrollContainer.scrollTo({
            top,
            left,
            behavior: 'smooth'
            // smooth(平滑滚动),instant(瞬间滚动)
        })
    }

    show() {
        this.el.classList.remove(CHANGE_CLASS_NAME)
    }
    hide() {
        this.el.classList.add(CHANGE_CLASS_NAME);
    }
}
export default Backtop;