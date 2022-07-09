import * as React from 'react';
import PropTypes from "prop-types";
import "./styles/style.css";

function initials(name) {
    let rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');

    let initials = name ? [...name.matchAll(rgx)] || [] : [];

    initials = (
        (initials.shift()?.[1] || '') + (initials.pop()?.[1] || '')
    ).toUpperCase();

    return name ? initials : "U";
}

function Avatar({src}) {
    const [image, setImage] = React.useState(null)
    const [imageExists, setImageExists] = React.useState(false);

    const content = (
        <div>
            <img 
                src={src ?? './assets/default.png'}
                className='avatar-container'
            ></img>
        </div>    
    )
}

Avatar.defaultProps = {
    src: null,
};

Avatar.propTypes = {
    src: PropTypes.string,
};

export default Avatar