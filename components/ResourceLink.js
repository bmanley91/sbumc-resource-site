import React from 'react';
import PropTypes from 'prop-types';

const ResourceLink = (props) => {
    return (
        <a href={props.link} data-testid={`${props.name}-name-link`}>{props.name}</a>
    );
};

ResourceLink.propTypes = {
    name: PropTypes.string,
    link: PropTypes.string
};

export default ResourceLink;
