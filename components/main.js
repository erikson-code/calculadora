import Celula from '../components/celula'
import Visor from './visor'
import {useState} from 'react'

const Main = () => {

    const [valorchangeVisor,setValorchangeVisor] = useState(0)

    function changeVisor(props) {
        setValorchangeVisor(valorchangeVisor + props)
    }

    return (

        <div className=" justify-content-center">
            <Visor valor={valorchangeVisor}></Visor>
            <div className="d-flex flex-wrap ">
                <Celula valor="C" dimensao="9" color="info" onClick={() => changeVisor("C")} />
                <Celula valor="x" dimensao="3" color="warning" onClick={() => changeVisor("x")} />
                <Celula valor="7" dimensao="3" color="secondary" onClick={() => changeVisor("7")} />
                <Celula valor="8" dimensao="3" color="secondary" onClick={() => changeVisor("8")} />
                <Celula valor="9" dimensao="3" color="secondary" onClick={() => changeVisor("9")} />
                <Celula valor="/" dimensao="3" color="warning" onClick={() => changeVisor("/")} />
                <Celula valor="4" dimensao="3" color="secondary" onClick={() => changeVisor("4")} />
                <Celula valor="5" dimensao="3" color="secondary" onClick={() => changeVisor("5")} />
                <Celula valor="6" dimensao="3" color="secondary" onClick={() => changeVisor("6")} />
                <Celula valor="+" dimensao="3" color="warning" onClick={() => changeVisor("+")} />
                <Celula valor="1" dimensao="3" color="secondary" onClick={() => changeVisor("1")} />
                <Celula valor="2" dimensao="3" color="secondary" onClick={() => changeVisor("2")} />
                <Celula valor="3" dimensao="3" color="secondary" onClick={() => changeVisor("3")} />
                <Celula valor="-" dimensao="3" color="warning" onClick={() => changeVisor("-")} />
                <Celula valor="0" dimensao="6" color="secondary" onClick={() => changeVisor("0")} />

                <Celula valor="." dimensao="3" color="secondary" onClick={() => changeVisor(".")} />
                <Celula valor="=" dimensao="3" color="warning"  onClick={() => changeVisor("=")}/>
            </div>



        </div>


    )

}

export default Main