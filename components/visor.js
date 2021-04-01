const Visor = (props) => {
    return (
        <input
            style={
                {
                    width: "100%"
                    , height: "90px"
                    , backgroundColor: "white",
                    textAlign: "right",
                    fontSize:"50px"
                }
            }
            disabled value={props.valor} />
    )
}

export default Visor