
async function fetchData(id) {

    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()
        const specie = await fetch(data.species.url)
        const species = await specie.json()

        const pokemon = {

            image: data.sprites.front_default,
            name: data.name,
            number: data.id,
            type: data.types,
            stats: getStats(data.stats),

            info: {

                abilities: data.abilities,
                height: data.height,
                weight: data.weight,
                base_exp: data.base_experience,
                capture_rate: species.capture_rate,
                egg_groups: species.egg_groups

            }

        }

        printCard(pokemon);

    } catch (error) {
        console.log(error);
    }

}


const printCard = pokemon => {

    var type = [];
    var weakness = [];
    config = getChart(pokemon.stats);

    document.getElementsByClassName('flex')[0].innerHTML = '';

    //this variable stores the flex class of html code which is empty
    const flex = document.getElementsByClassName('flex')[0]

    //template stores the content of the html template label 
    const template = document.querySelector('#template_card').content

    //clone of the content of template
    const clone = template.cloneNode(true)

    const fragment = document.createDocumentFragment()

    //this sets the class .card_body_img atribute src with imagen 
    clone.querySelector('.card_body_img').setAttribute('src', pokemon.image)
    console.log(pokemon.name);
    clone.querySelector('.card_body_title').innerHTML =
        `${pokemon.name} <span>N°${pokemon.number}</span>`

    pushType(pokemon, clone, type);
    weakness = getDamages(type)

    printWeakness(weakness, clone);

    printInfo(pokemon.info, clone)

    insertCanvas(clone);

    //clone gets into fragment
    fragment.appendChild(clone)

    //fragment gets into the main lable "flex"
    flex.appendChild(fragment)

    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
    canv = document.getElementById(myChart)




}

function getStats(stats) {

    var statsArray = []

    stats.forEach(element => {

        statsArray.push(element.base_stat)

    });

    return statsArray;

}



function insertCanvas(clone) {

    const canvas = document.createElement('canvas')

    canvas.setAttribute('id', 'myChart')


    content = clone.querySelectorAll('.stats .contentPopUp')[0]

    content.appendChild(canvas)


}


function pushType(pokemon, clone, type) {

    clone.querySelector('#img1').setAttribute('src', `images/Types/Tipo_${pokemon.type[0].type.name}.png`)
    type.push(pokemon.type[0].type.name);

    if (pokemon.type[1] != null) {

        clone.querySelector('#img2').setAttribute('src', `images/Types/Tipo_${pokemon.type[1].type.name}.png`)
        type.push(pokemon.type[1].type.name);
    }

}

function printWeakness(weakness, clone) {


    weakness.forEach(type => {
        const div = document.createElement('div')
        const img = document.createElement('img')
        content = clone.querySelectorAll('.card_footer .weakness .contentPopUp')[0]
        img.setAttribute('src', `images/Types2/${type.name}.png`)

        div.appendChild(img)

        content.appendChild(img);

    });

}


function printInfo(pkm, clone) {

/*
    console.log(pkm);

    const results = Object.keys(pkm).forEach(
        key => {
            const value =pkm[key]
            console.log(value);
        }
    )

    /*

    for (let i = 0; i < 7; i++) {

        var p = document.createElement('p')

    }




    const weight = clone.querySelector('.weight')
    const base_exp = clone.querySelector('.base_exp')
    const height = clone.querySelector('.height')
    const capture_rate = clone.querySelector('.capture_rate')
    const egg_group = clone.querySelector('.egg_group')
    const ability = clone.querySelector('.ability')

    p.textContent = `${pkm.weight / 10}Kg`
    weight.appendChild(p)

    p.textContent = '';

    p.textContent = pkm.base_exp
    base_exp.appendChild(p)

    //p.textContent = pkm.height
*/

}



//`<img src="images/Types2/${type.name}" >`