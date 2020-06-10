define(['js/Base/Component.js', 'js/Page/Item.js'], 
function(Component, Item){
    class Content extends Component {
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
                    <div class="content_hint" >Нажмите кнопку "старт" для начала игры</div>
                    <div class="game_field">
                        ${items.map((item) => this.childrens.create(Item, {item})).join('\n')}
                    </div>
                    <button class="button-game-control">старт</button>
                </div>
                <div class="content_table">

                </div>
            </div>`;
        }
    }
    return Content;
});