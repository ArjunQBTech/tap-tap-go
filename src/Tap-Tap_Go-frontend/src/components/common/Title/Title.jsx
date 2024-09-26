import React from 'react'
import './Title.css'

export default function Title({children}) {
    return (
        <div className='heading'>
            <div className='left-line'></div>
            <div className='heading-text'>{children}</div>
            <div className='right-line'></div>
        </div>
    )
}
