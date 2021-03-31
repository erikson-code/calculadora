const Visor = (props) => {
    return (
        <input 
        style={{ width: "100%", height: "90px", backgroundColor: "white" }} 
        disabled value={props.valor} />
    )
}

export default Visor