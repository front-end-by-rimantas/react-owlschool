import Logo from '../logo/Logo.js';
import Menu from '../menu/Menu.js';
import '../../styles/AsideMenu.css';

function AsideMenu() {
    return (
        <div className="aside-menu">
            <Logo />
            <Menu />
        </div>
    );
}

export default AsideMenu;
