define(['js/Base/Component.js', 'js/Page/Header.js', 'js/Page/Game.js'],
function(Component, Header, Game) {
    /**
     * класс страницы
     */
    class Page extends Component {
        render({title}) {
            return `
                <div class="wraper">
                    ${this.childrens.create(Header)}
                    ${this.childrens.create(Game)}
                </div>`;
        }
    }
    return Page;
});