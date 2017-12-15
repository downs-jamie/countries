import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Countries extends Component{
    
    render(props){
        console.log(props)
        if(this.props.countries === undefined){
            return null;
        }

        var countryArray = this.props.countries.map((country, index)=>{
            return(
                <li key={index}>{country}</li>
            )
        })
        return(
            <div id="countries">
                <h1>Countries</h1>
                <ul>
                    {countryArray}
                </ul>
            </div>
        )
    }
}

// change state
function mapStateToProps(state) {
    return {
        countries: state.countries,
    }
}

export default connect(mapStateToProps)(Countries);
