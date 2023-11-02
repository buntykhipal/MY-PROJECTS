let inputbox=document.getElementsByClassName('input')[0]
let listbox=document.querySelector('.box')
let input=document.getElementsByClassName('input')[0]
let box=document.getElementsByClassName('box')[0]
let savebutton=document.getElementsByClassName('savebutton')[0]
let getdatabutton=document.getElementsByClassName('getdatabutton')[0]

function getdata(){
    let datalist=JSON.parse(localStorage.getItem('list'))
    
    if(datalist.length==0){
        alert('there is no data in memory');
    }else{
        alert('Your all data => '+datalist)
    }
}



function savedata(){
    let data=box.querySelectorAll('.p')
    
    let list=[]
    data.forEach((i)=>{
        list.push(i.innerText)
    })
    console.log(list);

    localStorage.setItem('list',JSON.stringify(list))

    alert('your data " '+  list + '" is saved now')
}

let number=0;
function addlist(e){
    if(e.key=='Enter'){
        number+=1

       let div=document.createElement('div')
       div.classList.add('toList')

       div.innerHTML=`
       <div class='leftdiv'>
            <b>${number}).</b>
            <p class='p'>
            ${e.target.value}
            </p > 
        </div>
        <div class="imagediv">
                <img class="cross" src="./icon/times-solid.svg" alt="">
                <img class="copy" src="./icon/copy-solid.svg" alt="">
        </div>  `
        listbox.insertAdjacentElement('beforeend',div)
        input.value=''

        div.querySelector('.cross').addEventListener('click',function(){
              div.remove()
        })

        div.querySelector('.copy').addEventListener('click',function(){
              navigator.clipboard.writeText(div.querySelector('p').innerText)
              alert('copied')
        })
        
        div.querySelector('.p').addEventListener('click',function(){
            div.querySelector('.p').classList.toggle('done')
            
            console.log('hello');
        })
        
    }
 
 
}



getdatabutton.addEventListener('click',function(){
    getdata()
})
savebutton.addEventListener('click',function(){
    savedata()
})

inputbox.addEventListener('keypress',function(e){
    addlist(e)
})