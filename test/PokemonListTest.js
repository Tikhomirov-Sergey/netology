const assert = require('chai').assert;
const PokemonList = require('../app/modules/PokemonList').Pokemonlist;
const Pokemon = require('../app/modules/PokemonList').Pokemon;

describe('PokemonList', () => {

    describe('Конструктор', () => {
        it('Не возникает ошибка, если в конструктор переданы некорректные аргументы', () => {
            const pokemonList = new PokemonList(4, true, 6, 'd');
        });

        it('Если в конструктор передан аргумент класса Pokemon, то он становится элементом массива', () => {

            let name = 'Pikachu';
            let level = 2;

            const pokemon = new Pokemon(name, level);
            const pokemonList = new PokemonList(pokemon);

            assert.deepEqual(pokemonList[0], { name, level});
        });
    });

    let pokemonList;

    before(() => {
        pokemonList = new PokemonList();
    });

    describe('Метод add', () => {

        it('Метод add добавляет новый элемент к массиву', () => {

            let name = 'Pikachu';
            let level = 2;

            pokemonList.add(name, level);

            assert.deepEqual(pokemonList[0], { name, level});
        });

        it('Метод add не вызывает ошибки, если в него не передан ни один аргумент', () => {
            pokemonList.add();
        });

    });

    describe('Метод show', () => {

        it('Метод show работает без ошибок', () => {
            let name = 'Pikachu';
            let level = 2;

            pokemonList.add(name, level);
            pokemonList.show();
        });

        it('Метод show работает без ошибок, если массив пустой', () => {
            pokemonList.show();
        });

    });

    describe('Метод max', () => {

        it('Метод max выводит покемона с максамальным уровнем', () => {
            pokemonList.add('Pikachu', 10);
            pokemonList.add('Pikachu', 2);

            let max = pokemonList.max();

            assert.deepEqual(max, {
                name: 'Pikachu',
                level: 10
            });
        });

        it('Метод max выводит ошибку, если массив пустой', () => {
            let pokemons = new PokemonList();

            let active = () => {
                pokemons.max();
            };

            assert.throw(active)
        });

        it('Старый метод max работает без ошибки', () => {
            let max = pokemonList.maxOld();

            assert.deepEqual(max, {
                name: 'Pikachu',
                level: 10
            });
        })
    });
});
