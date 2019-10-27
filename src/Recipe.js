import React from 'react'
import {Row, Col, Container} from 'reactstrap'

const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img src={image} alt={image}
            />
        </div>
    );
}
export default Recipe;