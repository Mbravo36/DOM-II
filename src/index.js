import './less/index.less'

// Your code goes here!
const funBus = document.querySelector('h1');
const nav = document.querySelector('a:nth-of-type(1)');
const text = document.querySelector('.text-content');
const img = document.querySelector('img');
const pick = document.querySelector('h2');
const aboutUs = document.querySelector('a:nth-of-type(2)');
const entirePage = document.querySelector('body');

//mouseenter
funBus.addEventListener('mouseenter', (e) => {funBus.style.color ="blue"});
//mouseover
text.addEventListener('mouseover', (e) => {text.style.color = "orange"});
//click
img.addEventListener('click', (e) => {alert("ouch!!")});
//click
pick.addEventListener('click', (e) => {pick.style.color = "pink"});
//scroll
window.addEventListener('scroll', (e) => {nav.style.color = "purple"})
//keydown
entirePage.addEventListener("keydown", (e) => {entirePage.style.color = "red"});
//onclick
aboutUs.onclick = function(){
    alert('Dont get any funny ideas')
};
//DOMContentLoaded
function ready(){
    alert('ARE YOU READY?????');
};
document.addEventListener('DOMContentLoaded', ready);
//Copy
document.addEventListener('copy', function(event){
    console.log("wooooowwww")
});
//wheel
document.addEventListener('wheel', function(event){
    console.log('wheeeeee!')
});
