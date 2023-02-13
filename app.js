var pokList;
var pkm_number = Math.ceil(Math.random() * 898);
var lisitedPok;
var search;
var list;
var buttons;
const keyCode = {
    UP: 38,
    DOWN: 40
};



document.addEventListener('DOMContentLoaded', () => {

    callFetch(pkm_number);

})


async function callFetch(id) {

    await fetchData(id);
    pokList = await getPokeList()
    listeners();

}


async function listeners() {

    search = document.getElementById('search')
    lisitedPok = document.getElementsByClassName('list-group')[0]
    changeButtons = document.getElementsByClassName('change_pkm')[0]
    footer = document.getElementsByClassName('card_footer')[0]
    card = document.getElementById('card')

    footer.addEventListener('click', openPopUp)
    card.addEventListener('click', closePop)
    changeButtons.addEventListener("click", changePkm)


    search.addEventListener("keyup", filter)
    search.addEventListener("focus", showResults)
    lisitedPok.addEventListener("click", searchPkm)
    document.addEventListener('click', hideResults)
    lisitedPok.addEventListener('keydown', onKeyDown);
    search.addEventListener('keydown', onKeyDawn)
    lisitedPok.addEventListener('keydown', searchPkm)
}


function openPopUp(variable) {

    target = variable.target.id;

    getElementToFade(target, fade_In = elementToFade => {
        $(elementToFade).fadeIn("slow");
    })
 
    
}

function closePop(variable) {

    target = variable.target.id.toLowerCase();
    target = target.substring(5,15)

    getElementToFade(target, fade_Out = elementToFade => {
        $(elementToFade).fadeOut("slow");
    })

}

function getElementToFade(Class, fadeFunction) {
    
    elementToFade = document.getElementsByClassName(Class)[0];
    fadeFunction(elementToFade)

}

function changePkm(ev) {
    buttonId = ev.target.id

    if (buttonId=='next') {
        add()
    }else if(buttonId=='previous'){
        substract()
    }

}

function add() {

    pkm_number++;
    callFetch(pkm_number);
}

function substract() {

    pkm_number--;
    callFetch(pkm_number);

}


















