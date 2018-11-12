import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchNewTime } from '../../redux/actionCreators'

const Home = (props) => {
  return (
    <div className="home">
      <h1>Welcome home!</h1>
      
      <button onClick={props.updateTime}>
        Update time
      </button>
    </div>
  );
}

const mapStateToProps = state => { return { currentTime: state.currentTime } }

const mapDispatchToProps = dispatch => ({
  updateTime: () => dispatch(fetchNewTime())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
