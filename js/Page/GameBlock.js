define(['js/Base/Component.js', 'js/Page/Item.js'], 
function(Component, Item){
    class GameBlock extends Component {
        render() {
            var items = new Array();
            var a=0;
            for (let i=0; i<3; i++){
                for (let j=0; j<3; j++){
                    items[a]=i+"_"+j;
                    a++;
                }
            }
            return `
            <div class="content">
                <div class="content_game">
                    <div class="content_hint" id="hint">Нажмите кнопку СТАРТ для начала игры</div>
                    <div class="game_field">
                        ${items.map((item) => this.childrens.create(Item, {item})).join('\n')}
                    </div>
                    <button class="button-game-control" id="button-game-control">СТАРТ</button>
                </div>
                <div class="content_table">
                    <table class="table-wins" id="table">
                        <caption>Список побед</caption>
                        <tr class="tr">
                            <td class="td">ИИ</td>
                            <td class="td">игрок</td>
                        </tr>
                    </table>
                </div>
            </div>`;
        }
    }
    return GameBlock;
});