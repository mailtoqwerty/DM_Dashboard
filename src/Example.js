import React, { useState } from 'react';
import Extractionform from './Forms/Extractionform';

function Example() {
  const [isOpen, setIsOpen] = useState(false); 
        return (
    <div>
<button onClick={() => setIsOpen(true)}>
       +
</button>
{isOpen && (
    <div>
    <div>
      <Extractionform/>
    </div>
    <button onClick={() => setIsOpen(false)}>
        X 
    </button>
    </div>
    )}
</div>
);
}

export default Example;