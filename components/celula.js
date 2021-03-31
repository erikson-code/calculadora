import StylesCelula from './celulaStyle.js'

const Celula = (props) => {
   
    const dimensao = ("col-sm-" + props.dimensao)
    const color = "bg-" + props.color
    
    
   

    return (
        <div className={dimensao}>
            <button className={color} style={StylesCelula} onClick={props.onClick}>
                <h1>{props.valor}</h1>

            </button>
        </div>

    )

}

export default Celula