window.addEventListener('load', function () {
    //登录方式选择
    let tab1 = document.querySelector('.SignFlow-tab1');
    let tab2 = document.querySelector('.SignFlow-tab2');
    let account1 = document.querySelector('.SignFlow-account');
    let account2 = document.querySelector('.SignFlow-account-1');
    let password1 = document.querySelector('.SignFlow-password');
    let password2 = document.querySelector('.SignFlow-InputContainer');
    let options1 = document.querySelector('.Login-options-1');
    let options2 = document.querySelector('.Login-options');
    let btn1 = document.querySelector('.submitButton');
    let btn2 = document.querySelector('.SignFlow-submitButton');
    tab2.addEventListener('click', function () {
        this.style.borderBottom = '3px solid rgb(0,102,255)';
        this.style.fontWeight = '800';
        tab1.style.borderBottom = 'none';
        tab1.style.fontWeight = '400';
        account2.style.display = 'none';
        account1.style.display = 'block';
        password1.style.display = 'block';
        password2.style.display = 'none';
        options1.style.display = 'none';
        options2.style.display = 'block';
        btn1.style.display = 'block';
        btn2.style.display = 'none';
    })
    tab1.addEventListener('click', function () {
        this.style.borderBottom = '3px solid rgb(0,102,255)';
        this.style.fontWeight = '800';
        tab2.style.borderBottom = 'none';
        tab2.style.fontWeight = '400';
        tab1.style.borderBottom = 'block';
        tab1.style.fontWeight = '400';
        account2.style.display = 'block';
        account1.style.display = 'none';
        password1.style.display = 'none';
        password2.style.display = 'block';
        options1.style.display = 'block';
        options2.style.display = 'none';
        btn1.style.display = 'none';
        btn2.style.display = 'block';
    })
    //手机登录验证

    //username.addEventListener('blur',function(){
    //    if(this.value == 0){
    //        this.placeholder = '请输入手机号';
    //    }else{
    //        const username_num = new XMLHttpRequest();
    //        username_num.open('post','http://musicapi.leanapp.cn/personalized',true);
    //        username_num.send('手机号码为：'+username);
    //        username_num.onreadystatechange = function(){
    //            if(this.readyState == 4){
    //                if(this.status == 200){
    //                    console.log('请求成功');
    //                }else{
    //                    console.log('请求失败');
    //                }
    //            }
    //        }
    //    }
    //})
    //digits.addEventListener('blur',function(){
    //    if(this.value == 0){
    //        this.placeholder = '请输入验证码';
    //    }else{

    //    }
    //})
    let username = document.querySelector('.SignFlow-accountInputContainer').querySelector('.Input-wrapper').querySelector('input');
    let digits = document.querySelector('.SignFlow-InputContainer').querySelector('.Input-wrapper').querySelector('input');
    let send_massage = document.querySelector('.Button.CountingDownButton.SignFlow-smsInputButton.Button--plain');
    let SignFlow_submitButton = document.querySelector('.SignFlow-submitButton');

    send_massage.addEventListener('click', function () {
        const phone = new XMLHttpRequest();
        phone.open('get', '', true);
        phone.send();
        phone.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (status == 200) {
                    var massage = JSON.parse(phone.responseText);
                    var yanzhengma = massage.code;
                    SignFlow_submitButton.addEventListener('click', function () {
                        //实例化XMLHttpRequest对象
                        const xhr = new XMLHttpRequest();
                        //初始化一个post请求
                        xhr.open('post','', true);
                        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                        //接收返回值
                        xhr.send('验证码：' + yanzhengma + '$手机号：' + username.value);
                        xhr.onreadystatechange = () => {
                            if (xhr.readyState === 4) {
                                if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                                    var xhr = JSON.parse(phone.responseText);
                                    console.log(xhr);
                                } else {
                                    console.log('请求失败');
                                }
                            }
                        };
                        //发送请求
                        
                    })
                }
                else {
                    console.log('请求失败');
                }
            }
        }
    })
})