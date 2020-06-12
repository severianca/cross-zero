'use strict';

define(['js/Base/Component.js', 'js/Page/Page.js', 'js/Game.js'],
function(Component, Page, Game) {

    Component.prototype.generateId = function() {
        return Math.random().toString(32).slice(2);
        };

    const page = factory.create(Page);
    page.mount(document.body);

    let hint = document.getElementById("hint");

    let gameStart = false;

    let buttonGameControl = document.getElementById('button-game-control');
    buttonGameControl.addEventListener('click', clickOnButtonGameControl);

    let itemsTableGame = document.getElementsByName('item');

    let game = new Game();

    /**
     * Обработчик клика на кнопку
     */
    function clickOnButtonGameControl() {
            game.start();
            buttonGameControl.innerHTML = "НАЧАТЬ ЗАНОВО";
            hint.innerHTML = "Погнали";
            itemsTableGame.forEach(item => {
                item.addEventListener('click', clickOnItemTableGame);
            });
    }

    /**
     * Обработчик клика на поле
     */
    function clickOnItemTableGame() {
        // определим на какой элемент поля кликнули
        let idItemAIClick = event.currentTarget.id;
        game.actionPlayer(idItemAIClick);
    }
});