import React, { useState } from 'react';

import Tower from './Tower';

const ListIcon = ({
  name = '',
  style = {},
  className = '',
  width = '',
  height = '',
  fill = '',
  rotate,
  onClick = () => {},
}) => {

  const [hover, setHover] = useState(false);

  const getIcon = (hover) => {
    const icons = {
      tower: <Tower
        width={width}
        height={height}
        onClick={onClick}
      />,
    };

    return icons[name];
  };

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={style}
      className={className}
      onClick={onClick}
    >
      {getIcon(hover)}
    </div>
  );
};

export default ListIcon;
