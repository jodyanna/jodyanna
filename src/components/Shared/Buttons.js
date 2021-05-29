import React, { useState } from 'react';

const styles = {

};

export default function Button(props) {
  const [ isActive, setIsActive ] = useState(false);

  return (
    <button onClick={props.onClick}>

    </button>
  )
}
