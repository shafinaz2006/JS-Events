//***********************************************************

const promptVar = document.querySelector('#myPrompt');
promptVar.addEventListener('click', function() {
    let text = prompt('What is your favourite food?');
    let promptResult = document.querySelector('#promptResult').innerText;
    document.querySelector('#promptResult').innerText = promptResult + ' ' + text;
})

//***********************************************************


const confirmVar = document.querySelector('#myConfirm');
confirmVar.addEventListener('click', function() {
    let text = confirm('Do you like JS?') ? 'YES' : 'NO';
    let confirmResult = document.querySelector('#confirmResult').innerText;
    confirmResult = confirmResult + ' ' + text;
    document.querySelector('#confirmResult').innerText = confirmResult
})

//***********************************************************


const setTimeOutEffect = document.querySelector('#setTimeOutEffect')
setTimeOutEffect.addEventListener('click', function() {
    setTimeout(function() {
        setTimeOutEffect.style.backgroundColor = 'yellow';
    }, 5000);
})

//***********************************************************


const setIntervalEffect = document.querySelector('#setIntervalEffect');
setIntervalEffect.style.color = 'cadetblue'
let setIntervalFunc;
setIntervalEffect.addEventListener('click', function() {
    setIntervalFunc = setInterval(setInt, 2000);
});

const stopInterval = document.querySelector('#stopInterval')
stopInterval.addEventListener('click', function() {
    clearInterval(setIntervalFunc);
    setIntervalEffect.style.color = 'cadetblue'
})

function setInt() {
    if (setIntervalEffect.style.color === 'blue') {
        // in condition, rgb needs to be given. hex will not work
        setIntervalEffect.style.color = 'purple';
    } else {
        setIntervalEffect.style.color = 'blue';
    }
}

//***********************************************************

const mouseoverP = document.querySelector('.mouseoverP');
mouseoverP.addEventListener('mouseover', function() {
    this.classList.add('mouseoverP2');
})

//************************************************************

const checkbox1 = document.querySelector('#checkbox1');
const checkboxP = document.querySelector('#checkboxP');
checkbox1.addEventListener('change', function() {
    if (checkbox1.checked) {
        checkboxP.innerText = 'You agreed!!!'
    } else {
        checkboxP.innerText = 'You didn\'t agree!!!'
    }
});

//************************************************************************

const toggleP = document.querySelector('.toggleP');
const toggle1 = document.querySelector('.toggle1');
toggle1.addEventListener('click', function() {
    toggleP.classList.toggle('toggleP2');
});

//*******************************************************************************

const hoverP = document.querySelector('.hoverP');
const hoverSpan = document.querySelector('.hoverSpan');
hoverP.addEventListener('mouseover', function() {
    hoverSpan.classList.add('pop');
});
hoverP.addEventListener('mouseout', function() {
    hoverSpan.classList.remove('pop');
});


//****************************************************************


const radioForm = document.querySelector('#radioForm');
const radioSubmit = document.querySelectorAll('input[type = "radio"][name = "radio1"]');
const radiobtnSubmit = document.querySelector('#radiobtnSubmit');
const radioSpan = document.querySelector('#radioSpan');
radioForm.addEventListener('submit', function(el) {
    el.preventDefault(); // this prevents from refreshing after submit.
    for (let radioEl of radioSubmit) {
        if (radioEl.checked) {
//             console.log(radioEl);
            radioSpan.innerText = radioEl.value
        }
    }
});

//*************************************************************************************

const colorRadio = document.querySelectorAll('input[type = "radio"][name = "color"]');
const colorRadioSpan = document.querySelector('#colorRadioSpan');
colorRadio.forEach(function(el) {
    el.addEventListener('change', function() {
        colorRadioSpan.innerText = el.value;
    })
})

//***********************************************************

const guessImage = document.querySelector('#guessImage');
const guessImageForm = document.querySelector('#guessImageForm')
const guessName = document.querySelector('#guessName');
const guessImageResult = document.querySelector('#guessImageResult');
guessImageForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (guessName.value.toLowerCase() === 'monalisa') {
        guessImageResult.innerText = 'You guessed it correct!!!';
        guessImage.style.opacity = '1';
    } else {
        guessImageResult.innerText = 'Wrong guess. Want to try again?';
        guessName.value = '';
    }
})

//***********************************************************

const coordinateFindImage = document.querySelector('#coordinateFindImage');
const coordinateFindP = document.querySelector('#coordinateFindP');
coordinateFindImage.addEventListener('click', (event) => {
    coordinateFindP.innerText = `Treasure is at (${event.clientX},${event.clientY}) of browser window,
									(${event.screenX}, ${event.screenY}) of user screen,
									(${event.pageX}, ${event.pageY}) of browser's page.`;
});

//********************************************************************************************************

const blur = document.querySelector('#blur');
const blur1 = document.querySelector('#blur1');
const focus1 = document.querySelector('#focus1')
blur1.addEventListener('click', () => blur.blur());
focus1.addEventListener('click', () => blur.focus());

//*******************************************************************************************************************

const os = document.querySelector('#ospan');
const windowHeight = document.querySelector('#windowHeight');
os.innerText = navigator.platform;
os.style.color = 'blue';
// console.log(window.history)
let loc = window.location;
// console.log(windowHeight)
loc = loc.toString().slice(0, 7) + '**************'
windowHeight.innerText = `Window height: ${window.innerHeight} and width: ${window.innerWidth},window location: ${loc}`;


//************************************************************************************************************************

const toggleSlider = document.querySelector('#checkboxSlider');
const sliderSwitchP = document.querySelector('.sliderSwitchP');
toggleSlider.addEventListener('change', function() {
    if (toggleSlider.checked) {
        sliderSwitchP.innerText = 'You are in Night mood!'
    } else {
        sliderSwitchP.innerText = 'You are in Day mood!'
    }
});
