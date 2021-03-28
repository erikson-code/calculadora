import Head from 'next/head'
import Celula from '../components/celula'

export default function Home() {
  return (
    <div className="container bg-warning" style={{ height: "600px" }}>


      <div className="d-flex flex-row justify-content-center  bg-primary" style={{ height: "80%" }}>

        <div className="col-sm-8   bg-secondary">

            <Celula></Celula>

        </div>




      </div>

    </div>
  )
}
