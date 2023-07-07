import React,{useEffect,useState} from 'react';
import '../App.css';


const Bookmarking = ({card}) => {
    return (
        <div >
              <div>
                <h2>BOOKMARK ({card.length})</h2>
                {
                    card.map((res)=>(
                        <ul>
                            <li>{res.name}</li>
                        </ul>
                    ))
                }
            </div>
        </div>
    );
}

export default Bookmarking;