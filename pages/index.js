import Head from 'next/head'
import Celula from '../components/celula'
import Title from '../components/title'


export default function Home() {
  return (
    <div className="container" style={{ height: "600px" }}>


      <div className="d-flex flex-row justify-content-center  bg-primary mt-3" >
        <div className="flex-column">

          <Title></Title>
          <div>
            <Celula></Celula>
          </div>

        </div>

      </div>

    </div>
  )
}
