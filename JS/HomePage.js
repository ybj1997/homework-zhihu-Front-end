window.addEventListener('load',function(){
    /*头部导航栏*/
    let header = document.querySelector('.header');
    let nav = document.querySelector('.nav');
    document.addEventListener('mousewheel',function(e){
        //e.wheelDelta大于0是向上滚滑轮，小于0是向下滚滑轮
        if(e.wheelDelta >= 0){
            animate(header,-52)
            nav.style.display = 'block';  
        }else{
            animate(header,0)
            nav.style.display = 'none'
        }
    }) //需改进，动画效果不对，其次时触发条件为页面滚动时
    /*主页面部分-左侧*/
    let nav_recommend1 = document.querySelector('.mian-content').querySelector('.tabs').querySelector('.first');
    let nav_recommend2 = document.querySelector('.mian-content').querySelector('.tabs').querySelector('.second');
    let nav_recommend3 = document.querySelector('.mian-content').querySelector('.tabs').querySelector('.third');
    let nav_recommend_as = document.querySelector('.mian-content').querySelector('.tabs').querySelectorAll('a');
    let main_massage = document.querySelector('.main-massage');
    let main_massage_Topstory = document.querySelector('.main-massage-Topstory');
    let HotListNav = document.querySelector('.HotListNav');
    let HotList = document.querySelector('.HotList');
    nav_recommend2.addEventListener('click',function(){
        nav_recommend_as[1].style.color = 'rgb(0, 102, 255)';
        nav_recommend_as[0].style.color = 'black';
        nav_recommend_as[0].style.color = 'black';
        main_massage_Topstory.style.display = 'block';
        HotListNav.style.display = 'none';
        HotList.style.display = 'none';
        main_massage.style.display = 'none';
    })
    nav_recommend3.addEventListener('click',function(){
        nav_recommend_as[2].style.color = 'rgb(0, 102, 255)';
        nav_recommend_as[0].style.color = 'black';
        nav_recommend_as[1].style.color = 'black';
        HotListNav.style.display = 'block';
        HotList.style.display = 'block';
        main_massage_Topstory.style.display = 'none';
        main_massage.style.display = 'none';
    })
    nav_recommend1.addEventListener('click',function(){
        nav_recommend_as[0].style.color = 'rgb(0, 102, 255)';
        nav_recommend_as[1].style.color = 'black';
        nav_recommend_as[2].style.color = 'black';
        main_massage.style.display = 'block';
        main_massage_Topstory.style.display = 'none';
        HotListNav.style.display = 'none';
        HotList.style.display = 'none';
    })
    /*主页面部分-右侧*/
    let globalSideBar_category =document.querySelector('.globalSideBar-category');
    let card = document.querySelector('.card');
    let Footer = document.querySelector('.Footer');
    let card_top = card.offsetTop;
    document.addEventListener('scroll',function(){
        if(window.pageYOffset >= card_top - 10){
            card.style.position = 'fixed';
            card.style.top = 60 + 'px';
            Footer.style.position = 'fixed';
            Footer.style.top = 360 + 'px';
        }else{
            card.style.position = 'absolute';
            card.style.top = 410 + 'px';
            Footer.style.position = 'absolute';
            Footer.style.top = 715 + 'px'; 
        }
    })
    /*底部返回按钮*/
    let cornerButton = document.querySelector('.cornerButton');
    let Button_back = document.querySelector('.CornerAnimayedFlex');
    document.addEventListener('scroll',function(){
        if(window.pageYOffset > 600){
            animatebtn(cornerButton,770);
        }else{
            animatebtn(cornerButton,822);
        }
        
    })
    Button_back.addEventListener('click',function(){
        animategoback(window,0);
    })
    /*个人信息导航栏*/
    let people_selecte = document.querySelector('.people-selecte');
    let Appheader_img = document.querySelector('.Appheader_img');
    Appheader_img.addEventListener('click',function(){
        people_selecte.style.display = "block";//需改进为点击其他位置时，则导航栏消失
    })
    /*提问栏显示与隐藏*/
    let TopstoryPageHeader_askButton = document.querySelector('.TopstoryPageHeader-askButton');
    let question = document.querySelector('.question');
    let Modal_closeButton = document.querySelector('.Modal-closeButton');
    let main_content = document.querySelector('.main-content')
    TopstoryPageHeader_askButton.addEventListener('click',function(){
        main_content.style.display = 'block';
    })
    question.addEventListener('click',function(){
        main_content.style.display = 'block';
    })
    Modal_closeButton.addEventListener('click',function(){
        main_content.style.display = 'none';
    })
    /*个人信息-文本框提示*/
    let Popover49_toggle = document.querySelector('#Popover49-toggle');
    let AskFieldTip = document.querySelector('.AskFieldTip');
    Popover49_toggle.addEventListener('blur',function(){
        if(this.value.length < 4){
            AskFieldTip.style.display = 'block';
        }else{
            AskFieldTip.style.display = 'none';
        }
    });
    Popover49_toggle.addEventListener('focus',function(){
        AskFieldTip.style.display = 'none';
    });
})