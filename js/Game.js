define(['js/Base/Component.js'],
function(Component) {

    class Game extends Component {

        firstMovePlayer = true;
        hint = document.getElementById("hint");
        countFreeItem = 9;

        constructor(){
            super();
            this.tableGame = [];
            for (let i=0; i<3; i++){
                this.tableGame[i] = [];
                for (let j=0; j<3; j++){
                    this.tableGame[i][j] = 0;
                }
            }
        }

        /**
        * Процесс игры
        */
        start() {
            this.zeroing();
            //если первый ход игрока
            if (this.firstMovePlayer){
                //то в следюущий раз первым ходит ИИ
                this.firstMovePlayer = false;
            }
            else {
                //то в следюущий раз первым ходит игрок
                this.actionAI();
            }
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
                        if (this.checkForVictory(2)){
                            this.hint.innerHTML = "Победа ИИ";
                            return;
                        }
                        if (this.checkForEndOfGame()){
                            this.hint.innerHTML = "Ничья";
                            return;
                        }
                        return;
                    }
                }
            }
        }

        /**
        * Игрок делает ход
        * @param {String} idItemPlayerClick id поля на которое кликнул пользователь, вида 0_0
        */
        actionPlayer(idItemPlayerClick) {
            let i = Number(idItemPlayerClick[0]);
            let j = Number(idItemPlayerClick[2]);
            if (this.tableGame[i][j] == 0){
                this.tableGame[i][j] = 1;
                this.countFreeItem--;
                if (this.checkForVictory(1)){
                    this.hint.innerHTML = "Победа";
                    return;
                }
                if (this.checkForEndOfGame()){
                    this.hint.innerHTML = "Ничья";
                    return;
                }
                this.actionAI();
            }
        }

        // /**
        // * Дезактивация игрового поля для клика пользователем
        // */
        // tableGameIsNotActivForPlayer(){
        // this.itemsTableGame.forEach(item => {
        //     item.removeEventListener('click', this.clickOnItemTableGame);
        //     });
        // }

        checkForVictory(a){
            if ((this.tableGame[0][0] == a && this.tableGame[0][1] == a && this.tableGame[0][2] == a) ||
                (this.tableGame[1][0] == a && this.tableGame[1][1] == a && this.tableGame[2][2] == a) ||
                (this.tableGame[2][0] == a && this.tableGame[2][1] == a && this.tableGame[2][2] == a) ||
                (this.tableGame[0][0] == a && this.tableGame[1][1] == a && this.tableGame[2][2] == a) ||
                (this.tableGame[0][2] == a && this.tableGame[1][1] == a && this.tableGame[2][0] == a) ||
                (this.tableGame[0][0] == a && this.tableGame[1][0] == a && this.tableGame[2][0] == a) ||
                (this.tableGame[0][1] == a && this.tableGame[1][1] == a && this.tableGame[2][1] == a) ||
                (this.tableGame[0][2] == a && this.tableGame[1][2] == a && this.tableGame[2][2] == a)){

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