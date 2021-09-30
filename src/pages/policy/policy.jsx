import React from "react";
import "./policy.scss";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/header";

import handIcon from "../../assets/images/icons/hand.svg";

const Policy = ({ sidebar, setSidebar }) => {
  return (
    <div className="policy">
      <Header sidebar={sidebar} setSidebar={setSidebar} page={"policy-page"} />
      <main className="container">
        <h1>Our Policy</h1>
        <article className="general-notice">
          <h3>Local Capacity</h3>
          <p>
            TR proposes an organization and approach that will emphasize
            responsiveness to the Industry it operates while achieving
            progressively greater local capability and local content, stepping
            toward self-sufficiency, with limited, as required expatriate
            augmentation. TR strategic technical alliances with industry leaders
            and indigenous development programs are designed to train and
            motivate best-qualified staff. This alliance combines local
            responsiveness, global efficiency and organizational learning to
            ensure that projects are executed efficiently and effectively.
          </p>
        </article>
        <article className="policy-notice">
          <h3>Community Relations</h3>
          <p>
            All operations of TR are carried out in different communities, both
            onshore and offshore, and we believe these communities are our
            partners in executing our projects. Therefore it is the policy TR to
            develop and maintain a healthy and cordial relationship with the
            host communities. To this end, the following shall be adhered to:
          </p>
          <ul className="policy-list">
            <li className="policy-list-item">
              <img src={handIcon} alt="Icon" />
              Respect the cultural, social and religious beliefs of the host
              communities.
            </li>

            <li className="policy-list-item">
              <img src={handIcon} alt="Icon" />
              Take necessary steps to maintain good relations with host
              communities, public and local authorities.
            </li>

            <li className="policy-list-item">
              <img src={handIcon} alt="Icon" />
              Co-operate with government and host communities in ensuring good
              social relation As much as possible, involve host community
              personnel in the execution of projects by giving spot-hire
              positions.
            </li>

            <li className="policy-list-item">
              <img src={handIcon} alt="Icon" />
              Be attentive to host community needs and fulfil all FTOs and GMOU
            </li>
          </ul>
        </article>
        <article className="forward-looking">
          <h3>Health, Safety and Environment Policy</h3>
          <p>
            TR is committed to giving priority to Health, Safety and the
            Environment (HSE) in all of its operations. It also insists that all
            of its employees, contractors and sub-contractors exhibit the same
            determination and commitment.The Company believes wholeheartedly
            that this policy will guarantee quality and high productivity. To
            achieve this commitment, the Company’s business operation will be
            organized, planned and executed in such a manner as to:
          </p>
          <ul className="policy-list">
            <li className="policy-list-item">
              <img src={handIcon} alt="Icon" />
              Protect and promote the health of the workforce, conduct all
              operations in a safe and environmentally friendly manner;
            </li>

            <li className="policy-list-item">
              <img src={handIcon} alt="Icon" />
              Promote its conviction that all accidents can be avoided
            </li>

            <li className="policy-list-item">
              <img src={handIcon} alt="Icon" />
              Train its personnel with all the relevant procedures for safety
              and conservation of the environment.
            </li>

            <li className="policy-list-item">
              <img src={handIcon} alt="Icon" />
              Conduct projects with adequate safety equipment and information
            </li>
            <li className="policy-list-item">
              <img src={handIcon} alt="Icon" />
              Develop and research procedures which improve health, safety and
              protection of the environment
            </li>
            <li className="policy-list-item">
              <img src={handIcon} alt="Icon" />
              Act on and support staff recommendations for relevant safety
              equipment, services and procedures for the prevention of accidents
            </li>
            <li className="policy-list-item">
              <img src={handIcon} alt="Icon" />
              Observe HSE rules and regulations and encourage staff to meet or
              better HSE targets
            </li>
            <li className="policy-list-item">
              <img src={handIcon} alt="Icon" />
              Comply with all federal, state and international regulatory
              agencies laws, as they concern HSE
            </li>
          </ul>
        </article>
        <article>
          <p className="text">
            Support the oil, exploration, geophysical industries and
            environmental agencies’ accepted standards on Health, Safety and
            Environment policies
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Policy;
