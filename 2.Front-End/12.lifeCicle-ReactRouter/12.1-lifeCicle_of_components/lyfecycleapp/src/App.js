// src/App.js
import React from 'react';
import './App.css';
import Profile from './Profile';
import Connections from './Connections';

class App extends React.Component {
  constructor() {
    // 💡 me preencha!
    super();

    this.state = {
      showProfile: true,
    };

    this.changeProfile = this.changeProfile.bind(this);
  }

  changeProfile() {
    const { showProfile } = this.state;

    this.setState({ showProfile: !showProfile });
  }

  render() {
    // 💡 está faltando algo aqui!
    const { showProfile } = this.state;
    return (
      <div className="gitNetwork d-flex flex-column justify-content-center">
        {showProfile ? <Profile /> : null}
        <div className="central d-flex justify-content-center">
          <button
            className="btn btn-dark align-self-center"
            type="button"
            onClick={this.changeProfile}
          >
            Mostrar / Ocultar Perfil
          </button>
        </div>
        <Connections />
      </div>
    );
  }
}

export default App;
