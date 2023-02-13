function getDamages(type) {

    pkm_types = type;
    pkm_damages = [];
    pkm_weakness = [];


    daño(pkm_types)

    function rep_type(type) {

        let i = 0;

        do {

            if (pkm_damages.length < 1) {
                is_repeated = false;
                break
            }

            is_repeated = pkm_damages[i].name.includes(type)

            if (is_repeated) {

                break
            }

            i++;

        } while (i < pkm_damages.length);

        return !is_repeated;
    }



    function insert(name, damage) {

        if (rep_type(name)) {

            pkm_damages.push({ name: name, dmg: damage });
        }

    }


    function auxiliar_for(array, element0) {

        array.forEach(element1 => {

            if (element0 != null && element0.name == element1.name) {

                let dmg = element0.dmg * element1.dmg

                insert(element0.name, dmg)

            } else if (element0 == null) {

                insert(element1.name, element1.dmg)

            }

        })

    }


    function daño(types) {

        damage = Each_Type_damage();

        let type1 = damage[types[0]]

        if (types[1] != null) {

            let type2 = damage[types[1]]

            type1.forEach(element0 => {

                auxiliar_for(type2, element0);
                insert(element0.name, element0.dmg)

            });

            auxiliar_for(type2);

        } else {
            auxiliar_for(type1);

        }

        get_weakness();

    }



    function get_weakness() {

        pkm_damages.forEach(element => {

            if (element.dmg >= 2) {

                pkm_weakness.push({ name: element.name, dmg: element.dmg });
            }

        });

    }

    return pkm_weakness;


}

