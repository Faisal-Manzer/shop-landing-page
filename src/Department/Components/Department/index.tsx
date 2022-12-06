import React from 'react'

// images
import SpeechTherapy from './images/box-speech.png'
import EduTherapy from './images/box-edu.png'
import OccupTherapy from './images/box-occup.png'
import BPTherapy from './images/box-b&p.png'
import PhysioTherapy from './images/box-physio.png'
import CounsellTherapy from './images/box-counsell.png'
import AudioTherapy from './images/box-audio.png'

const data = [SpeechTherapy, EduTherapy, OccupTherapy, BPTherapy, PhysioTherapy, CounsellTherapy, AudioTherapy]
const Department = () => {
    return (
        <div className='my-4 text-center'>
            <h2 style={{ fontWeight: 'bold' }}>Departments</h2>
            <div className="row my-4 d-flex align-items-center justify-content-center" style={{backgroundColor:'#C2ABCF', padding:'20px', borderRadius:'20px'}}>
                {
                    data.map((item) => (
                        <div className="col-sm-3" style={{padding:'10px'}}>
                            <div>
                                <img style={{width:'100%', height:'100%'}} src={item} alt="" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Department;