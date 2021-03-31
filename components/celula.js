import StylesCelula from './celulaStyle.js'
import react, { useState, useEffect } from 'react'


const Celula = (props) => {

    const [valor, setValor] = useState()

    const dimensao = ("col-sm-" + props.dimensao)
    const color = "bg-" + props.color

    useEffect(() => {
        if (valor != undefined)
            console.log("O valor é " + valor)
    }, [valor])


    return (
        <div className={dimensao}>
            <button className={color} style={StylesCelula} onClick={() => setValor(props.valor)}>
                <h1>{props.valor}</h1>

            </button>
        </div>

    )

}

export default Celula