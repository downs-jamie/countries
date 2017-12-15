import React, { Component } from "react"
// google maps
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
// react/redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';


const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />}
    </GoogleMap>
)

// bring React.PureComponent back in?
class MyFancyComponent extends Component {

    componentWillReceiveProps(newProps) {
        console.log(newProps);
        const url = `https://restcountries.eu/rest/v2/name/${newProps.country}`;
        axios.get(url)
        .then((response) => {
            console.log(response)
        })
    }

    state = {
        isMarkerShown: false,
    }

    componentDidMount() {
        this.delayedShowMarker()
    }

    delayedShowMarker = () => {
        setTimeout(() => {
            this.setState({ isMarkerShown: true })
        }, 3000)
    }

    handleMarkerClick = () => {
        this.setState({ isMarkerShown: false })
        this.delayedShowMarker()
    }

    render() {
        return (
            <MyMapComponent
                isMarkerShown={this.state.isMarkerShown}
                onMarkerClick={this.handleMarkerClick}
            />
        )
    }
}

// change state
function mapStateToProps(state) {
    return {
        country: state.country,
    }
}

export default connect(mapStateToProps)(MyFancyComponent);