

const Card = ({ color_name,color_code }) => {
    return (
        
            <div className = "displays" style={{ height:270, width:230}}>
                <p style={{height:220, width:230, backgroundColor:`${color_code}`}}> </p>
                <p className="text"  >{color_code}</p>
                <span className="text"  style={{color:`${color_code}`, fontSize:20}} >{color_name}</span>
            </div>
        
    )
}

export default Card;