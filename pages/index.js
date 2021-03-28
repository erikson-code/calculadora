import Head from 'next/head'
import Main from '../components/main'
import Title from '../components/title'


export default function Home() {
  return (
    <div className="container" style={{ height: "600px" }}>


      <div className="d-flex flex-row justify-content-center mt-3" >
        <div className="col-sm-6 flex-column bg-danger">

          <Title></Title>
          <div className = "col-sm-12 bg-white" style = {{height:"450px"}}>
            <Main></Main>
          </div>

        </div>

      </div>

    </div>
  )
}
