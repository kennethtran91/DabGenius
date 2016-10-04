import { connect } from 'react-redux';
import { header } from './header';

const mapStateToProps = (state) => {
  return {
    loggedIn: state.session.currentUser ? true : false
  };
};

const mapDispatchToProps = () => {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
