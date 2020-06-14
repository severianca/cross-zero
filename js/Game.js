define([],
function() {

    class Game {

        firstMovePlayer = true;
        countFreeItem = 9;

        constructor(){
            this.tableGame = [];
            for (let i=0; i<3; i++){
                this.tableGame[i] = [];
                for (let j=0; j<3; j++){
                    this.tableGame[i][j] = 0;
                }
            }
        }

        getFirstMovePlayer(){
            return this.firstMovePlayer;
        }

        setFirstMovePlayer(bool){
            this.firstMovePlayer = bool;
        }

        /**
        * Поле обнуляется
        */
        zeroing(){
            for (let i=0; i<3; i++){
                for (let j=0; j<3; j++){
                    this.tableGame[i][j] = 0;
                }
            }
            let imgs = document.getElementsByName('img');
            let length = imgs.length;
            for (let i=0; i<length; i++){
                imgs[0].remove();
            }

            this.countFreeItem = 9;
        }

        /**
        * ИИ делает ход
        */
        actionAI(){
            for (let i=0; i<3; i++){
                for (let j=0; j<3; j++){
                    if (this.tableGame[i][j] ==0){
                        this.tableGame[i][j] = 2;
                        this.countFreeItem--;
                        this.addImageZero(i+"_"+j);
                        return;
                    }
                }
            }
        }

        /**
        * Игрок делает ход
        * возвращает true если ход корректный
        * @param {String} idItemPlayerClick id поля на которое кликнул пользователь, вида 0_0
        */
        actionPlayer(idItemPlayerClick) {
            let i = Number(idItemPlayerClick[0]);
            let j = Number(idItemPlayerClick[2]);
            if (this.tableGame[i][j] == 0){
                this.tableGame[i][j] = 1;
                this.countFreeItem--;
                this.addImageCross(idItemPlayerClick);
                return true;
            }
            else {
                return false;
            }
        }

        addImageCross(idItemClick){
            let img = new Image();
            img.src = "img/cross.png";
            img.height = 48;
            img.width = 48;
            img.name = "img";
            let itemPlayerClick = document.getElementById(idItemClick);
            itemPlayerClick.appendChild(img);
        }

        addImageZero(idItemClick){
            let img = new Image();
            img.src = "img/zero.png";
            img.height = 48;
            img.width = 48;
            img.name = "img";
            let itemPlayerClick = document.getElementById(idItemClick);
            itemPlayerClick.appendChild(img);
        }

        /**
        * Проверка игры на победу enemy
        * Возвращает true если игра окончена
        * @param {String} enemy принимает число 1 или 2, где 1 - игрок, 2 - ИИ
        */
        checkForVictory(enemy){
            if ((this.tableGame[0][0] == enemy && this.tableGame[0][1] == enemy && this.tableGame[0][2] == enemy) ||
                (this.tableGame[1][0] == enemy && this.tableGame[1][1] == enemy && this.tableGame[2][2] == enemy) ||
                (this.tableGame[2][0] == enemy && this.tableGame[2][1] == enemy && this.tableGame[2][2] == enemy) ||
                (this.tableGame[0][0] == enemy && this.tableGame[1][1] == enemy && this.tableGame[2][2] == enemy) ||
                (this.tableGame[0][2] == enemy && this.tableGame[1][1] == enemy && this.tableGame[2][0] == enemy) ||
                (this.tableGame[0][0] == enemy && this.tableGame[1][0] == enemy && this.tableGame[2][0] == enemy) ||
                (this.tableGame[0][1] == enemy && this.tableGame[1][1] == enemy && this.tableGame[2][1] == enemy) ||
                (this.tableGame[0][2] == enemy && this.tableGame[1][2] == enemy && this.tableGame[2][2] == enemy)){

                return true;
            }
            else {
                return false;
            }
        }

        checkForEndOfGame() {
            if (this.countFreeItem == 0){
                return true;
            }
            else {
                return false;
            }
        }
    }
    return Game; 

});