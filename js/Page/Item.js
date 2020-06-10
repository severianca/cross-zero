define(['js/Base/Component.js'],
function(Component) {

    class Item extends Component {
        render({item}) {
            return `
                <div class="item" name ="${item}"></div>`;
        }
    }
    return Item;
});