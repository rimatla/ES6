/*****************************************************************************************************************************************
 THE OLD ES5 WAY
 *****************************************************************************************************************************************/
let Restaurant = React.createClass({ //createClass is a method that takes in an object
    render: function(){
        return(
            <div>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
});

// ReactDOM.render(
        //define props ie: name
//     <Restaurant name="Juca's Greasy Burger"/>,
//     document.body)
// ;
/*****************************************************************************************************************************************
 ES6
 ******************************************************************************************************************************************/
class Bar extends React.Component { //React.Component has properties that are brought/extended by the Restaurant class
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}

ReactDOM.render(
    //define props ie: name
    <Bar name="Juca's Bitter Beer"/>,
    document.body)
;