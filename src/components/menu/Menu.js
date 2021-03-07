import { useState } from 'react';
import imgDashboard from '../../images/dashboard.png';
import imgHeart from '../../images/heart.png';
import data from '../../data/menu.json';
import MenuItem from './MenuItem.js';
import '../../styles/Menu.css';

function Menu() {
    const images = [imgDashboard, imgHeart, imgDashboard, imgHeart, imgDashboard, imgHeart];
    const [activeItemIndex, setActiveItemIndex] = useState(0);

    return (
        <div className="menu">
            {data.map((item, index) => {
                const itemData = {
                    title: item.name,
                    img: images[index],
                    isActive: activeItemIndex === index
                }

                return <MenuItem key={index} itemData={itemData} handleClick={() => setActiveItemIndex(index)} />
            })}
        </div>
    );
}

export default Menu;
