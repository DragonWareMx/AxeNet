import * as React from 'react';
import PropTypes from "prop-types";
import "./styles/style.css";
import defaultImage from './assets/default.png';

function Avatar({src}) {
    const [image, setImage] = React.useState(null)
    const [imageExists, setImageExists] = React.useState(false);

    return(
        <div>
            <img 
                src={src ?? defaultImage}
                className='avatar-container'
                width='100px'
                height='100px'
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