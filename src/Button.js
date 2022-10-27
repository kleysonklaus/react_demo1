import PropTypes from 'prop-types'

export function Button({ text, name }) {
    return <button onClick={function () {
        console.log("hola mundo")
    }}>
        {text} - {name}
    </button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}

// to use required: se necesita un paquete npm prop-types

// this is other form to make default value
Button.defaultProps = {
    name: "Some user"
}