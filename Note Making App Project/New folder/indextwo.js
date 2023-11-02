let addpage = document.getElementById('add_note')
let main = document.querySelector('main')

const savedata=()=>{
    const notes=document.querySelectorAll('textarea')
    const data=[];
   
    notes.forEach((i)=>{
        data.push(i.value)
    }) 
    if(data.length==0){
        localStorage.removeItem('data')
    }else{
        localStorage.setItem('data',JSON.stringify(data))
    }
    console.log('All data= >',data);
    
}



let notenumber=0;
const addnote = () => {
     notenumber+=1
    let notediv = document.createElement('div')
    notediv.classList.add('note')
    notediv.innerHTML = `        
    <div class="toolbar"><h1 ><b>${notenumber}</b></h1>   
        <div class="images">
           
             <button class="increase">+</button> <button class="decrease">-</button>
             <img class="copy" src="./icons/copy-solid.svg" alt="">
            <img class="save" src="./icons/floppy-disk-solid.svg" alt="">
            <img class="trash" src="./icons/trash-solid.svg" alt="">
         </div>  
    </div>
<textarea placeholder='write here...'></textarea>`;

let count=16
notediv.querySelector('.increase').addEventListener('click',function(){
    count+=2
notediv.querySelector('textarea').style.fontSize=`${count}px`
})

notediv.querySelector('.decrease').addEventListener('click',function(){
    count-=2
notediv.querySelector('textarea').style.fontSize=`${count}px`
})

notediv.querySelector('.copy').addEventListener('click',function(){
    navigator.clipboard.writeText(notediv.querySelector('textarea').value)
    alert('text copied')
})

notediv.querySelector('.trash').addEventListener('click',function(){
    notediv.remove()
    savedata()
})
notediv.querySelector('.save').addEventListener('click',function(){
    savedata()
    alert ('your data is saved in local stroage \n check in console')
})






    main.insertAdjacentElement('beforeend', notediv)
    savedata()
}

(function(){
   
   let lsnotes=JSON.parse(localStorage.getItem('data'))
   console.log(lsnotes);

if(lsnotes==null){
  addnote()

}
else{
   lsnotes.forEach((i)=>{
    addnote()
   })
}

})()



addpage.addEventListener('click', function () {
    addnote()
})    


