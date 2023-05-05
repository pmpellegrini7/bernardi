import React from 'react';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

function MobileMenuButton({ toggleMenu, showMenu }) {
    return (
        <button
            className="sm:hidden absolute top-0 right-0 h-20 w-20 flex justify-center z-20 items-center"
            onClick={toggleMenu}
            >
            {showMenu ? <CloseOutlined /> : <MenuOutlined />}
        </button>
    );
}

export default MobileMenuButton;