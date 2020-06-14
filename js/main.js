'use strict';

define(['js/Base/Component.js', 'js/Page/Page.js', 'js/Game.js'],
function(Component, Page, Game) {

    Component.prototype.generateId = function() {
        return Math.random().toString(32).slice(2);
        };

    const page = factory.create(Page);
    page.mount(document.body);

    let hint = document.getElementById("hint");

    let buttonGameControl = document.getElementById('button-game-control');
    buttonGameControl.addEventListener('click', clickOnButtonGameControl);

    let itemsTableGame = document.getElementsByName('item');

    let game = new Game();

    /**
     * Обработчик клика на кнопку
     */
    function clickOnButtonGameControl() {
        buttonGameControl.innerHTML = "НАЧАТЬ ЗАНОВО";
        hint.innerHTML = "Погнали";
        itemsTableGame.forEach(item => {
            item.addEventListener('click', clickOnItemTableGame);
        });
        game.zeroing();
        if (game.getFirstMovePlayer()){
            game.setFirstMovePlayer(false);
        }
        else{
            game.setFirstMovePlayer(true);
            game.actionAI();
            if (checkGameOver(2)){
                tableGameIsNotActivForPlayer();
            }
        }
    }

    /**
     * Обработчик клика на поле
     */
    function clickOnItemTableGame() {
        // определим на какой элемент поля кликнули
        let idItemAIClick = event.currentTarget.id;
        if (game.actionPlayer(idItemAIClick)){
            if (checkGameOver(1)){
                tableGameIsNotActivForPlayer();
            }
            else {
                game.actionAI();
                if (checkGameOver(2)){
                    tableGameIsNotActivForPlayer();
                }
            }
        }
    }

    /**
    * Дезактивация игрового поля для клика пользователем
    */
    function tableGameIsNotActivForPlayer() {
    itemsTableGame.forEach(item => {
        item.removeEventListener('click', clickOnItemTableGame);
        });
    }

    /**
    * Проверка игры на её окончание
    * Возвращает true если игра окончена
    * @param {String} id 1-проверка победы игрока, 2-проверка победы ИИ
    */
    function checkGameOver(id){
        if (game.checkForVictory(id)){
            if (id == 2){
                hint.innerHTML = "Проигрыш";
                addResultGameInTable("1_0");
                return true;
            }
            else {
                hint.innerHTML = "Победа";
                addResultGameInTable("0_1");
                return true;
            }
        }
        if (game.checkForEndOfGame()){
            hint.innerHTML = "Ничья";
            addResultGameInTable("0_0");
            return true;
        }
        return false;
    }

    /**
    * Добавляет результат игры в таблицу
    * @param {String} result результат вида 0_0, где первым нулем указывается результат ИИ,а вторым игрока 
    */
    function addResultGameInTable(result){
        let tbody = document.getElementById("table");
        let row = document.createElement("TR");
        let td1 = document.createElement("TD");
        td1.className = "td";
        td1.appendChild(document.createTextNode(result[0]));
        let td2 = document.createElement("TD");
        td2.className = "td";
        td2.appendChild (document.createTextNode(result[2]));
        row.appendChild(td1);
        row.appendChild(td2);
        tbody.appendChild(row);
    }
});