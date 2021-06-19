import React from "react";

import "./NavigationDrawer.css";

import { Drawer } from "react";
import { Toolbar, Item } from "react";

class NavigationDrawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDrawerOpen: false
        };
        this.buttonOptions = {
            icon: "menu",
            onClick: () => {
                this.setState({ isDrawerOpen: !this.state.isDrawerOpen })
            }
        };
    }
    render() {
        return (
            <React.Fragment>
                <Toolbar id="toolbar">
                    <Item
                        widget="dxButton"
                        options={this.buttonOptions}
                        location="before" />
                </Toolbar>
                <Drawer
                    opened={this.state.isDrawerOpen} >
                    <div>View content</div>
                </Drawer>
            </React.Fragment>
        );
    }
}




export default NavigationDrawer;
