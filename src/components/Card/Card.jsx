import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './Card.module.css';

function AppCard({ img, title, paragraf, Icon }) {
    return (
        <Card style={{ width: '100%', height: '100%' }} className={`mw-100 bg-light col-md-12 d-flex justify-content-center p-4 p-lg-5 pt-0 pt-lg-0 ${styles.card}`}>
            <Card.Img className={styles.cardImage} variant="top" src={img} />
            <Card.Body className="d-flex flex-column">
                <Card.Title className={styles.cardTitle}>{title}</Card.Title>
                <Card.Text className={`flex-grow-1 ${styles.cardText}`}>
                    {paragraf}
                </Card.Text>
                {Icon && <Icon className={styles.cardIcon} />}

                <Button variant="primary" className="mt-auto">Hemen İncele</Button>
            </Card.Body>
        </Card>
    );
}

export default AppCard;