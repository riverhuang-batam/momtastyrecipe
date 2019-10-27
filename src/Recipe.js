import React from 'react'
import {Row, Col, Container, CardBody} from 'reactstrap'

const Recipe = ({title, calories, image, ingredients}) => {
    return (

        <div>
            
            <CardBody>
            <h2 className="text-center">{title}</h2>
            <img class="center" src={image} alt={image}/>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p >Calory: {calories}</p>
            </CardBody>
            
        </div>

    );
}
export default Recipe;