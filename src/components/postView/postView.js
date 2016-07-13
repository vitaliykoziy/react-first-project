//  import modules
import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Time from 'react-time';
//  import utils
import { Rating } from '../common/rating';
import { Map } from '../../utils/googleMap';
// import components
import { SeparateLine } from '../common/separateLine';
//  import actions
import { seoActions } from '../../redux/actions/index';
//  import styles
import styles from './post.css';
import 'font-awesome-webpack';

const fetchSeoData = props => props.fetchSeoDataAction('post');
const mapData = {
  markers: [{
    position: {
      lat: 48.914370,
      lng: 24.710871,
    },
  }],
  defaultCenter: {
    lat: 48.914370,
    lng: 24.710871,
  },
};
class PostView extends Component {
  componentWillMount() {
    fetchSeoData(this.props);
  }

  render() {
    return (
      <div className={styles.postContent}>
        <Helmet {...this.props.seo} />
        <article className={styles.post}>
          <header>
            <div className={styles.information}>
              <Time value={1467971242 * 1000} format="DD MMM YYYY" />
              <Rating rating={3.5} />
            </div>
            <h1>Are you wasting your time with Facebook?</h1>
          </header>
          <content>
            <p>
              <img className={styles.leftImage} src="http://www.mybusiness.com.au/images/technology/debbie-mayo-smith.jpg" alt="post" />
              Lorem ipsum dolor sit amet, eu qui viris facilisis consequuntur,
              ea quis putent alienum cum, sonet corpora facilisis et duo.
              Facilis qualisque inciderint ne vim, per melius commune id,
              albucius facilisi eum et. Mel ea debet patrioque,
              soleat audiam interpretaris qui at. Eu eos tantas vivendo patrioque,
              ponderum postulant vim no.
              Error noluisse splendide no vim. Ne rebum malorum persius his.

              Vidit debitis cu his, habeo salutandi facilisis qui et. Magna alienum oporteat cum ea,
              id vide nemore dissentias sed. No cum dico ludus, ex his oporteat instructior.
              Idque quidam intellegam eos ut.

              No sale tempor feugiat mei, id patrioque assentior vel, sonet vidisse eos ad.
              Ornatus repudiare conclusionemque ea eum, ullum errem doctus mel ex,
              sed cu oportere contentiones. Mea oblique insolens ad,
              epicuri oporteat delicatissimi id pri.
              Tempor feugait ea qui. Dictas denique has an, at simul accusata quaestio vix.
              Et mei natum necessitatibus, diam case patrioque ne quo, no justo saperet per.

              Pro at audiam noluisse inciderint, eam an hinc delectus consulatu.
              In vide altera sea, sea magna recteque scriptorem ex.
              No qui graece vulputate, pri at libris inermis. Usu prima quidam eu.
              Sint vocibus ut qui, id mea novum labore. Sea facer aliquip ne, nec id putant legimus.
              Utamur officiis at has, te nullam accommodare sea.

              Eu postea delicatissimi eam, hinc fuisset ius te.
              Sit novum omnes fastidii ne, elitr urbanitas necessitatibus sit at.
              Qui persius omittam te, id pri nibh aperiri.
              Altera persequeris conclusionemque at sea, duo te eros rebum eripuit.
            </p>
          </content>
          <hr />
          <h2>Find us on the map</h2>
          <Map {...mapData} />
        </article>
        <div className={styles.commentsSection}>
          <SeparateLine text="Comments" />
          <div className={styles.comment}>
            <div className={styles.author}>Kokos Kokosovych</div>
            <div className={styles.message}>
              Hello i am comment
            </div>
            <div className={styles.separateLine}></div>
          </div>

          <div className={styles.comment}>
            <div className={styles.author}>Kokos Kokosovych</div>
            <div className={styles.message}>
              Hello i am comment
            </div>
            <div className={styles.separateLine}></div>
          </div>
        </div>
      </div>
    );
  }
}
PostView.propTypes = {
  fetchSeoDataAction: PropTypes.func,
  seo: PropTypes.object,
};

export default connect(
  state => ({ seo: state.seo }),
  dispatch => bindActionCreators(
    {
      ...seoActions,
    }, dispatch)
)(PostView);
