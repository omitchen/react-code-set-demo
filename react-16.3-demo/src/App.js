import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: props.search || '',
    };
  }

  onChange = e => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(e.target.value);
    } else {
      this.setState({
        search: e.target.value,
      });
    }
  };

  static getDerivedStateFromProps(props, state) {
    console.log(props, state);

    if (typeof props.search === 'string') {
      return {
        search: props.search,
      };
    }
    return null;
  }

  getSnapshotBeforeUpdate(props, state) {
    console.log(
      "getSnapshotBeforeUpdate====", props, state
    );
    return {
      a: 1
    }
  }

  componentDidUpdate(props, state, data) {
    console.log(
      "componentDidUpdate======", props, state, data
    );
  }

  render() {
    const { search } = this.state;
    return <div>
      <button onClick={() => {
        this.setState({
          search: 222
        })
      }}>click</button>
      <input value={search} onChange={this.onChange} />
      <p>{search}</p>
    </div>;
  }
}

export default App;
