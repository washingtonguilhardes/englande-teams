import React from 'react'
import "./time.css"
export default function Time(props) {
    const time = props.time;
    return (
        <div className="time" >
            <div style={{ display: 'flex' }}>
                <div>
                    <img src={time.logo} alt="" style={{ height: '56px' }} />
                </div>
                <div style={{
                    flex: '1',
                    textAlign: 'left',
                    paddingLeft: '16px'
                }}>
                    <div>{time.name}</div>
                    <div style={{
                        fontSize: '1rem',
                    }}>
                        Data de fundação: {time.founded},
                        Estadio: {time.venue_name} ({time.venue_city})
                    </div>
                </div>
            </div>
        </div>
    )
}
