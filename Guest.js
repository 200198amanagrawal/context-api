import React, { Component } from 'react'
import {MyContext} from "./App"
export default class Guest extends Component {
    render() {
        return (
            <div>
                Guest Component
                <MyContext.Consumer>
                    {({data,handleClick})=>(
                        <div>
                            <h4>
                                Name:{data.name} Value:{data.value}
                            </h4>
                            <button onClick={handleClick}>Change</button>
                        </div>

                    )}
                </MyContext.Consumer>
            </div>
        )
    }
}
