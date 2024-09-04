import UpButton from '../components/UpButton'
import DownButton from '../components/DownButton'
import Header from '../components/Header'
import Footer from '../components/Footer'


function Dashboard() {
  return(
    <div className="dash">
      <Header/>

      <section className="mainDash">

        <section className="leftTotal">
          <section className="upperTotal">
            <section className="dataListCA"></section>
            <section className="arrowsTop">
              <UpButton/>
              <DownButton/>
            </section>
          </section>

          <section className="lowerTotal">
            <section className="dataListIA">TBD</section>
            <section className="arrowsBot">
              <UpButton/>
              <DownButton/>
            </section>
          </section>
        </section>

        <section className="dataRight">
          <section className="leadTimeSect"></section>
          <section className="invSect"></section>
          <section className="dataRightLower">
            <section className="coveredCA"></section>
            <section className="coveredIA"></section>
          </section>
        </section>


      </section>

      <Footer/>
    </div>


  )
}

export default Dashboard