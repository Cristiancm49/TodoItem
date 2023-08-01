import { ReactComponent as CheckSVG } from '../svg/check.svg'
import { ReactComponent as DeleteSVG } from '../svg/delete.svg'

import './TodoIcon.css'

const iconType = {
    "check": (color) => <CheckSVG className='Icon-svg' fill={color}/>,
    "delete": (color) => <DeleteSVG className='Icon-svg' fill= {color}/>,
}
function TodoIcon({ type, color, onClick }) {
    return(
        <span 
            className={`Icon Icon-svg Icon-${type}`}
            onClick={onClick}
        >
         {iconType[type] (color)}
        </span>
    )
}

export { TodoIcon }