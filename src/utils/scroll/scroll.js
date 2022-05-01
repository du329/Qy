import { defaults } from './default';
import { INIT_STATE, CHANGE_STATE } from './constants';

class Scroll {
    constructor(options, scrollContainer, eventEl = scrollContainer) {

        this.options = Object.assign({}, defaults, options);

        //滚动条所在的容器（index-page）
        this.scrollContainer = scrollContainer;

        //监听滚动事件的DOM元素
        this.eventEl = eventEl;

        //初始状态
        this.stateInit(INIT_STATE);

        //绑定事件
        this.bindEvent();

    }
    stateInit(state) {
        this.state = state;
    }

    bindEvent() {
        this.eventEl.addEventListener('scroll', () => {
            if (this.stateChange()) {
                this.state = CHANGE_STATE;
                this.options.Change();
            } else if (this.stateReset()) {
                this.state = INIT_STATE;
                this.options.Reset();
            }

        }, false)
    };

    //判断状态
    stateChange() {
        // 初始状态 && 滚动值大于设定值
        return this.state === INIT_STATE &&
            this.scrollContainer.scrollTop > this.options.critical_point;
    }

    stateReset() {
        // 非初始状态 && 滚动值小于设定值
        return this.state === CHANGE_STATE &&
            this.scrollContainer.scrollTop <= this.options.critical_point;
    }
}
export default Scroll;