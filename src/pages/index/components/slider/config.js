//swiper 配置

export default {
    initialSlide: 0, //设定初始化时slide的索引

    direction: 'horizontal', //默认水平切换
    // direction: 'vertical',//垂直切换

    speed: 1000, //切换速度
    loop: true, //循环模式选项

    effect: 'slide', //切换效果 默认为位移切换（slide）
    fadeEffect: { //过渡时，原slide透明度从1->0（淡出），过渡中的slide透明度从0->1（淡入），其他slide透明度0
        crossFade: true
    },

    grabCursor: true, //鼠标变为手掌

    slidesPerView: 1, //设置slider容器能够同时显示的slide数量

    freeMode: false, //free模式，slide会根据惯性滑动，不会贴合

    pagination: { // 如果需要分页器
        el: '.swiper-pagination', //和哪一个元素挂钩
        clickable: true, //可点击
    },

    navigation: { // 如果需要前进后退按钮
        nextEl: '.swiper-button-next', //和哪一个元素挂钩
        prevEl: '.swiper-button-prev',
    },

    //autoplay: true, //自动切换
    autoplay: {
        delay: 1000,
        stopOnLastSlide: false, //在最后一个Slide上停止
        disableOnInteraction: true, //点击分页器后 停止切换
    },

    keyboard: true, //键盘

    mousewheel: true, //鼠标滚轮

    on: { //注册事件
        // slideChange: function () {
        //     //返回当前活动块(激活块)的索引。loop模式下注意该值会被加上复制的slide数。
        //     console.log(this.activeIndex);
        //     console.log(this.previousIndex);
        //     console.log(this.width);
        //     console.log(this.height);
        // },

        // init: function (swiper) {
        //     console.log('init');
        // },

        // slideChangeTransitionStart: () => {
        //     // console.log('slideChangeTransitionStart');

        // },

        // slideChangeTransitionEnd: () => {
        //     // console.log('slideChangeTransitionEnd');
        // },
    }
};

export const SWIPER_CONTAINER_CLASS = '.swiper-container';
export const SLIDER_URL = 'https://www.imooc.com/api/mall-wepApp/index/slider';
export const LAYOUT_ID = 'index-slider';