window.addEventListener('load',function(){
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
            /*问题删除按钮显示隐藏动态---未实现*/
        let question_card = document.querySelectorAll('.QuestionWaiting-questions-card');
        for(var i=0;i<question_card.length;i++){
            question_card[i].addEventListener('mouseover',function(){
                this.children[2].style.display = 'block';
            })
            question_card[i].addEventListener('mouseout',function(){
                this.children[2].style.display = 'none';
            })
        }
            /*删除卡片选项*/
            let QuestionWaiting_questions = document.querySelector('.QuestionWaiting-questions');
        let QuestionItem_ignoreButton = document.querySelectorAll('.QuestionItem-ignoreButton');
        for(var i=0;i<QuestionItem_ignoreButton.length;i++){
            QuestionItem_ignoreButton[i].addEventListener('click',function(){
                /*这一步可以不用，重在练习*/
                if(QuestionWaiting_questions.length == 0){
                    this.disabled = true;
                }else{
                    QuestionWaiting_questions.removeChild(this.parentNode);
                }
            })
        }

})