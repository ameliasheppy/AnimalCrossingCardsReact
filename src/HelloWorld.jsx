function HelloWorld(props){

    //let's make a style obj in the comp itself
    //anything avail in css is avail here!
    //              STYLE OBJECT
    let hwstyles = {color:props.color,
    fontSize:'72px',
    padding:'20px'
}
    return (
        <div>
            <h1 style={hwstyles}>Hello, world from in the component!!</h1></div>
    )
}

export default HelloWorld