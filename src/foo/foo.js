import React from 'react'
import PropTypes from 'prop-types'
import Bar from './hui'
const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

function Foo(props) {
    return (
        <ul style={styles.ul}>
            {props.hochts.map((hochts, index) => {
                return (<Bar
                    hochts={hochts}
                    key={hochts.id}
                    index={index}
                    onChange={props.onToggle}
                />)
            })}
        </ul>
    )
}

Foo.propTypes = {
    hochts: PropTypes.arrayOf(PropTypes.object).isRequired,

}

export default Foo