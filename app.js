const questions = [
    {
        'que': 'which of the following is a markup language? ',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JAVASCRIPT',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'que': 'what year was javascript launched?',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'none of the above',
        'correct': 'b'
    },
    {
        'que': 'what does css stands for?',
        'a': 'hypertext markup language',
        'b': 'cascading style sheet',
        'c': 'jason object notation',
        'd': 'helicopters terminals motorboats lamborgini',
        'correct': 'b' 
    }
]


let index = 0; 
let total = questions.length;
let right = 0,
    wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {
    if(index === total){
        return endQuiz()
    }
      reset();
      const data = questions[index]
      console.log(data)
      quesBox.innerText = `${index + 1}) ${data.que}`;
      optionInputs[0].nextElementSibling.innerText = data.a;
      optionInputs[1].nextElementSibling.innerText = data.b;
      optionInputs[2].nextElementSibling.innerText = data.c;
      optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if(ans === data.correct) {
        right++;
    }
    else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => { 
    let answer;
    optionInputs.forEach(
        (input) => {
          if(input.checked) {
           answer = input.value;
          }
        }
    )
    return answer;
}


const reset = () => {
    optionInputs.forEach(

        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
      document.getElementById("box").innerHTML = `
      <div style="text-align:center">
      <h3> Thank You  for playing the Quiz </h3>
      <h2> ${right} / ${total} are Correct </h2>
      </div>
      `
}


loadQuestion();