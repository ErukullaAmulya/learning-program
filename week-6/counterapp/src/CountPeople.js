class CountPeople extends React.Component {
  constructor() {
    super();
    this.state = {
      entrycount: 0,
      exitcount: 0,
      c: 0
    };
  }

  updateEntry() {
    this.setState((prevState, props) => {
      return { entrycount: prevState.entrycount + 1 };
    });
  }

  updateExit() {
    this.setState((prevState, props) => {
      return { exitcount: prevState.exitcount + 1 };
    });
  }

  render() {
    return (
      <div className="counter-container">
        <button className="entry-btn" onClick={this.updateEntry}>Login</button>
        <p className="entry-text">{this.state.entrycount} People Entered!!!</p>

        <button className="exit-btn" onClick={this.updateExit}>Exit</button>
        <p className="exit-text">{this.state.exitcount} People Left!!!</p>
      </div>
    );
  }
}

