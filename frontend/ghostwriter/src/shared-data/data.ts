import {Component} from 'react';

class SharedData extends Component {

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            names: [],
            location: "",
            storyType: ""
        }
    }

} export default SharedData;