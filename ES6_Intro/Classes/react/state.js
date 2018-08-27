//Handling State w/ React in ES6.
/*****************************************************************************************************************************************
 ES6
 ******************************************************************************************************************************************/
class Restaurant extends React.Component { //React.Component has properties that are brought/extended by the Restaurant class
    //use constructor method to set the state for the Bar
    constructor(){
        super();
        this.state = {
            //default status
            status: 'not open'
        };
        //This is something that is scheduled to be fixed in ES7, but at this point we still need manually to bind the 'this' keyword
        this.openRestaurant = this.openRestaurant.bind(this); //make sure that 'this' doesn't fall out of scope, so that we can use it when we're changing the state
        this.closeRestaurant = this.closeRestaurant.bind(this);
    }
    openRestaurant(){
        this.setState({
            status: 'open'
        })
    }

    closeRestaurant(){
        this.setState({
            status: 'not open'
        })
    }
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <p>The Restaurant is {this.state.status}</p>
                <button onClick={this.openRestaurant}>Open Restaurant</button>
                <button onClick={this.closeRestaurant}>Close Restaurant</button>
            </div>
        )
    }
}

ReactDOM.render(
    //define props ie: name
    <Restaurant name="Juca's Recipe"/>,
    document.body)
;
