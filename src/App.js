import React, {Component} from 'react';
import {Form, InputGroupAddon, Button, InputGroup, Input} from 'reactstrap'

export default class Recipe extends Component {

    render() {
        const APP_ID = "ab795763";
        const APP_KEY = "45a7661269527c96d68e62beed8576ef";
        const examplereq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
        ;
        return (
            <div>
                <InputGroup>
                    <Input placeholder="search" type="text"/>
                    <InputGroupAddon addonType="append">
                        <Button type="submit">Search</Button>
                    </InputGroupAddon>
                </InputGroup>
            </div>
        )
    }
}