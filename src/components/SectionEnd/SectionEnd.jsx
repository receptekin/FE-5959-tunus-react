import React from 'react'
import AppCard from '../Card/Card'

function SectionEnd() {

    const cards = [
        {
            img: "https://r.resimlink.com/28SKi.jpg",
            title: "HAMMAMET KEŞFİ",
            paragraf: "Hammamet milattan öncesinden beri bir yerleşim bölgesi. 1. yüzyılda Pupput diye bilinen bir yerleşke iken 2. yüzyılda bir Roma kolonisi haline gelmiş."
        },
        {
            img: "https://r.resimlink.com/INPmWOFAL.webp",
            title: "EL JEM İNANILMAZ",
            paragraf: "El Jem, dünyadaki en büyük amfitiyatrolardan biri. Buranın Roma İmparatorluğu'na ait olduğu MS 230 civarında inşaa edilmiş ve dünyadaki en iyi korunmuş Roma İmparatorluğu kalıntılarından biri."
        },
        {
            img: "https://r.resimlink.com/6IFR0ibdOmWh.jpg",
            title: "EĞLENCE MEKANLARI ",
            paragraf: "Tunus'un başkenti ve Tunus ilinin merkezi olan şehir ve belediyedir. Tunus şehri sınırları dışında bulunan ve Tunus'un etrafında şehirleşmiş metropoliten varoşları ile birlikte Tunus şehri Büyük Tunus olarak anılmaktadır."
        },
        {
            img: "https://r.resimlink.com/2SQLe.jpg",
            title: "MERKEZ ÇARŞISI",
            paragraf: "Şehrin ekonomisi tarım ve ticaret üzerine kurulmuş. Sfax ayrıca ülkeyle aynı isimdeki Tunus şehrinden sonra ülkedeki ikinci en büyük şehir."
        },
        {
            img: "https://r.resimlink.com/c75InV3SPi.jpg",
            title: "HABİB BURGİBA",
            paragraf: "Munastır, Tunus'ta bir kent ve turizm merkezidir. Aynı zamanda geleneksel bir balıkçılık merkezidir"
        },
        {
            img: "https://r.resimlink.com/UzyGsK4NWb.jpg",
            title: "BİZERTE ",
            paragraf: "Binzert, Bizerte ya da Bizerta Tunus'ta bir kent ve Bizerte vilayetinin merkezidir. "
        },

    ];
    return (
        <div style={{ backgroundColor: 'aliceblue' }} className='section pt-2'>
            <div className='pt-4'>
                <div className='container px-lg-5'>
                    <div className='row gx-lg-5'>
                        {cards.map((card, index) => (
                            <div className='col-lg-6 col-xxl-4 mb-5' key={index}>
                                <AppCard img={card.img} title={card.title} paragraf={card.paragraf} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionEnd