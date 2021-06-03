import React from 'react';

export const Table = ({ rows, className }) => {
  return (
    <div className={`table ${className}`}>
      { rows.map((item, idx) => (
        <React.Fragment key={`row-${idx}`}>
          {idx ? <div className="table__separate separate"></div> : ''}
          <div className="table-row">
            <div className="table-col text-bold">{ item.key }</div>
            <div className="table-col text-gray">{ item.val }</div>
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}