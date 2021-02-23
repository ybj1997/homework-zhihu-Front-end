window.addEventListener('load',function(){
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
    tab2.addEventListener('click',function(){
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
    tab1.addEventListener('click',function(){
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
})