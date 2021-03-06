import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello World</h1>
//       <h2>It is {props.date.toLocaleTimeString()}</h2>
//     </div>
//   )
// } // function compoent 

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    // 渲染结束之后执行 
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
} // ES6 compoent

root.render(<Clock />)