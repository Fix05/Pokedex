async function getPokeList() {

    const pokeList = []
    var offset = 0
    const getId = url => url.substring(34, (url.length - 1));

    do {

        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`)
            const data = await res.json()

            data.results.forEach(element => {

                let id = getId(element.url)
                let pokemon = element.name.toLowerCase();

                pokeList.push({ name: pokemon, id: id })
            });

            offset = offset + 20;

        } catch (error) {
            console.log(error);
        }
    } while (offset < 900);

    return pokeList

}





async function filter() {

    lisitedPok.innerHTML = '';
    fragment = document.createDocumentFragment()
    var text = search.value.toLowerCase();

    pokList.forEach(element => {

        li = document.createElement('li')
        let id = element.id
        let pokemon = element.name.toLowerCase();
        li.textContent = pokemon
        li.setAttribute('id', id)
        li.setAttribute('tabindex', -1)

        if (text != '' && pokemon.indexOf(text) !== -1) {

            fragment.appendChild(li)
        }

    });

    lisitedPok.appendChild(fragment)
    buttons = Array.from(lisitedPok.querySelectorAll('li'));

}

function showResults() {
    console.log("mostrar");
    lisitedPok.style.display = "block"

}


function searchPkm(ev) {

    if (ev.keyCode == 13 || ev.type == "click") {
        pkm_number = ev.target.id
        callFetch(pkm_number)
    }

}


function hideResults(ev) {

    if (ev.target.id != 'search') {

        lisitedPok.style.display = "none"
    }

}


function onKeyDown(event) {
    switch (event.keyCode) {
        case keyCode.DOWN:
            event.preventDefault();
            focusNextItem();
            break;
        case keyCode.UP:
            event.preventDefault();
            focusPreviousItem();
            break;
    }
}


function onKeyDawn(ev) {

    if (ev.keyCode == keyCode.DOWN) { 
        activate(buttons[0])
    }
}


function focusNextItem() {
    const item = document.activeElement;
    if (item.nextElementSibling) {
        activate(item.nextElementSibling);
    }
}


function focusPreviousItem() {
    const item = document.activeElement;

    if (item.previousElementSibling != null) {
        activate(item.previousElementSibling);
    } else {
        
        activate(search)
    }
}


// This is where the roving tabindex magic happens!
async function activate(item) {
    // Set all of the buttons to tabindex -1
    //search.tabIndex = -1
    lisitedPok.querySelectorAll('li').forEach((btn) => btn.tabIndex = -1);

    // Make the current button "active"
    console.log(item);
    item.tabIndex = 0;
    item.focus();
    quitScroll()
    makeItScroll()

}



// it fixes a bug whit the scrolling and the first li of the 'list-group'
function quitScroll() { 

    lisitedPok.style.overflow = 'hidden'
}
function makeItScroll() {

setTimeout(() => {
    lisitedPok.style.overflow = 'scroll'
  }, "0")

}
