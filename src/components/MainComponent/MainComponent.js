import React, { Component } from 'react';
import { section_data } from '../Data';

export class MainComponent extends Component {
    render() {
        return (
            
            <div className="componentHeader">
                <h5 className="component_title">{section_data[0].heading}</h5>
                <ul className="component_links">
                    <li className="switched">WORLD</li>
                    <li>PEOPLE</li>
                    <li>FOOD</li>
                    <li>ANIMALS</li>
                </ul>
            </div>

        );
    }
}

export default MainComponent;
