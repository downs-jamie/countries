import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Input, Button } from 'react-materialize';
import AddCountry from '../actions/AddCountry';

class CountryAdd extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("submit clicked")
        console.dir(e.target)
        var country = e.target[0].value;
        this.props.addCountry(country);
    }
    render() {
        return (
            <div className="container" id="countryAdd">
                <form onSubmit={this.handleSubmit}>
                    <Row>
                        <h3>Add Country</h3>
                        <Input s={12} label="Country Name" />
                        <Button s={12} className="btn">Add Country</Button>
                    </Row>
                </form>
            </div>
        )
    }
}

// change state
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addCountry: AddCountry,
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(CountryAdd);