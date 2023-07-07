import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../components/display.css'


function DisplayRecipe(props) {




    return (
        <div>
            <h1 style={{ color: 'rgb(240, 166, 29)', textAlign: 'center', padding: '50px' }}>Detailed Cooking Requirements</h1>
            {props.list.map((display, recipe) => (
                <div key={recipe} className="displayDiv">

                    <div>
                        <h1 className="foodName">{display.foodName}</h1>
                        <img className='imageDisp' src={display.Image} />

                        <div className="styledDiv">
                            <h2 style={{ textAlign: 'center', padding: '15px' }}>Cooking Steps</h2>
                            <div style={{ width: '80%', margin: 'auto' }}>
                                <p>{display.Recipe}</p>
                                <h2 style={{ textAlign: 'center', padding: '15px' }}>Ingridients</h2>
                                <p>{display.Ingridients}</p>
                            </div>

                        </div>
                        <h3 style={{ textAlign: 'center', padding: '10px', color: 'white' }}>Difficulty: {display.Difficulty}</h3>
                        <h3 style={{ textAlign: 'center', padding: '10px', color: 'white' }}>Cook Time: {display.Duration}</h3>

                    </div>

                </div>
            ))}

        </div>
    )
}

export default DisplayRecipe