function Each_Type_damage() {

    let damage = {

        'dragon': [
            { name: 'fairy', dmg: 2 },
            { name: 'dragon', dmg: 2 },
            { name: 'ice', dmg: 2 },
            { name: 'water', dmg: 0.5 },
            { name: 'electric', dmg: 0.5 },
            { name: 'fire', dmg: 0.5 },
            { name: 'grass', dmg: 0.5 }

        ],
        'electric': [
            { name: 'steel', dmg: 0.5 },
            { name: 'electric', dmg: 0.5 },
            { name: 'ground', dmg: 2 },
            { name: 'flying', dmg: 0.5 }
        ],

        'bug': [
            { name: 'fire', dmg: 2 },
            { name: 'fighting', dmg: 0.5 },
            { name: 'grass', dmg: 0.5 },
            { name: 'rock', dmg: 2 },
            { name: 'ground', dmg: 0.5 },
            { name: 'flying', dmg: 2 }

        ],

        'steel': [
            { name: 'steel', dmg: 0.5 },
            { name: 'bug', dmg: 0.5 },
            { name: 'dragon', dmg: 0.5 },
            { name: 'fire', dmg: 2 },
            { name: 'fairy', dmg: 0.5 },
            { name: 'ice', dmg: 0.5 },
            { name: 'fighting', dmg: 2 },
            { name: 'normal', dmg: 0.5 },
            { name: 'grass', dmg: 0.5 },
            { name: 'psychic', dmg: 0.5 },
            { name: 'rock', dmg: 0.5 },
            { name: 'ground', dmg: 2 },
            { name: 'poison', dmg: 0 },
            { name: 'flying', dmg: 0.5 }
        ],

        'water': [
            { name: 'steel', dmg: 0.5 },
            { name: 'ice', dmg: 0.5 },
            { name: 'water', dmg: 0.5 },
            { name: 'electric', dmg: 2 },
            { name: 'fire', dmg: 0.5 },
            { name: 'grass', dmg: 2 }
        ],

        'ghost': [
            { name: 'bug', dmg: 0.5 },
            { name: 'ghost', dmg: 2 },
            { name: 'fighting', dmg: 0 },
            { name: 'normal', dmg: 0 },
            { name: 'dark', dmg: 2 },
            { name: 'steel', dmg: 0.5 },
            { name: 'poison', dmg: 0.5 }
        ],

        'fire': [
            { name: 'steel', dmg: 0.5 },
            { name: 'water', dmg: 2 },
            { name: 'bug', dmg: 0.5 },
            { name: 'fire', dmg: 0.5 },
            { name: 'fairy', dmg: 0.5 },
            { name: 'ice', dmg: 0.5 },
            { name: 'grass', dmg: 0.5 },
            { name: 'rock', dmg: 2 },
            { name: 'ground', dmg: 2 }
        ],

        'fairy': [
            { name: 'steel', dmg: 2 },
            { name: 'bug', dmg: 0.5 },
            { name: 'dragon', dmg: 0 },
            { name: 'fighting', dmg: 0.5 },
            { name: 'dark', dmg: 0.5 },
            { name: 'poison', dmg: 2 }
        ],

        'ice': [
            { name: 'steel', dmg: 2 },
            { name: 'fire', dmg: 2 },
            { name: 'ice', dmg: 0.5 },
            { name: 'fighting', dmg: 2 },
            { name: 'rock', dmg: 2 }
        ],

        'fighting': [
            { name: 'bug', dmg: 0.5 },
            { name: 'fairy', dmg: 2 },
            { name: 'psychic', dmg: 2 },
            { name: 'rock', dmg: 0.5 },
            { name: 'dark', dmg: 0.5 },
            { name: 'flying', dmg: 2 }
        ],

        'normal': [
            { name: 'ghost', dmg: 0 },
            { name: 'fighting', dmg: 2 }
        ],



        'psychic': [
            { name: 'bug', dmg: 2 },
            { name: 'ghost', dmg: 2 },
            { name: 'fighting', dmg: 0.5 },
            { name: 'psychic', dmg: 0.5 },
            { name: 'dark', dmg: 2 },
        ],

        'rock': [
            { name: 'steel', dmg: 2 },
            { name: 'water', dmg: 2 },
            { name: 'fire', dmg: 0.5 },
            { name: 'fighting', dmg: 2 },
            { name: 'normal', dmg: 0.5 },
            { name: 'grass', dmg: 2 },
            { name: 'ground', dmg: 2 },
            { name: 'poison', dmg: 0.5 },
            { name: 'flying', dmg: 0.5 },
        ],

        'dark': [
            { name: 'bug', dmg: 2 },
            { name: 'ghost', dmg: 0.5 },
            { name: 'fairy', dmg: 2 },
            { name: 'fighting', dmg: 2 },
            { name: 'psychic', dmg: 0 },
            { name: 'dark', dmg: 0.5 },
        ],

        'ground': [
            { name: 'water', dmg: 2 },
            { name: 'electric', dmg: 0 },
            { name: 'ice', dmg: 2 },
            { name: 'grass', dmg: 2 },
            { name: 'rock', dmg: 0.5 },
            { name: 'water', dmg: 0.5 },
        ],

        'grass': [
            { name: 'water', dmg: 0.5 },
            { name: 'bug', dmg: 2 },
            { name: 'electric', dmg: 0.5 },
            { name: 'fire', dmg: 2 },
            { name: 'ice', dmg: 2 },
            { name: 'grass', dmg: 0.5 },
            { name: 'ground', dmg: 0.5 },
            { name: 'poison', dmg: 2 },
            { name: 'flying', dmg: 2 }
        ],

        'poison': [
            { name: 'bug', dmg: 0.5 },
            { name: 'fairy', dmg: 0.5 },
            { name: 'fighting', dmg: 0.5 },
            { name: 'grass', dmg: 0.5 },
            { name: 'psychic', dmg: 2 },
            { name: 'ground', dmg: 2 },
            { name: 'poison', dmg: 0.5 },
        ],

        'flying': [
            { name: 'bug', dmg: 0.5 },
            { name: 'electric', dmg: 2 },
            { name: 'ice', dmg: 2 },
            { name: 'fighting', dmg: 0.5 },
            { name: 'grass', dmg: 0.5 },
            { name: 'rock', dmg: 2 },
            { name: 'ground', dmg: 0 },
        ]
    }

    return damage;

}