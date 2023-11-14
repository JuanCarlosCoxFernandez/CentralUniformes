import React from 'react';

function Home(props){
    const image = props.prop;
    console.log(image)
    return(
        <div>
            <h1>Home</h1>
            <img src='/img/logo.png' alt='LogoCentralUniformes'></img><br></br>
            <button>Login</button>
        </div>
    )
}

export default Home;