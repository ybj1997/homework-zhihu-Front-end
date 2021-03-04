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
    let username = document.querySelector('.SignFlow-accountInputContainer').querySelector('.Input-wrapper').querySelector('input');
    let digits = document.querySelector('.SignFlow-InputContainer').querySelector('.Input-wrapper').querySelector('input');
    let send_massage = document.querySelector('.Button.CountingDownButton.SignFlow-smsInputButton.Button--plain');
    let SignFlow_submitButton = document.querySelector('.SignFlow-submitButton');
    username.addEventListener('blur', function () {
        if (this.value == 0) {5
            this.placeholder = '请输入手机号';
        } else {

        }
    })
    digits.addEventListener('blur', function () {
        if (this.value == 0) {
            this.placeholder = '请输入验证码';
        } else {
        }
    })
    send_massage.addEventListener('click', function () {
        send_massage.disabled = true;
        let time = 60;
        let timer = setInterval(function () {
            if (time == 0) {
                //倒计时完成要清除定时器，改变按钮内容，取消禁止按钮，重置倒计时
                clearInterval(timer);
                send_massage.innerHTML = '获取短信验证';
                send_massage.style.color = 'rgb(23, 81, 153)';
                send_massage.disabled = false;
                time = 3;
            } else {
                send_massage.innerHTML =  time + '秒后可重发';
                send_massage.style.color = '#8590A6';
                time--;
            }
        }, 1000);
        const massage = new XMLHttpRequest();
        massage.open('get', '', true);
        massage.send();
        massage.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (status == 200) {
                    //var massage = JSON.parse(phone.responseText);
                    //var yanzhengma = massage.code;
                    console.log('请求成功');
                    SignFlow_submitButton.addEventListener('click', function () {
                        //实例化XMLHttpRequest对象
                        console.log(11);
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