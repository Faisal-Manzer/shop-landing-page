import React from 'react'
import l2 from '../../../assets/l2.jpg'
import PurchaseCard from '../Components/PurchaseCard'

const BehavioralTherapy = () => {
    return (
        <>
            <div className='row py-3'>
                <div className="col-sm-12 text-center my-4">
                    <h2 style={{ fontWeight: 'bold' }}>Behavioral and Psychological Therapy</h2>
                </div>
                <div className="speechTherapy__img col-sm-6 p-3" style={{ height: '300px' }}>
                    <img src={l2} alt="speech-therapy" style={{ width: '100%', height: '100%', borderRadius: '20px' }} />
                </div>
                <div className="speechTherapy__info col-sm-6 p-3 d-flex" style={{ fontSize: '14px', fontWeight: '500' }}>
                    <p className='my-auto'>SPHECHO provides specialized services primarily clinical psychology,
                        psycho educational and neuro-psych rehabilitation – psychological
                        assessment, psychotherapies, diagnosis of mental health problems
                        and their management. We serve people in all walks of life –
                        children, adolescence, adults, and old age.</p>

                </div>
            </div>

            <div className="row">
                <p>Some of the common concerns that we address are:</p>

                <ul style={{marginLeft:'14px'}}>
                    <li>Developmental/childhood disorders (Autism, learning disabilities)</li>
                    <li>Intellectual disabilities</li>
                    <li>Cognitive impairment</li>
                    <li>Behavioral and emotional disorders of children and adolescence (ADHD, conduct disorder, social and emotional disorders)</li>
                    <li>Disorders of adult personality and behavior</li>
                    <li>Mood & aective disorder and somatoform disorders</li>
                    <li>Anxiety and stress related disorders</li>
                    <li>Disorders due to psychoactive substance use (alcohol and drug abuse)</li>
                    <li>Eating disorders, sleep disorders</li>
                    <li>Memory impairments</li>
                    <li>Amnesic and other geriatric conditions</li>
                    <li>Interpersonal concerns (family & work-related issues)</li>
                </ul>
            </div>

            <div className="row">
                

                <div className="col-sm-12 my-4">
                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">
                            <div className="row" style={{ backgroundColor: 'lightgrey', border: '1px solid grey', borderRadius: '20px', padding: '40px' }}>
                                <div className='col-sm-6'>
                                    <span style={{ fontSize: '18px', fontWeight: 'bold', marginLeft: '10px' }}>Psychological Assessment</span>
                                    <ul className='mt-4'>
                                        <li>IQ assessment</li>
                                        <li>Achievement assessment</li>
                                        <li>Socio- emotional assessment</li>
                                        <li>Personality assessment</li>
                                        <li>Dyslexia screening</li>
                                        <li>Behavioral assessment</li>
                                        <li>Memory assessment</li>
                                        <li>Cognitive assessment</li>
                                    </ul>
                                </div>
                                <div className='col-sm-6'>
                                    <span style={{ fontSize: '18px', fontWeight: 'bold', marginLeft: '10px' }}>Psychological Intervention/Therapeutic</span>
                                    <ul className='mt-4'>
                                        <li>Cognitive behavior therapy</li>
                                        <li>Behavior modification</li>
                                        <li>Attention enhancement training</li>
                                        <li>Memory training</li>
                                        <li>Social skill training</li>
                                        <li>Stress management</li>
                                        <li>Relaxation therapy</li>
                                        <li>Anger management</li>
                                        <li>Parental training and education</li>
                                        <li>Outreach programs- school and family visit and
                                            other community-based rehabilitation We oer
                                            intervention both in individual and group setting</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-1"></div>
                        </div>
                    </div>
                </div>

                <ul className='my-4'>
                    <li>Clinical Psychological conditions unlike physical conditions can’t be seen. However, they are very important for the healthy functioning
                        and wellbeing of the individual.</li>
                    <li>The right intervention at the right time is crucial for growth and development.</li>
                    <li>It is emphasized that with conditions like autism, ADHD and other childhood disorders, the earlier the intervention, the better the re
                        sults.</li>
                </ul>
            </div>

            <div className="row">
                <div className="col-sm-12 text-center my-4">
                    <span style={{ fontWeight: 'bold' }}>DO YOU WANT TO KNOW MORE ABOUT OUR PRICING?</span>
                </div>

                <div style={{ marginTop: '40px' }}>
                    <PurchaseCard title="Pediatric Clinical Psychology Services" numberOfCard={2} />
                </div>
                <div style={{ marginTop: '40px' }}>
                    <PurchaseCard title="Adult Clinical Psychology Services" numberOfCard={2} />
                </div>
            </div>

        </>
    )
}

export default BehavioralTherapy