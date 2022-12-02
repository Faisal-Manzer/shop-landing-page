import React from 'react'

const l2 = "https://thumbs.dreamstime.com/b/wave-resonance-abstract-background-science-technology-modern-concept-virtual-reality-computer-space-text-133014149.jpg"

const Audiology = () => {
    return (
        <>
            <div className='row py-3'>
                <div className="col-sm-12 text-center my-4">
                    <h2 style={{ fontWeight: 'bold' }}>Audiology</h2>
                </div>

                <div className="row d-flex" style={{ padding: '0', height: '400px', borderRadius: '30px', boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px` }}>
                    <div className="d-flex flex-column align-items-center justify-content-center" style={{ flex: '1' }}>
                        <div style={{ padding: '60px' }}>
                            <h4 style={{ marginBottom: '30px' }}>
                                <b>Welcome to our online
                                    hearing screener</b>
                            </h4>
                            <p >With this online hearing screener,
                                it only takes a few minutes to find out how
                                well you’re hearing.</p>
                            <p style={{ marginTop: '30px' }} >You need headphones or earphones
                                for this test.</p>

                            <div style={{ marginTop: '20px' }}>
                                <button className='text-center' style={{ width: '100%', fontWeight: 'bold', border: 'none', backgroundColor: 'teal', color: 'white', cursor: 'pointer', borderRadius: '30px', padding: '10px 0px' }}>Let’s Start!</button>
                            </div>
                        </div>
                    </div>
                    <div className="" style={{ flex: '1' }}>
                        <img src={l2} alt="" style={{ borderRadius: '0px 30px 30px 0px', width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                </div>
            </div>

            <div className='row' style={{marginTop:'30px'}}>
                <p>residtient
                    centered evidence based best practice clinical service for all who are in communication and hearing needs. We have a professionally
                    qualified and certified, experienced audiology team who deliver diagnostic and rehabilitation service in a congenial environment.</p>

                <p>clients. SPHECHO’s audiologists is equipped with state-of-the-art advanced audiological equipment and uses a test battery to arrive at
                    clinical diagnosis. Audiological services at QISH includes case history taking, Pediatric Diagnostic test such as (Behavioral Observation
                    Audiomerty, Play Audiometry etc.), Pure tone Audiometry (PTA), Immitance Audiometry, Acoustic reflex, Otto acoustic emission, Hearing
                    Aid Trail and fitting, Verification and validation of hearing aid, REM etc.</p>

                <p>With the help of highly experienced and trained professionals we provide the following services at our regional audiology units:</p>
            </div>

            <div className="row" >
                <div className="col-sm-6 px-3">
                    <div style={{ backgroundColor: 'lightgrey', border: '1px solid grey', borderRadius: '20px', padding: '40px' }}>
                        <span style={{ fontSize: '16px', fontWeight: 'bold', marginLeft: '10px' }}>PAEDIATRIC DIAGNOSTIC TESTBATTERY COMPRISES OF THE FOLLOWING</span>
                        <ul>
                            <li>Behavioral Observation Audiometry</li>
                            <li>Conditioned Audiometry</li>
                            <li>Immittance Audiometry with Acoustic
                                reflexes</li>
                            <li>Oto Acoustic Emission</li>
                            <li>ABR</li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-6 px-3" >
                    <div style={{ backgroundColor: 'lightgrey', border: '1px solid grey', borderRadius: '20px', padding: '40px' }}>

                        <span style={{ fontSize: '16px', fontWeight: 'bold', marginLeft: '10px' }}>COMPREHENSIVE HEARING
                            EVALUATIONS</span>

                        <p style={{ marginLeft: '10px' }}>The following services are offered for adults along with Comprehensive hearing evaluation</p>
                        <ul>
                            <li>Pure tone Audiometry</li>
                            <li>Speech Audiometry</li>
                            <li>Immitance Audiometry with Acoustic
                                reflexes</li>
                            <li>ABR</li>
                        </ul>
                    </div>
                </div>

                <div className="col-sm-12 my-4">
                    <div className="row" style={{ backgroundColor: 'lightgrey', border: '1px solid grey', borderRadius: '20px', padding: '40px' }}>
                        <div className='col-sm-12'>
                            <span style={{ fontSize: '18px', fontWeight: 'bold', marginLeft: '10px' }}>PAEDIATRIC DIAGNOSTIC TEST BATTERY COMPRISES OF THE FOLLOWING</span>
                            <p style={{ marginTop: '20px', marginLeft: '10px' }}>Our other services for children and adults are as follows</p>
                            <ul className='mt-4'>
                                <li>Detection of infant hearing impairment</li>
                                <li>Hearing aid trial and fitting followed by aided Audiometry</li>
                                <li>Hearing aid bank for dispensing hearing aids</li>
                                <li>Hearing aid battery sales</li>
                                <li>Hearing aid evaluation and fitting</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>


            <div className='row py-3'>
                <div className="col-sm-12 text-center my-4">
                    <span style={{ fontWeight: 'bold' }}>
                        <b>HEARING FITTING AND TRIAL</b>
                    </span>
                </div>
                <div className="speechTherapy__img col-sm-6 p-3" >
                    <img src={l2} alt="speech-therapy" style={{ width: '100%', height: '100%', borderRadius: '20px' }} />
                </div>
                <div className="speechTherapy__info col-sm-6 p-3 d-flex" style={{ fontSize: '14px', fontWeight: '500' }}>
                    <div className="my-auto">
                        <p >A hearing aid is a small electronic device that you wear in or behind
                            your ear. It makes some sounds louder so that a person with hearing
                            loss can listen, communicate, and participate more fully in daily activities.
                            A hearing aid can help people hear more in both quiet and
                            noisy situations. However, only about one out of five people who
                            would benefit from a hearing aid uses one.</p>

                        <p>A hearing aid has three basic parts: a microphone, amplifier, and
                            speaker. The hearing aid receives sound through a microphone,
                            which converts the sound waves to electrical signals and sends
                            them to an amplifier. The amplifier increases the power of the signals
                            and then sends them to the ear through a speaker. Hearing aids
                            are primarily useful in improving the hearing and speech comprehension
                            of people who have hearing loss that results from damage
                            to the small sensory cells in the inner ear, called hair cells. This type
                            of hearing loss is called sensorineural hearing loss. The damage can
                            occur because of disease, aging, or injury from noise or certain
                            medicines.</p>
                    </div>
                </div>
            </div>

            <div className="row py-3" >
                <p>A hearing aid magnifies sound vibrations entering the ear. Surviving hair cells detect the larger vibrations and convert them into neural sig- nals that are passed along to the brain. The greater the damage to a person’s hair cells, the more severe the hearing loss, and the greater
                </p>

                <p>To get an individually fitted hearing aid, it is necessary to make a casting of the ear canal to ensure that the ear mould fits perfectly. No two
                    ears are alike and especially children need to have new ear moulds made regularly as their ears grow and mature. While the technology is
                    advancing, styling and design is deemed to be of great importance, as well. The hearing aids must look attractive and be as small, unobtrupossible
                    hearing
                    aid for you it is essential that you seek the professional help and advice of a hearing aid dispenser.</p>
            </div>

            <div className="row py-3">
                <h5>
                    <b>HEARING AID TRIAL & FITTING</b>
                </h5>
                <p>To get an individually fitted hearing aid, it is necessary to make a casting of the ear canal to ensure that the ear mould fits perfectly. No two
                    ears are alike and especially children need to have new ear moulds made regularly as their ears grow and mature.
                    While the technology is advancing, styling and design is deemed to be of great importance, as well. The hearing aids must look attractive
                    al style. To
                    get the best possible hearing aid for you it is essential that you seek the professional help and advice of a hearing aid dispenser.</p>
            </div>

            <div className="row py-3">
                <h5>
                    <b>HEARING AID REPAIR & ANALYSIS</b>
                </h5>
                <p>Electro acoustic analysis of hearing aids is carried out prior to dispensing and is also done following hearing aid repairs. Servicing of hearing
                    aids is also available.</p>
            </div>

            <div className='row py-3'>
                <h5>
                    <b>COUNSELING</b>
                </h5>
                <p>A case that who is successfully fitted with a hearing aid is later counseled regarding care and maintenance of the hearing aid, use of residtient and hearing and amplification and effective use of alternate modes</p>
            </div>

            <div className="row pb-4">
                <p className='text-center'>Request Online Consultation for Audiology service</p>
                <div className='d-flex justify-content-center'>
                <button style={{border:'none', backgroundColor:'green', color:'white', padding:'10px 20px', cursor:'pointer', borderRadius:'20px'}}>Get Started</button>
                </div>
                    
            </div>

        </>
    )
}

export default Audiology