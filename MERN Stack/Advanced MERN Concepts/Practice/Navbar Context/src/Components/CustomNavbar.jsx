import React, { useContext } from 'react';
import { NameContext } from '../Context/NameContext';

const CustomNavbar = () => {
    const { name } = useContext(NameContext);

    return (
        <div>
            <nav className="d-flex justify-content-end bg-warning p-3">
                    <h1>Hi, {name}!</h1>
            </nav>
        </div>
    );
}

export default CustomNavbar;
