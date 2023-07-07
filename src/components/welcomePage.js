import { Link } from 'react-router-dom';
import '../components/welcomePage.css';
import bgPic from './images/bg.jpg';
import smallPic from './images/subPic.jpg';
import React from 'react';



function WelcomePage() {
    
    return (
        <div className='mainDiv'>
            <div className='subDiv'>
                <img src={bgPic} alt='not supported' className='bgPic' />
                <div className='writing'>
                    <h1>Discover Healthy &</h1>
                    <h1> Most Delecious</h1>
                    <h1>Food Recipes</h1>
                </div>
                <div className='exploreDiv'>
                    <Link to='/landingPage'
                        style={{
                            background: ' rgb(240, 166, 29)',
                            textDecoration: 'none',
                            color: 'white',
                            paddingRight:'50px',
                            paddingLeft:'50px',
                            paddingTop:'10px',
                            paddingBottom:'10px'
                        }}>
                        Explore Recipes
                    </Link>
                </div>
                <div className='smallDiv'>
                    <img src={smallPic} alt='not supported' className='subPic' />

                </div>
                <div className='content'>
                    <h3>Eat lightly, breathe deeply, live moderately</h3><br></br>
                    <p> Exercise is king. Nutrition is queen. Put them together and you’ve got a kingdom. </p>
                    <p>Proper nutrition is the difference between feeling exhausted and getting the most out of a workout.</p><br></br>
                    <p>Your diet is a bank account. Good food choices are good investments.</p>
                     <p>Eat breakfast like a king, lunch like a prince and dinner like a pauper</p>
                    {/*<p>You may have to fight a battle more than once to win it.</p> */}
                </div>



            </div>
        </div>
    )
}

export default WelcomePage;