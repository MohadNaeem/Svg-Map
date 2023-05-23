import * as React from "react"
import { useState } from 'react';
import { roomsData } from "../../data/svgData";
import EditSvg from "./editDataPopup";
import SvgComponent from "./svgComponents";

function MapComponent() {
    const [showForm, setShowForm] = useState(false);
    const [svgData, setSvgData] = useState(roomsData);
    const [editItem, setEditItem] = useState({})
    const editSvg = (num) => {
        svgData.map((item) => {
            if (item.id === num) {
                setEditItem(item)
                return;
            }
        })
    }
    const handleSubmit = (event) => {
        svgData.splice(svgData.indexOf(editItem), 1);
        const data = [...svgData, event]
        setSvgData(data);
        setShowForm(false);
    };
    return (<>
        {editItem.id && <button className="reverseBtn" onClick={() => { setShowForm(true) }}>Update</button>}
        <div className="svgMap">
            <SvgComponent editSvg={editSvg} editItem={editItem} />
        </div>
        {showForm &&
            <EditSvg
                cancelEdit={() => { setShowForm(false) }}
                onSubmit={handleSubmit}
                item={editItem}
            />
        }
    </>
    )
}

export default MapComponent