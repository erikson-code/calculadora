import Celula from '../components/celula'
const Main = () => {

    return (

        <div className=" justify-content-center">
            
            <input style = {{width:"100%", height:"90px",backgroundColor:"white"}}  disabled/>
            
            <div className = "d-flex flex-wrap ">
            <Celula valor = "C" dimensao = "9" color = "info"/>
            <Celula valor = "*" dimensao = "3" color = "warning"/>
            <Celula valor = "7" dimensao = "3" color = "secondary"/>
            <Celula valor = "8" dimensao = "3" color = "secondary"/>
            <Celula valor = "9" dimensao = "3" color = "secondary"/>
            <Celula valor = "/" dimensao = "3" color = "warning"/>
            <Celula valor = "4" dimensao = "3" color = "secondary"/>
            <Celula valor = "5" dimensao = "3" color = "secondary"/>
            <Celula valor = "6" dimensao = "3" color = "secondary"/>
            <Celula valor = "+" dimensao = "3" color = "warning"/>
            <Celula valor = "1" dimensao = "3" color = "secondary"/>
            <Celula valor = "2" dimensao = "3" color = "secondary"/>
            <Celula valor = "3" dimensao = "3" color = "secondary"/>
            <Celula valor = "-" dimensao = "3" color = "warning"/>
            <Celula valor = "0" dimensao = "6" color = "secondary"/>
            
            <Celula valor = "." dimensao = "3" color = "secondary"/>
            <Celula valor = "=" dimensao = "3" color = "warning"/>
            </div>

            
        
        </div>


    )

}

export default Main