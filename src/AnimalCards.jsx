export default function AnimalCards(props){

    let cardBg={
        background:props.animal.bubbleColor, 
        padding:'20px',
        color: props.animal.textColor,
        display: "inline-block",
        margin: '20px',
        borderRadius:'10px',
    }


    return (
        <div className="char-card" style={cardBg}>
        <h1 className="char-name" >{props.animal.name["name-USen"]}</h1>
        <h3 className="char-personality">{props.animal.personality}</h3>
        <h4 className="char-birthday"> {props.animal.birthday} </h4>
        <h4 className="char-phrase"> {props.animal.catchPhrase} </h4>
        <img src={props.animal.imageUri} alt="Character" className="char-img" />


        </div>
    )
}
