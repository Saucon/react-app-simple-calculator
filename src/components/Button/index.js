import React from 'react'

const buttonType = (buttType) => {
    switch (buttType) {
        case 'opr':
            return 'box box-opr'
        case 'clear':
            return 'box box-clear'
        case 'result':
            return 'box box-result'
        default:
            return 'box box-num'
    }
}


const Button = ({val, buttType, buttClick}) => (
<button className={buttonType(buttType)} type="button" onClick={(e)=>buttClick(val)}>{val}</button>
)

export default Button