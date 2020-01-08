import React from 'react';

// function People(){
//     return <h1>Hello Poornima</h1>
// }

// const People = () =>  <h1>Hello Poornima</h1>
const People = (props) =>  {
return (
    <div>
        <h1>Hello {props.name}</h1>
        {props.children}
    </div>
)
}

export default People;