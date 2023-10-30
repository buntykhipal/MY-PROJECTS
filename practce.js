const questions = [
    {
        ques: ' what will come after letter "a"?',
        a: "'c' comes after 'a'",
        b: "'y' comes after 'a'",
        c: "'b' comes after 'a'",
        d: "'w' comes after 'a'",
        correct: "c",
    },
    {
        ques: ' what will come after letter "n"?',
        a: "'c' comes after 'n'",
        b: "'y' comes after 'n'",
        c: "'b' comes after 'n'",
        d: "'o' comes after 'n'",
        correct: "d",
    },
    {
        ques: ' what will come after letter "e"?',
        a: "'f' comes after 'e'",
        b: "'y' comes after 'e'",
        c: "'b' comes after 'e'",
        d: "'w' comes after 'e'",
        correct: "a",
    }]
// let coret=questions[0].correct;
// console.log(coret);
// console.log(questions[0][coret]);

let h1 = document.getElementsByTagName('h1')[0]
let index = 0;
let totalQ = questions.length;
let right = 0,
    wrong = 0;


function loadquestions() {
    h1.innerHTML = ` ${index + 1}).` + questions[index].ques

    document.getElementsByTagName('label')[0].innerHTML = questions[index].a
    document.getElementsByTagName('label')[1].innerHTML = questions[index].b
    document.getElementsByTagName('label')[2].innerHTML = questions[index].c
    document.getElementsByTagName('label')[3].innerHTML = questions[index].d

}

function onsubmit() {
    let input = document.getElementsByTagName('input')

    if (input[0].disabled && input[1].disabled && input[2].disabled && input[3].disabled) {
        alert(`Now you cannot submit again.
    your answer is submitted.
    please click on the button "next question"`)
        return;
    }

    if (input[0].checked || input[1].checked || input[2].checked || input[3].checked) {
        for (let a of input) {
            a.disabled = true;
        }
        let ans = questions[index].correct;
        for (let x of input) {
            if (x.checked) {
                //   console.log(x.value);
                //   console.log(ans);
                //   console.log(ans==x.value);
                //   console.log(typeof x.value, typeof ans);
                if (ans == x.value) {
                    right++
                    break;
                }
                else {
                    wrong++
                    break;
                }

            }

        }
        console.log(right, 'right');
        console.log(wrong, 'wrong');
        // console.log(ans, 'correct');

        showanser();

        let next = document.createElement('button')
        if (index == 0) {
            next.innerText = 'next Question';
            document.getElementsByClassName('submit')[0].after(next)
            next.setAttribute('class', 'next')
        }
        next.addEventListener(
            'click',
            function () {
                if (input[0].disabled && input[1].disabled && input[2].disabled && input[3].disabled) {
                    for (let a of input) {
                        a.disabled = false;
                    }
                    let div1 = document.getElementsByClassName('result')[0]
                    div1.remove()
                    //   document.getElementsByClassName('box')[0].removeChild(h3)


                    index++;
                    if (index == totalQ) {
                        let box = document.getElementsByClassName('box')[0]
                        box.innerHTML = `
                     <h2>your questions are over now, thanks for playingthe game</h2>
                     <h4>total right answers are =>> ${right} </h4>
                     <h4>total wrong answers are =>> ${wrong} </h4>
                     <h4> your score is =>> ${right}/${totalQ}</h4>`
                        return;
                    }
                    loadquestions()
                }
                else {
                    alert('please submit an answer before going to next  question')
                }
            }
        )



        console.log(index, 'indx in on submit button');


    }
    else {
        alert('Error , please select any answer')
    }

}

function showanser() {
    let input = document.getElementsByTagName('input')


    let anser = questions[index].correct;
    console.log(anser, 'answer');
    for (let x of input) {
        if (x.checked) {

            if (anser == x.value) {

                let box1 = `<div class='result'>
                <h3>Your answer is =>  ${questions[index][anser]}</h3>
                <h3> congratulations, your answer is right. </h3>
                <h3>the correct answer is =>> ${questions[index][anser]}</h3>
                </div>`
                let box = document.getElementsByClassName('box')[0]
                box.insertAdjacentHTML('beforeend', box1)
                break;
            }
            else {
                let box1 = `<div class='result'>
                <h3>Your answer is =>  ${x.nextElementSibling.innerHTML}</h3>
                <h3> Sorry, your answer is wrong </h3>
                <h3>the correct answer is =>> ${questions[index][anser]}</h3>
                </div>`
                let box = document.getElementsByClassName('box')[0]
                box.insertAdjacentHTML('beforeend', box1)
                break;
            }

        }

    }


    for (let c of input) {
        if (c.checked) {
            c.checked = false;
            break;
        }
    }

}

loadquestions()
document.getElementsByTagName('button')[0].addEventListener(
    'click',
    function () {
        onsubmit()
    }
)
