import '../components/landingPage.css';
import logo from './images/logo.png';
import chef from './images/chef.png';
import beans from './images/beans.png';
import combo from './images/combo.png';
import spaghetti from './images/spaghetti.png';
import salad from './images/mix.png'
import spinach from './images/spinach.png';
import vege from './images/black.png';
import replace from './images/vege.png'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import chef1 from './images/chefLeft.png';
import chef2 from './images/chefRight.png'




function LandingPage(props) {

    const addDish = (item) => {
        props.addDish(item);
        console.log('items', item);
    }

    return (

        <div className="superDiv">

            <div className='header'>
                <img src={logo} className='logo' />
                <div className='heading'>
                    <h1>Healthy & Fastest </h1>
                    <h1>Food Recipes</h1>
                </div>
                <div className='subContent'>
                    <p>Explore & Have Access to Some Of the Best </p>
                    <p>& Not Only High Rated but Healthy Food Recipes.</p>
                    <p>Get Yours and Try It Out To Keep Healthy</p>
                </div>
                <div className='chefDiv'>
                    <img src={chef} className='chefIMG'></img>
                </div>
                <div className='subHeader'><h2>Trending Recipes</h2></div>
                <div className='flexContainer'>

                    <Link to='/displayRecipe' style={{ textDecoration: 'none', margin: 'auto' }}>
                        <div className='first'>
                            <img src={beans} className='pictures'
                                onClick={() => addDish(
                                    {
                                        foodName: 'Mediterranean Bean Salad',
                                        Image: (beans),
                                        Duration: '45 mins',
                                        Difficulty: 'Medium',
                                        Recipe: 'Step 1: Drain the beans in brine and set aside,Step 2:Heat oil in a shallow pan over medium heat,Saute peppers and spring onion until translucent then add baby marrows, spice and garlic,Step 4:Fry until the baby marrows are soft, this will take about ten minutes,Step 5:Remove from heat and allow to cool,Step 6:Mix the cooled vegetables with beans, toss well and dress with the sweet & sour sauce,Step 7:Chill the salad in the fridge for an hour before serving.',
                                        Ingridients: '400 g mixed beans in brine, 410 g baked beans in tomato sauce ,410 g butter beans in brine, 300 g baby marrows, 3 mixed peppers, chopped, 2 garlic cloves, chopped,2 spring onions, chopped,1 cup Wellington sweet & sour sauce, 1 tsp Seven Colours grill spice,2 tbs cooking oil,'
                                    })} />
                            <h2 style={{ textAlign: 'center', color: 'rgb(240, 166, 29)' }}>
                                Mediterranean Bean Salad
                            </h2>
                        </div>
                    </Link>

                    <Link to='/displayRecipe' style={{ textDecoration: 'none', margin: 'auto' }}>
                        <div className='first'>
                            <img src={spaghetti} className='pictures'
                                onClick={() => addDish(
                                    {
                                        foodName: 'Fresh Tomato Spaghetti',
                                        Image: (spaghetti),
                                        Duration: '40 mins',
                                        Difficulty: 'Easy',
                                        Recipe: 'Step 1: Heat up the oven to 220° C / 425° F,Step 2:Cut your tomatoes into halves and put them in a large baking dish together with unpeeled,Stir olive oil through, season with oregano, salt, pepper, chilli,Step 4:Bake for 25-30 minutes, giving the tomatoes a good stir halfway,Step 5:While the sauce is in the oven, cook your pasta just short of al dente,Step 6:Once tomatoes are soft, juicy and lightly charred in places, place the tomatoes and their juices into a blender,Step 7:Transfer to a pan to heat it up gently, adjust the seasoning if needed and toss cooked pasta in the sauce.',
                                        Ingridients: '1 kg / 34 oz small tomatoes, 8 cloves of garlic,45 ml / 3 tbsp olive oil, 1½ tsp dried oregano, salt and pepper, to taste,pinch of chilli, adjust to taste (optional),pinch of sugar (optional), a sprig of basil (optional),300 g / 10½ oz favourite pasta* (GF if needed)'
                                    })} />
                            <h2 style={{ textAlign: 'center', color: 'rgb(240, 166, 29)' }}>Fresh Tomato Spaghetti</h2>
                        </div>

                    </Link>
                    <Link to='/displayRecipe' style={{ textDecoration: 'none', margin: 'auto' }}>
                        <div className='first'>
                            <img src={combo} className='pictures'
                                onClick={() => addDish(
                                    {
                                        foodName: 'Mince and Vagetables Salad',
                                        Image: (combo),
                                        Duration: '30 mins',
                                        Difficulty: 'Easy',
                                        Recipe: 'Step 1:In a medium saucepan add the oil and diced onion and cook over a medium heat until softened and turning translucent,Step 2:Add mixed vegetables to the pan and cook until the vegetables are soft,Step 3:Add crushed garlic and tomato puree/paste and cook for 1 minute,Step 4:Then add the beef mince,Step 5:Add tomatoes, stock, bay leaf, dried oregano, Worcestershire sauce (optional), salt and pepper and simmer for 15 minutes until the sauce has thickened and the vegetables are tender',
                                        Ingridients: 'Minced Beef/Lamb Mince,Brown Onion ,Tomatoes – tinned/canned diced tomatoes, Herbs – Use dried oregano, 3 mixed peppers,Mixed Vegetables, Worcestershire sauce, Stock Chicken/Vegetable',
                                    })} />
                            <h2 style={{ textAlign: 'center', color: 'rgb(240, 166, 29)' }}>Mince and Vagetables Salad</h2>
                        </div>
                    </Link>

                </div>

                {/* second row */}
                <div className='subHeader'><h2>Recent Recipes</h2></div>
                <div className='flexContainer'>
                    <Link to='/displayRecipe' style={{ textDecoration: 'none', margin: 'auto' }}>

                        <div className='first'>
                            <img src={salad} className='pictures'
                                onClick={() => addDish(
                                    {
                                        foodName: 'Mince and Vagetables Salad',
                                        Image: (salad),
                                        Duration: '10 mins',
                                        Difficulty: 'Very Easy',
                                        Recipe: 'Step 1:Cut the tomatoes into 8 segments each lengthwise.,Step 2:Mix the yogurt, salt, pepper, honey and vinegar and blend well together,Step 3:Keep both the vegetables and the dressing refrigerated separately until ready to serve,Step 4:When ready to serve, mix the vegetables and the dressing together,Step 5:This has to be done at the last minute, as the vegetables combined with the salt tend to shed their juices and thus become limp and soggy if kept too long',
                                        Ingridients: '2 Medium Ripe tomatoes,2 cups Cabbage, shredded,1 Capsicum, sliced, 2 Carrots, sliced, 2 tbsp Vinegar,1 tbsp Honey,2 tsp Salt, A pinch of Pepper,2 tbsp Yogurt',
                                    })} />
                            <h2 style={{ textAlign: 'center', color: 'rgb(240, 166, 29)' }}>Mixed Vegetable Salad</h2>
                        </div>

                    </Link>
                    <Link to='/displayRecipe' style={{ textDecoration: 'none', margin: 'auto' }}>
                        <div className='first'>
                            <img src={spinach} className='pictures'
                                onClick={() => addDish(
                                    {
                                        foodName: 'Mince and Vagetables Salad',
                                        Image: (spinach),
                                        Duration: '13 mins',
                                        Difficulty: 'Very Easy',
                                        Recipe: 'Step 1:Place stock, leek, mushrooms, spaghetti, garlic, salt and 2 cups water in a deep large saucepan.,Step 2:Bring to the boil. Boil for 6 minutes, stirring very often,Step 3:Add peas, parmesan and cream. Boil for 2 minutes, stirring, or until pasta is cooked and liquid is mostly evaporated,Step 4:Remove from heat and stand for 2 minutes for sauce to thicken a little more. Stir through spinach until just wilted,Step 5:Season with pepper and serve with extra parmesan if you like',
                                        Ingridients: '2 cups Massel* Vegetable Liquid Stock,1 leek quartered finely sliced ,200 g mushrooms thickly sliced,375 g spaghetti broken in half,3 garlic cloves thinly sliced,0.6 cup parmesan cheese,1/2 cup thickened cream,100 g baby spinach,tomatoes',
                                    })} />
                            <h2 style={{ textAlign: 'center', color: 'rgb(240, 166, 29)' }}>Creamy Vegetable Spaghetti</h2>
                        </div>
                    </Link>
                    <Link to='/displayRecipe' style={{ textDecoration: 'none', margin: 'auto' }}>
                        <div className='first'>
                            <img src={vege} className='pictures'
                                onClick={() => addDish(
                                    {
                                        foodName: 'Mince and Vagetables Salad',
                                        Image: (vege),
                                        Duration: '50 mins',
                                        Difficulty: 'Slightly Difficult',
                                        Recipe: 'Step 1:In a medium saucepan add the olive oil,garlic and diced onion and cook over a medium heat until softened and turning translucent,Step 2:Add eggplant and thyme and cook until eggplant is slightly softened, about 10 minutes,Step 3:Add zucchini, red and yellow peppers, and salt and pepper,Step 4:Cook for 5 more minutes,Step 5:Add tomatoes and mix well, Step 6:Transfer skillet to the oven and bake for 20-25 minutes, until vegetables are tender',
                                        Ingridients: '1 large eggplant, cut into 1-inch cubes,2 zucchinis, sliced ,1 onion, chopped,3 garlic cloves, minced,1 red bell pepper, chopped,1 yellow bell pepper, chopped,2 large tomatoes, chopped,3 tbsp olive oil',
                                    })} />
                            <h2 style={{ textAlign: 'center', color: 'rgb(240, 166, 29)' }}>Summer Vegetable Salad</h2>
                        </div>
                    </Link>





                </div>

                <div className='footer'>
                    <h2 style={{ color: 'white', textAlign: 'center' }}>Our Latest Blog</h2>
                </div>

                <img src={chef1} className='middlePart'></img>
                <img src={chef2} className='rightChef'></img>
                <div className='about'>
                    <p style={{ textAlign: 'center', }}>
                        As a self-proclaimed foodie and fitness enthusiast,
                        I have a passion for cooking and a huge desire to show
                        that living a healthy lifestyle can actually be easy and fun!
                        Feel free to use the meal guide above to find your new favorite
                        meal ideas or the dietary guides to the right to narrow
                        things down even more!
                    </p>
                    <p style={
                        {
                            backgroundColor: 'rgb(240, 166, 29 )',
                            textAlign: 'center',
                            width: '40%',
                            margin: 'auto',
                            padding: '10px',
                            marginTop: '10%',
                            color: 'white'
                        }}>
                        Says Kelly
                    </p>


                </div>

            </div>

            {/* <div>
                {Food.filter(Food=>Food.includes('s')).map(filteredName=>(
                    <li>
                        {filteredName}
                    </li>
                ))}
            </div> */}

        </div>
    )
}

export default LandingPage