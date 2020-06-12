define(['js/Base/Component.js', 'js/Page/Header.js', 'js/Page/GameBlock.js'],
function(Component, Header, GameBlock) {
    /**
     * класс страницы
     */
    class Page extends Component {
        render({title}) {
            return `
                <div class="wraper">
                    ${this.childrens.create(Header)}
                    ${this.childrens.create(GameBlock)}
                </div>`;
        }
    }
    return Page;
});