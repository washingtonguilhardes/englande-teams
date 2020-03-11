import React from 'react'

export default function Liga(props) {
    const liga = props.liga;
    const onRemove = props.onRemove;
    return (
        <div style={{ margin: '16px 0', minHeight: '160px' }} >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                {liga.logo && <div style={{
                    backgroundColor: 'rgba(255,255,255,.5)',
                    padding: '12px',
                    borderRadius: '4px',
                    minWidth: '160px',
                    minHeight: '56px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <img src={liga.logo} alt="" title={`Image de ${liga.name}`} style={{ height: '56px' }} />
                </div>}
                <div style={{
                    flex: '1',
                    textAlign: 'left',
                }}>
                    <div>{liga.name}</div>
                    <div style={{
                        fontSize: '1rem',
                    }}>
                    </div>
                </div>
            </div>
            <button onClick={onRemove} style={{
                padding: '8px',
                border: 0,
                borderRadius: '4px',
                fontSize: '1rem'
            }}>Trocar a liga </button>
        </div>
    )
}
