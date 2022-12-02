import React from 'react'
import l2 from '../../../assets/l2.jpg'
import PurchaseCard from '../Components/PurchaseCard'

const Physiotherapy = () => {
    return (
        <>
            <div className='row py-3'>
                <div className="col-sm-12 text-center my-4">
                    <h2 style={{ fontWeight: 'bold' }}>Physiotherapy</h2>
                </div>
                <div className="speechTherapy__img col-sm-6 p-3" style={{ height: '400px' }}>
                    <img src={l2} alt="speech-therapy" style={{ width: '100%', height: '100%', borderRadius: '20px' }} />
                </div>
                <div className="speechTherapy__info col-sm-6 p-3 d-flex" style={{ fontSize: '14px', fontWeight: '500' }}>
                    <div className='my-auto'>
                        <p >Physical therapists evaluate and provide intervention for children
                            and adults, aged birth through adolescence and beyond, who are experiencing
                            developmental delays or functional Limitations as a
                            result of a disorder, trauma, injury, or other disease process.</p>
                        <p>At SPHECHO we address the following diagnoses; Developmental
                            Delays (Gross Motor Skills), Balance / Coordination Issues, Torticollis,
                            Plagiocephaly, Cerebral Palsy, Down's syndrome, Spina Bifida,
                            Gait Abnormalities.</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <p>Some of the skills we address are:</p>

                <ul style={{marginLeft:'14px'}}>
                    <li>Promoting achievement of developmental milestones such as rolling</li>
                    <li>Crawling and walking for infants and toddlers</li>
                    <li>Improving balance and coordination skills through play</li>
                    <li>Providing stretching and strengthening exercises</li>
                    <li>Providing splinting and serial casting to maximize muscle and joint function</li>
                    <li>Assisting families in obtaining specialized equipment including custom wheelchairs</li>
                    <li>Trans-disciplinary management and treatment of spasticity</li>
                    <li>Gait training</li>
                </ul>

                <p>Our Physiotherapist provide individualized and age-appropriate approaches based on the need of every client/child.
                    Care for each child and adult is coordinated with the family, recognizing that the family is the center of the individual’s life.</p>
            </div>

            <div className="row">
                <div className="col-sm-12 text-center my-4">
                    <span style={{ fontWeight: 'bold' }}>DO YOU WANT TO KNOW MORE ABOUT OUR PRICING?</span>
                </div>

                <div style={{ marginTop: '40px' }}>
                    <PurchaseCard title="Pediatric Physiotherapy Service" numberOfCard={2} />
                </div>
                <div style={{ marginTop: '40px' }}>
                    <PurchaseCard title="Adult Physiotherapy Service" numberOfCard={2} />
                </div>
            </div>

        </>
    )
}

export default Physiotherapy