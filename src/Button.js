import PropTypes from 'prop-types'

export function Button({ text }) {
    return <button>
        {text}
    </button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}

// to use required: se necesita un paquete npm prop-types