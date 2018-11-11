import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { application: state.contextReducer.application };
};

const VersionNumber = ({ application }) => {
    return <div>
       Version number is {application.version};
    </div>
};

export const Version = connect(mapStateToProps) (VersionNumber);