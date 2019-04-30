import React, { Component, Fragment } from 'react';
import L from 'leaflet';
import * as aedLayer from '../components/assets/aedLayer.json';

import {
    FeatureGroup,
    Map,
    Popup,
    TileLayer,
    Marker
} from 'react-leaflet';

// leaflet css needed for map to display properly
import 'leaflet/dist/leaflet.css';

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

const center = [37.330721, -121.889432]
const label = "AED"

const aedIcon = new L.Icon({
    iconUrl: require('../components/assets/img/aedicon.png'),
    iconRetinaUrl: require('../components/assets/img/aedicon.png'),
    iconAnchor: [0, 0],
    popupAnchor: [0, -2],
    iconSize: [20, 20],
    // shadowUrl: '../assets/marker-shadow.png',
    shadowSize: [10, 10],
    shadowAnchor: [7, 10],
})

const MyPopupMarker = ({ content, position }) => (
    <Marker position={position} icon={aedIcon}>
        <Popup>{content}</Popup>
    </Marker>
)

const MyMarkersList = ({ markers }) => {
    const items = markers.map(({ key, ...props }) => (
        <MyPopupMarker key={key} {...props} />
    ))
    return items
}

const processMarkerLayer = (layer) => {
    return layer.map((each, i) => {
        return {
            key: i,
            position: [each.geometry.coordinates[1], each.geometry.coordinates[0]],
            content: label
        }
    })
}

const markers = processMarkerLayer(aedLayer.default.features);
const points = markers.map(m => m.position);
const bounds = L.latLngBounds(points);

const NearbyAED = () => MyPopupMarker({ content: label, position: center })

class StreetMap extends Component {
    constructor() {
        super();
        this.state = {
            markers,
            bounds
        }
    }

    render() {
        return (
            <>
                <div className="content">
                    <Row>
                        <Col md="12">
                            <Card className="card-plain">
                                <CardHeader>AED Maps</CardHeader>
                                <CardBody>
                                    <div
                                        id="map"
                                        className="map"
                                        style={{ position: "relative", overflow: "hidden" }}
                                    >

                                        <Map ref={this.mapRef} style={{ height: "80vh" }} bounds={this.state.bounds} zoom={5}>
                                            <TileLayer
                                                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                            />
                                            <FeatureGroup>
                                                <MyMarkersList markers={this.state.markers} />
                                                <NearbyAED />
                                            </FeatureGroup>
                                        </Map>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        )
    }
}
export default StreetMap;