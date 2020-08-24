import React from "react"
import "./disclaimer.scss"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/header"

function Disclaimer({ sidebar, setSidebar }) {
  return (
    <div className={`disclaimer ${sidebar ? "open" : ""}`}>
      <Header
        sidebar={sidebar}
        setSidebar={setSidebar}
        page={"disclaimer-page"}
      />
      <main className="container">
        <h1>Disclaimer and Terms of Use of Website</h1>
        <div className="general-notice">
          <h3>General Notice:</h3>
          <p>
            The information contained in the Thematic Resources limited web site
            is for information purposes only. This information does not
            constitute an offering of securities in any jurisdiction, nor is it
            intended to supplement nor replace the required disclosures of the
            Company.
          </p>
        </div>
        <div className="disclaimer-notice">
          <h3>Disclaimer:</h3>
          <p>
            The information contained in this web site is believed to be
            accurate at the time of posting. However TR does not warrant the
            completeness nor accuracy of the information at all times nor at any
            specific time. In addition, TR is neither responsible nor liable for
            any errors or omissions in the information contained on this web
            site.
          </p>
        </div>
        <div className="forward-looking">
          <h3>Forward Looking Statements:</h3>
          <p>
            Information on this web site includes or may include projections or
            other forward looking statements regarding future events or the
            future financial results of TR. The reader is cautioned that the
            assumptions used in the preparation of these forward looking
            statements involve risks and uncertainties that may cause levels of
            activity and actual results to differ materially from those
            expressed or implied in such forward looking statements or could
            affect the extent to which a particular projection is realized.
            Accordingly, no representation is made, nor can any assurance be
            given, that any such events anticipated by the forward looking
            statements will transpire or occur, and what benefits, if any, TR
            may or will derive from them.
          </p>
        </div>
        <div className="exclusion-of-liability">
          <h3>Exclusion of Liability:</h3>
          <p>
            The reader agrees to hold TR, its subsidiaries, whether wholly or
            partially owned at any time, and its constituent partners, together
            with each and all of their directors, officers, employees and agents
            harmless against claims for damages or costs or loss of any kind
            arising from access to or use of this web site or any information
            contained in or obtained through this web site.
          </p>
        </div>
        <div className="third-party-links">
          <h3>Third Party Links:</h3>
          <p>
            TR has provided, or may provide, links from this web site to several
            other web sites which are arms-length to the Company. The viewer
            should be aware that in linking to these outside web sites, he or
            she is leaving the TR web site and that TR is not responsible for
            the content of any other site.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Disclaimer
