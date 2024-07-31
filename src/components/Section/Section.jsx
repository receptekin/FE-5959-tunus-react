import React from 'react';
import AppCard from '../Card/Card';
import styles from './Section.module.scss';
import { BsLuggage, BsBusFront, BsCameraReels, BsBuildings, BsCake, BsCupHot } from "react-icons/bs";

export default function Section() {
    const cards = [
        {
            img: "https://r.resimlink.com/At_kPKRn.webp",
            title: "HAMMAMET",
            paragraf: "Hammamet milattan öncesinden beri bir yerleşim bölgesi. 1. yüzyılda Pupput diye bilinen bir yerleşke iken 2. yüzyılda bir Roma kolonisi haline gelmiş.",
            icon: BsLuggage
        },
        {
            img: "https://r.resimlink.com/eJEQyF.jpg",
            title: "EL JEM",
            paragraf: "El Jem, dünyadaki en büyük amfitiyatrolardan biri. Buranın Roma İmparatorluğu'na ait olduğu MS 230 civarında inşaa edilmiş ve dünyadaki en iyi korunmuş Roma İmparatorluğu kalıntılarından biri.",
            icon: BsBusFront
        },
        {
            img: "https://r.resimlink.com/RkKjHwLYt.jpg",
            title: "KAYRAVAN",
            paragraf: "Arap General Ukbe bin Nafi, Kayravan ordugâh şehrini kurduktan sonra 670'te burada bir de cami inşa ettirmiştir. Birçok müdahale geçiren cami 726'da Halife I. Hişam'ın yaptırdığı yeniliklerle aşağı yukarı bugünkü plan özelliklerini kazanmıştır.",
            icon: BsCameraReels
        },
        {
            img: "https://r.resimlink.com/3IVcU8Ka.jpg",
            title: "SFAX",
            paragraf: "Şehrin ekonomisi tarım ve ticaret üzerine kurulmuş. Sfax ayrıca ülkeyle aynı isimdeki Tunus şehrinden sonra ülkedeki ikinci en büyük şehir.",
            icon: BsBuildings
        },
        {
            img: "https://r.resimlink.com/k6Bv_KTJF8Mp.jpg",
            title: "MUNASTIR",
            paragraf: "Munastır, Tunus'ta bir kent ve turizm merkezidir. Aynı zamanda geleneksel bir balıkçılık merkezidir.",
            icon: BsCake
        },
        {
            img: "https://r.resimlink.com/UzyGsK4NWb.jpg",
            title: "BİZERTE",
            paragraf: "Binzert, Bizerte ya da Bizerta Tunus'ta bir kent ve Bizerte vilayetinin merkezidir.",
            icon: BsCupHot
        },
    ];

    return (
        <div className={styles.section}>
            <div className='pt-4'>
                <div className='container px-lg-5'>
                    <div className='row gx-lg-5'>
                        {cards.map((card, index) => (
                            <div className='col-lg-6 col-xxl-4 mb-5' key={index}>
                                <AppCard img={card.img} title={card.title} paragraf={card.paragraf} Icon={card.icon} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
