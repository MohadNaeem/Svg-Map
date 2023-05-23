import * as React from "react"
import { useState } from 'react';

function SvgComponent(props) {
    const [selectedSvg, setSelectedSvg] = useState(-1)
    const viewSvg = (num) => {
        setSelectedSvg(num);
        props.editSvg(num);
    }
    return (
        <svg
            viewBox="129.686 147.924 272.298 133.143"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g fill="#d8d8d8" stroke="#000">
                <path onClick={(e) => { viewSvg(1) }} d="M129.686 147.924H401.98400000000004V281.067H129.686z" stroke={selectedSvg === 1 && `yellow`} />
                <path onClick={(e) => { viewSvg(2) }} d="M137.417 155.654H202.26999999999998V202.254H137.417z" stroke={selectedSvg === 2 && `yellow`} />
                <path onClick={(e) => { viewSvg(3) }} d="M208.068 155.44H315.44100000000003V202.899H208.068z" stroke={selectedSvg === 3 && `yellow`} />
                <path onClick={(e) => { viewSvg(4) }} d="M326.179 154.795H393.17999999999995V274.19399999999996H326.179z" stroke={selectedSvg === 4 && `yellow`} />
                <path onClick={(e) => { viewSvg(5) }} d="M136.987 212.133H319.52099999999996V274.409H136.987z" stroke={selectedSvg === 5 && `yellow`} />
            </g>
        </svg>
    )
}

export default SvgComponent