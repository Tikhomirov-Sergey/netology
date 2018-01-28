const assert = require('chai').assert;
const Pokemon = require('../app/modules/PokemonList').Pokemon;

describe('Pokemon', () => {

    it('Метод show срабатывает без ошибки', () => {
        const pokemon = new Pokemon('Пикачу', '4');
        pokemon.show();
    });

    it('В конструторе Pokemon не заданны аргументы, метод show срабатывает без ошибки', () => {
            const pokemon = new Pokemon();
            pokemon.show();
    });

    it('В конструторе Pokemon задан один аргумент, метод show срабатывает без ошибки', () => {
            const pokemon = new Pokemon('Пикачу');
            pokemon.show();
    });
});
