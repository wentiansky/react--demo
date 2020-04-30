# react-demo
## 函数组件与class组件
```javascript
/**
 * 函数组件
 * 1. 没有state;
 * 2. 没有生命周期;
 * 
 */
function Mycomponent(props) {
  return <h1>{props.name}</h1>;
}

/* class组件 */
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({date: new Date()});
  }

  render() {
    return (
      <div>
        <h1>hello</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}
```

## setState异步问题
可以让`setState()`接收一个函数而不是一个对象，这个函数用上一个state作为第一个参数，将此次更新被应用时的props作为第二个参数：
```javascript
this.setState((state, props) => ({
    counter: state.counter + props.increment
  }
));
```

## React事件处理
* React事件命名采用小驼峰；
* 使用`jsx`时需传入一个事件处理函数

在`React`中不能通过返回`false`阻止默认行为，必须显示使用`preventDefault`
```javascript
/* 在函数组件中绑定事件 */
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return <a href="#" onClick={handleClick}>Click me</a>;
}

/* 在class组件中绑定事件 */
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    // 为了在回调中使用this，需要绑定this
    // 在javascript`class`中默认不会绑定this
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
        isToggleOn: !state.isToggleOn
      }
    ));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
```

## 事件中绑定this的三种方法
> * `this.handleClick = this.handleClick.bind(this)`;
> * 在class中使用`handleClick = () => {console.log(this)}`；// 实验性语法
> * `<button onClick={e => this.handleClick(e)}>Click me</button>`缺点：每次渲染组件都会创建不同的回调函数，如果该回调函数作为prop传入子组件时，这些组件可能会进行额外的重新渲染（不推荐）；


## 事件传递参数
```javascript
// 箭头函数传参，事件对象会作为第二个参数传递
<button onClick={e => this.handleDelete(id, e)}>Delete Row</button>

// 通过bind方式，事件对象以及更多的参数将会被隐式传递
<button onClick={this.handleDelete.bind(this, id)}>Delete Row</button>
```