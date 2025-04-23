import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <NavLink
                to="/modules"
                className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                }
            >
                Cat by Modules
            </NavLink>
            <NavLink
                to="/sass"
                className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                }
            >
                Cat by Sass
            </NavLink>
            <NavLink
                to="/styled"
                className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                }
            >
                Cat by Styled Components
            </NavLink>
        </nav>
    );
};

export default Navbar;
