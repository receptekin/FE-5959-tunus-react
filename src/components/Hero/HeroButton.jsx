import React from 'react';
import styles from './HeroButton.module.scss';

function HeroButton() {
    return (
        <div>
            <button className={styles.hbtn}>
                <span className={styles.text}>TUNUS</span>
                <span className={styles.clonedText}>SENİ BEKLİYOR</span>
            </button>
        </div>
    );
}

export default HeroButton;