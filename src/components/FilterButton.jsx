import React from 'react'

function FilterButton({name, isPressed, setFilter }) {
  return (
    <div className="filters btn-group stack-exception">
      <button
        type="button"
        className="btn toggle-btn"
        area-pressed={ isPressed ? 1 : 0 }
        onClick = {()=> setFilter(name)}
      >
          <span className="visually-hidden">Show </span>
          <span>{name}</span>
          <span className="visually-hidden"> tasks</span>
        </button>
    </div>
  )
}
export default FilterButton;