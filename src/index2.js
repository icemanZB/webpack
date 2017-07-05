import _ from 'lodash';
import './style.css';
import Img from './pic_load@2x.png';

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['hello', 'webpack'], '');
    element.classList.add('hello');

    // 将图像添加到现有的 div
    var myImg = new Image();
    myImg.src = Img;

    element.appendChild(myImg);

    return element;
}

document.body.appendChild(component());