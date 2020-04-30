import React, { Component } from 'react'

class LifeCycle extends Component {
  /**
   * @desc 构造函数通常初始化state或者给自定义方法绑定this
   */
  constructor() {
    super()
    this.state = {}
  }

  /**
   * @desc 
   * - 替换`componentWillReceiveProps`
   * - 在函数初始化和`update`时调用
   * - 将传进来的属性和当前状态值进行比较，若不一致则更新当前的状态
   * @param { Object } nextProps 新的属性
   * @param { Object } prevState 变化之前的state
   * @return { Object }
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('function init')
    if (nextProps.name !== prevState.name) {
      return {
        name: nextProps.name
      }
    }
    return null
  }


  /** 
   * @desc 通常利用此生命周期来优化react程序性能
   * @param { Object } nextProps 新的属性
   * @param { Object } nextState 变化之后的state
   * @return { Boolean } true: 触发重新渲染，false: 不会触发重新渲染
   */
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.name !== this.props.name
  }

  /** 
   * @desc 组件挂在后调用，可以在该函数中进行请求或者订阅
   */
  componentDidMount() {

  }

  /** 
   * @desc 
   * - 在`render`之后,`componentDidUpdate`之前调用
   * - 有一个返回值，会作为打三个参数传给`componentDidUpdate`，可以返回`null`
   * - 必须与componentDidUpdate搭配使用
   * @param { Object } prevProps 变化之前的属性
   * @param { Object } prevState 变化之前的state
   */
  getSnapshotBeforeUpdate(prevProps, prevState) {

  }

  /** 
   * @desc 在`getSnapshotBeforeUpdate`前调用
   * @param { Object } prevProps 变化之前的属性
   * @param { Object } prevState 变化之前的state
   * @param { Object } snapshot
   */
  componentDidUpdate(prevProps, prevState, snapshot) {

  }

  /** 
   * @desc 组件即将销毁，可以在此移除订阅，定时器等
   */
  componentWillUnmount() {

  }

  /** 
   * @desc 组件销毁后调用
   */
  componentDidUnmount() {

  }

  render() {
    return (
      <div>life cycle</div>
    )
  }
}

export default LifeCycle