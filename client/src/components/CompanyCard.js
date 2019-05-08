import React from "react";
import "./CompanyCard.scss";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const CompanyCard = ({ org, activeUser }) => {
  console.log(activeUser)
  return (
    <div className="organization-card">
      <div className="organization-card-content">
        <div className="organization-img-wrapper">
          <img id="org-img" alt="company logo" src={`/logos/${org.logo}`} />
        </div>
        <h3 id="org-title">{org.name}</h3>
        <div style={{ height: "15%" }}>
          <Link to={"/jobs/" + org.id} id="org-jobs-available">
            {org.job_count} Jobs Available
          </Link>
        </div>

        <div id="org-buttons-wrapper">
          <Link to={`/organizationView/${org.id}`} id="org-details-button">
            Details
          </Link>

          {activeUser &&
            (activeUser.role === "admin" ||
              (activeUser.role === "employer" &&
                org.name === activeUser.organization)) ? (
              // when we change organizations from string to an array: 
              // activeUser.organization.includes(org.name))) ? (
              <Link to={`/organizations/${org.id}`} id="org-edit-button">
                Edit
            </Link>
            ) : null}

        </div>
      </div>
    </div>
  );
};

export default withRouter(CompanyCard);
