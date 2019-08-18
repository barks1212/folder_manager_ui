import PropTypes from 'prop-types';


export const folderDataType = PropTypes.shape({
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    added: PropTypes.string.isRequired,
});
