
const Celula = (props) => {
    const dimensao = ("col-sm-"+props.dimensao)
    const color = "bg-"+props.color
    return (
        <div className= {dimensao}>
        <button className = {color} style = {{width: "100%",margin:0,border:"1px solid black"}}>
            <h1>{props.valor}</h1>
       
        </button>
        </div>

    )

}

export default Celula