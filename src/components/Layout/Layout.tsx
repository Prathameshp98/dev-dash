
import LayoutProps from './Layout.d';
import styles from './Layout.module.css';

import Menu  from '../../../src/assets/menu.png';

const Layout = ({
    children
}: LayoutProps) => {

    return (
        <div>
            <div className={styles.header}>
                <div className={styles.headerInner}>
                    <h1>DevDash</h1>
                    <img 
                        src={Menu}
                        alt='menu'
                    />
                </div>
            </div>
            {children}
            <div className={styles.footer}>
                <div className={styles.footerInner}>
                    <p>&copy;Copyright. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Layout;