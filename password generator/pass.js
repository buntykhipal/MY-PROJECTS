const uprset="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerset="abcdefghijklmnopqrstuvwxyz"
const numberset="1234567890"
const symbolset="!@#$%^&*()+-/*"


const generatedata=(dataset)=>{
 return dataset[Math.floor(Math.random()*dataset.length)]
}


const button=document.getElementById('btn')
const buttonr=document.getElementById('btnr')
const buttoncopy=document.getElementById('btncopy')
const password_box=document.getElementById('pass-box')

const totalchar=document.getElementById('total-char')
const UPPERcase=document.getElementById('upper-case')
const LOwERcase=document.getElementById('lower-case')
const NUMBER=document.getElementById('numbers')
const SYMBOL=document.getElementById('symbols')


function trimpassword(string,number){
    if(string.length>number){
      return string.slice(0,number)
    }else{
        return string
    }
}


function generatepassword(password=''){
    if(UPPERcase.checked){
       password+=generatedata(uprset)
    }
    if(LOwERcase.checked){
       password+=generatedata(lowerset)
    }
    if(NUMBER.checked){
       password+=generatedata(numberset)
    }
    if(SYMBOL.checked){
       password+=generatedata(symbolset)
    }
    if(password.length<totalchar.value){
        return generatepassword(password)
    }
    // console.log(password,'1');
    password_box.innerText=trimpassword(password,totalchar.value)

}


 button.addEventListener( 'click',   function(){
                                     generatepassword()  })

generatepassword()


buttonr.addEventListener('click', function(){
    window.location='index.html'
})

buttoncopy.addEventListener('click', function(){
    navigator.clipboard.writeText(password_box.innerText).then(()=>[
        alert('password copied=>' + password_box.innerText)
    ])
})

