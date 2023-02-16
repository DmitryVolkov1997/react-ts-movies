import styles from './Footer.module.scss';
import {IoLogoSlack} from 'react-icons/io'

interface FooterProps {}
export const Footer = ({ }: FooterProps) => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerInner}>
                    <IoLogoSlack className={styles.footerLogo}/>
                    <p className={styles.footerCopy}>Copyright © 2023</p>
                </div>
            </div>
        </footer>
    )
}


