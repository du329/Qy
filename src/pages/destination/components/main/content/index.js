import './content.css';
import rander from './content.art';

//引入loading
import 'components/loading'
import loading from '../../../../../components/loading/loading.art'

class Content{
    constructor(el){
        this.el = el;
    }

    setContent(data){
        this.el.innerHTML = rander({items:data})
    }

    setLoading(){
        this.el.innerHTML = loading({});
    }
}
export default Content;