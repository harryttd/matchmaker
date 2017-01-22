'use strict';
import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';

const Matches = ({ selectedPerson, matches }) => {

  console.log("MATCHES COMPONENT", selectedPerson, "MATCHES", matches);
  return (
    <section className="product-grid container">
      <div className="row">
        {
          matches.length && matches.map(match =>
            <div key={match.id} className="col col-md-4 demo-card-square mdl-shadow--2dp" onClick={() => browserHistory.push(`/${match.gender}s/${match.indexId}`)}>
              <Link>
                <div className="mdl-card__title mdl-card--expand">
                  <img src={ match.image } />
                </div>
                <div className="mdl-card__title-text">
                  {`${match.firstName} ${match.lastName}`}
                </div>
              </Link>
              <div className="mdl-card__supporting-text">
                Age: { new Date().getFullYear() - match.birthday.match(/\d{4}/)[0] }
              </div>
            </div>
          )
        }
      </div>
    </section>
  );
};

const mapState = ({ selectedPerson, matches }) => ({ selectedPerson, matches });
export default connect(mapState)(Matches);
