/*
對象要有 id="about"
使用時  onClick={objName => ScrollToPos('about')}
*/

export function  ScrollToPos(objName){

    let obj = document.getElementById(objName);
    if(obj)
    {
        //console.log('移動');
        obj.scrollIntoView({behavior:'smooth'});
    }else
    {
        //console.log('空');
    }
}