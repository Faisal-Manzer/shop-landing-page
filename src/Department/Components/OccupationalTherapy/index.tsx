import React from 'react'
import l2 from '../../../assets/l2.jpg'
import PurchaseCard from '../Components/PurchaseCard'

const OccupationalTherapy = () => {
    return (
        <>
            <div className='row py-3'>
                <div className="col-sm-12 text-center my-4">
                    <h2 style={{ fontWeight: 'bold' }}>Occupational Therapy</h2>
                </div>
                <div className="speechTherapy__img col-sm-6 p-3" style={{height:'300px'}}>
                    <img src={l2} alt="speech-therapy" style={{ width: '100%', height: '100%', borderRadius: '20px' }} />
                </div>
                <div className="speechTherapy__info col-sm-6 p-3 d-flex" style={{ fontSize: '14px', fontWeight: '500'}}>
                    <p className='my-auto'>The goal of occupational therapy is to improve the child's functional
                        performance in both the home and the classroom. Occupational
                        therapy can aid in enhancing handwriting, daily living activities, visual-
                        motor integration, postural control, sensory processing, and
                        gross and fine motor skills. Assessments are conducted prior to intervention
                        utilizing testing and clinical observations. To maximize
                        function, a variety of therapeutic techniques are used.</p>

                </div>
            </div>

            <div className="row">
                <div className="col-sm-12 text-center my-4">
                    <span style={{ fontWeight: 'bold' }}>DO YOU WANT TO KNOW MORE ABOUT OUR PRICING?</span>
                </div>

                <div style={{ marginTop: '40px' }}>
                    <PurchaseCard title="Pediatric Occupational Therapy Fees" numberOfCard={2} />
                </div>
                <div style={{ marginTop: '40px' }}>
                    <PurchaseCard title="Adult Occupational Therapy Fees" numberOfCard={2} />
                </div>
            </div>

        </>
    )
}

export default OccupationalTherapy