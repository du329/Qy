import './slider.css';
import 'swiper/swiper-bundle.min.css';
import Swiper from 'swiper/swiper-bundle.min';
import config, { SWIPER_CONTAINER_CLASS ,SLIDER_URL,LAYOUT_ID } from './config'

import rander from './slider.art';
import { getDelayedData } from 'api/getData';

getDelayedData(SLIDER_URL).then((data) => {
    document.getElementById(LAYOUT_ID).innerHTML = rander({
        ...config,
        ...{ imgs: data }
    });
    new Swiper(SWIPER_CONTAINER_CLASS, config);
})