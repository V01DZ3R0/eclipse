import React from "react";
import PropTypes from 'prop-types'

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    allignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '6px',
    marginBottom: '2rem'
  },
  input: {
    marginRight: '1 rem'
  }
}

function Bar({ hochu, index, onChange }) {
  return (
    <li style={styles.li}>
      <span>
        <input type="checkbox"
          style={styles.input}
          onChange={() => onChange(hochu.id)}
        />
      </span>
      <strong>{index + 1} </strong>
      &nbsp;
      {hochu.title}
      <button className='rm'>&times;</button>
    </li>

  )
}

Bar.propTypes = {
  hochu: PropTypes.arrayOf(PropTypes.object).isRequired,
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Bar