import React, {Component} from 'react'
import {Form, InputGroup, Button} from 'reactstrap'

export default class RecipeList extends Component{
    
    render(){
        const APP_ID = "";
        const APP_KEY= "";
        const examplereq="";
        return(
            <div>
                <Form>
                    <Input type="text"></Input>
                    <InputGroupAddon addontype="append"/>
                    <Button>Search</Button>
                </Form>
            </div>
        )
    }
}