import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <NavLink to='/'>Home &nbsp;</NavLink>
            <NavLink to='/Example1'>Example1 &nbsp;</NavLink>
            <NavLink to='/Example2'>Example2 &nbsp;</NavLink>
            <NavLink to='/ObjectLiterals'>ObjectLiterals &nbsp;</NavLink>
        </div>
    );
}

export default Navigation;
