import '../../styles/MenuItem.css';

function MenuItem(props) {
    const { itemData, handleClick } = props;
    const { title, img, isActive } = itemData;

    return (
        <div className={'item' + (isActive ? ' active' : '')} onClick={() => handleClick()}>
            <img className="icon" src={img} alt="" />
            <div className="name">{title}</div>
        </div>
    );
}

export default MenuItem;
