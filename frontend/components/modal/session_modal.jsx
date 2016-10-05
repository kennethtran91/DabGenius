import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import SignInForm from '../session/sign_in_form';
import SignUpForm from '../session/sign_up_form';

class SessionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false, isSignIn: false };
    // this.openModal = this.openModal.bind(this);
    // this.closeModal = this.closeModal.bind(this);
  }

  openModal(bool) {
    this.setState({modalOpen: true, isSignIn: bool});
  }

  closeModal() {
    this.setState({modalOpen: false});
  }

  componentDidMount() {

  }

  render() {

    const formType = this.state.isSignIn ? <SignInForm/> : <SignUpForm/>;

    return (
      <div>
        <button className="sign-in-button"
                onClick={this.openModal.bind(this, true)}>
              log in!!
        </button>
        <button className="sign-up-button"
                onClick={this.openModal.bind(this, false)}>
              sign up!!
        </button>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}>

          <button onClick={this.closeModal}>X</button>
          {formType}
        </Modal>
      </div>
    );
  }
}

export default SessionModal;
