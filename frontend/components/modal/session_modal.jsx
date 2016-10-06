import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import SignInFormContainer from '../session/sign_in_form_container';
import SignUpFormContainer from '../session/sign_up_form_container';
import ModalStyle from './modal_style';

class SessionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false, isSignIn: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onModalOpen = this.onModalOpen.bind(this);
  }

  openModal(bool) {
    this.setState({modalOpen: true, isSignIn: bool});
  }

  closeModal() {
    this.setState({modalOpen: false});
    ModalStyle.content.opacity = 0;

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser) {
      this.closeModal();
    }
  }

  onModalOpen() {
    ModalStyle.content.opacity = 100;
  }

  render() {

  const formType = this.state.isSignIn ? <SignInFormContainer closeModal={this.closeModal}/> : <SignUpFormContainer closeModal={this.closeModal}/>;

    return (
      <div className="right-side-content">
        <div className="session-modal-buttons group">
          <button className="sign-in-button"
            onClick={() => this.openModal(true)}>
            sign in
          </button>
          <button className="sign-up-button"
            onClick={() => this.openModal(false)}>
            sign up
          </button>
        </div>
        <div className="modal-container">
          <Modal className="modal-body"
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}
            style={ModalStyle}
            onAfterOpen={this.onModalOpen}>
            <button className="modal-x" onClick={this.closeModal}>x</button>
            {formType}
          </Modal>
        </div>
      </div>
    );
  }
}

export default SessionModal;
