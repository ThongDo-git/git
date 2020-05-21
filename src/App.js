import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ email: e.target.value })
  }

  handleSubmit() {
    alert(this.state.email)
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='email'>Email: </label>
          <input type='text' value={this.state.email} onChange={this.handleChange} />
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

export default App;
