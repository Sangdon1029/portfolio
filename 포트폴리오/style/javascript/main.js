const personal = document.getElementById('personalInfo');
const graduate = document.getElementById('graduateInfo');
const certificate = document.getElementById('certificateInfo');
const skill = document.getElementById('skillInfo');


const html = document.getElementById('html');
const css = document.getElementById('css');
const javascript = document.getElementById('javascript');
const react = document.getElementById('react');

const htmlCont = document.getElementById('htmlCont');
const cssCont = document.getElementById('cssCont');
const javascriptCont = document.getElementById('javascriptCont');
const reactCont = document.getElementById('reactCont');

html.addEventListener('click', function (event) {
    html.classList.add('on');
    css.classList.remove('on');
    javascript.classList.remove('on');
    react.classList.remove('on');
    htmlCont.style.display = 'inline-block';
    cssCont.style.display = 'none';
    javascriptCont.style.display = 'none';
    reactCont.style.display = 'none';
})
css.addEventListener('click', function (event) {
    html.classList.remove('on');
    css.classList.add('on');
    javascript.classList.remove('on');
    react.classList.remove('on');
    htmlCont.style.display = 'none';
    cssCont.style.display = 'inline-block';
    javascriptCont.style.display = 'none';
    reactCont.style.display = 'none';
})
javascript.addEventListener('click', function (event) {
    html.classList.remove('on');
    css.classList.remove('on');
    javascript.classList.add('on');
    react.classList.remove('on');
     htmlCont.style.display = 'none';
    cssCont.style.display = 'none';
    javascriptCont.style.display = 'inline-block';
    reactCont.style.display = 'none';
})
react.addEventListener('click', function (event) {
    html.classList.remove('on');
    css.classList.remove('on');
    javascript.classList.remove('on');
    react.classList.add('on');
     htmlCont.style.display = 'none';
    cssCont.style.display = 'none';
    javascriptCont.style.display = 'none';
    reactCont.style.display = 'inline-block';
})

