import GaleryPhoto from './GaleryPhoto'
import React from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { compose } from "redux";
import { addPhoto } from '../../redux/photo-reducer'
import { props } from 'bluebird';


const PhotoGalery = (props) => {
    return (
        <div>
            <GaleryPhoto
                photosPage={props.photosPage}
                addPhoto={props.addPhoto}
            />
        </div>
    )
}

const mapStateToProps = (state) => ({
    photosPage: state.photosPage
})

export default compose(
    connect(mapStateToProps, { addPhoto }),
    withRouter
)(PhotoGalery)