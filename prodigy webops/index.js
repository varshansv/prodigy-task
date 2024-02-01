const nav=document.getElementsByClassName('colorchange');
window.onscroll=function(){
    if (document.body.scrollTop>=200 ||document.documentElement.scrollTop>=200){
        
        nav[0].classList.add('bgclr');
    }
    else{
        nav[0].classList.remove('bgclr');
    };
}
