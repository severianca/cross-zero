define(['js/Base/Component.js'], 
function(Component){
    class Header extends Component {
        render() {
            return `
            <header>
                <div class="header">
                    <div class="header_title">игра в крестики нолики</div>
                </div>
            </header>`;
        }
    }
    return Header;
});