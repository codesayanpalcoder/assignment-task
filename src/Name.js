import React from 'react'

const Name=(props)=>{
    const {oi,tool}=props;
return(
    <div>
        <h1>My name is {oi}</h1>
        <h1>My tools name is {tool}</h1>
    </div>
)
}
export default Name;
