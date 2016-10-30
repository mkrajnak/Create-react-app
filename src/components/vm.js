import React from 'react';

const VirtualMachine = (props) => (
    <div>
      <h1> VM {props.id} </h1>
      <button>Start</button>
      <button>Stop</button>
      <button>Restart</button>
    </div>
)

export default VirtualMachine;
