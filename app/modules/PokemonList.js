class Pokemon {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }
    show() {
        console.log(`Hi! My name is ${this.name}, my level is ${this.level}`);
    }
    valueOf(){
        return this.level;
    }
}


class Pokemonlist extends Array{
    constructor(...items){
        items = items.filter(
            item => item instanceof Pokemon
        );
        super(...items);
    }
    add(name,level){
        let newPokemon = new Pokemon(name,level);
        this.push(newPokemon);
    }
    show(){
        this.forEach(function(item){
            item.show();
        });
        console.log(`There are ${this.length} pokemons here.`);
    }
    maxOld(){
        let strongestPokemon = Math.max(...this);
        return this.find(
            item => item.level==strongestPokemon
        );
    }

    max(){

        if(this.length > 0) {
            let strongestPokemon = this[0];

            this.forEach((item) => {
                if(strongestPokemon < item.level)
                    strongestPokemon = item.level;
            });

            return this.find(
                item => item.level == strongestPokemon
            );

        } else {
            throw ('Пустой массив');
        }
    }
}

module.exports = { Pokemon , Pokemonlist };