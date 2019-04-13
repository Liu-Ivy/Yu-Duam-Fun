'use strict';

function main(){
  const mainElement= document.querySelector('main');
    function buildDom(html){
        mainElement.innerHTML = html;
        return mainElement;
    };


