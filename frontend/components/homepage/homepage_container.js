import { connect } from 'react-redux';
import Homepage from './homepage';

const mapStateToProps = (state) => {
  debugger
  return {
    currentUser: state.session.currentUser
  };
};

export default connect(
  mapStateToProps
)(Homepage);
