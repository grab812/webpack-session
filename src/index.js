import './css/style.css';
import webpack from './images/webpack.svg';
import syaku from './images/syaku.png';

const app = document.getElementById('app');

// app.innerHTML = '<img src="' + webpack + '" />';
// app.innerHTML += '<br/><img src="' + syaku + '" />';

app.innerHTML = `<div class="main-section">
<!-- letter area -->
<div class="write-form">
    <div class="textbox_area">
        <div class="textbox_area__temp js-textbox_area__temp" contentEditable="true" data-placeholder="Ex)&#13; 내용은 최대 공백 포함 50자,&#13;&#10; 5줄까지 입력 가능합니다.">
        </div>    
    </div>
</div>
<!-- //letter area -->
</div>`;
