import React, {useEffect, useState} from 'react';
import {
    Container,
    Form,
    InputGroupAddon,
    Button,
    InputGroup,
    Input,
    Row,
    Col
} from 'reactstrap'
import './index.css'
import Recipe from './Recipe'

const App = () => {

    const APP_ID = "ab795763";
    const APP_KEY = "45a7661269527c96d68e62beed8576ef";
    const [recipes,
        setRecipes] = useState([])
    const [search,
        setSearch] = useState('')
    const [query,
        setQuery] = useState('best')
    useEffect(() => {
        getRecipes()
    }, [query])

    const getRecipes = async() => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=25&calories=591-722&health=alcohol-free`)
        const data = await response.json()
        setRecipes(data.hits)
        console.log(data.hits)
    }
    const updateSearch = e => {
        setSearch(e.target.value)

    }
    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('')
    }
    return (
        <div>
            <Container>
                <p className="text-center"style={{fontSize:"40px",fontStyle:"italic"}}>Welcome to MomTastyRecipe</p>
                <Form onSubmit={getSearch}>

                    <InputGroup>
                        <Input placeholder="search" type="text" value={search} onChange={updateSearch}/>
                        <InputGroupAddon addonType="append">
                            <Button type="submit">Search</Button>

                        </InputGroupAddon>
                    </InputGroup>
                </Form>
            </Container>

            
                <Container>
                <Row>
                    {recipes.map(recipe => (
                        <Col md="4">
                            <Recipe
                                key={recipe.recipe.label}
                                title={recipe.recipe.label}
                                calories={recipe.recipe.calories}
                                image={recipe.recipe.image}
                                ingredients={recipe.recipe.ingredients}/>
                        </Col>
                    ))}
                </Row>
                </Container>
            

        </div>
    )
}
export default App