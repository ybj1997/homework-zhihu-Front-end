window.addEventListener('load',function(){
    /*个人详细资料按钮*/
let btn1 = document.querySelector('.ProfileHeader-expandButton1');
let btn2 = document.querySelector('.ProfileHeader-expandButton2');
let ProfileHeader_contentBody = document.querySelector('.ProfileHeader-contentBody');
btn1.addEventListener('click',function(){
    this.style.display = 'none';
    btn2.style.display = 'block';
    ProfileHeader_contentBody.style.display = 'block';
});
btn2.addEventListener('click',function(){
    this.style.display = 'none';
    btn1.style.display = 'block';
    ProfileHeader_contentBody.style.display = 'none';
});
})
/*导航栏部分*/
let dongtai = document.querySelector('.dongtaibankuai');
let huida = document.querySelector('.huidabankuai');
let tiwen = document.querySelector('.tiwenbankuai');
let wenzhang = document.querySelector('.wenzhangbankuai');
let shoucang = document.querySelector('.shoucangbankuai');
let guanzhu = document.querySelector('.guanzhubankuai');
let lis = document.querySelectorAll('.Tabs-item');
console.log(lis.length);
for(let i = 0;i<lis.length;i++){
    lis[i].addEventListener('click',function(){
        console.log(11);
    })
}
