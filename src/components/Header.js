import React from 'react'
import {useState,useEffect} from 'react'
export default function Header(props) {
  let [items, setItems] = useState([]);
  useEffect(()=>{
    for(var i=0;i<props.data.length;i++){
        setItems(props.data)
        console.log("settttt",props.data)
    }
  },[props.data])
    return (
        <div >
             <div className="add-to-cart">
                <span className="count">{props.data.length}</span>
            <img className="img-responsive" src="data:image/png;base64,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" alt="add-to-cart"></img>
            </div>
            <div>
                <ul>
                    {
                        items.map((itemss)=>
                        <li>{itemss.cartData.name}</li>

)
}
                </ul>
            </div>
        </div>
    )
}
