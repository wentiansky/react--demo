// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './product.css';

// 总产品组件
class Product extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef(); // 定义ref
    this.handleChangeKeywords = this.handleChangeKeywords.bind(this);
    this.handleChooseStock = this.handleChooseStock.bind(this);
    this.state = {
      name: '',
      isStock: false,
      keywords: '',
      data: [
        { id: 1, category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
        { id: 2, category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
        { id: 3, category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
        { id: 4, category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
        { id: 5, category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
        { id: 6, category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
      ]
    };
  }

  handleChooseStock(status) {
    // console.log(this.myRef.current)
    this.setState({
      isStock: status
    });
  }

  handleChangeKeywords(value) {
    this.setState({
      keywords: value
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          ref={this.myRef}
          isStock={this.state.isStock}
          keywords={this.state.keywords}
          onChangeStatus={this.handleChooseStock}
          onChangeKeywords={this.handleChangeKeywords}
        />
        <FilterTable
          select={this.state.isStock}
          value={this.state.keywords}
          data={this.state.data}
        />
      </div>
    )
  }
}

// 搜索组件
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.state = {};
    this.textInput = null; // 定义ref
  }

  handleValueChange(e) {
    this.props.onChangeKeywords(e.target.value);
  }

  handleStatusChange(e) {
    // console.log(this.textInput);
    this.props.onChangeStatus(e.target.checked);
  }

  render() {
    return (
      <div>
        <h1>filter {this.props.name}</h1>
        <p>
          <input
            type="search"
            ref={search => this.textInput = search}
            value={this.props.keywords}
            // defaultValue="hello"
            onChange={this.handleValueChange}
            placeholder="search..."
          />
        </p>
        <p>
          <input type="checkbox" checked={this.props.isStock} onChange={this.handleStatusChange}></input>
          <span>only show products in stock</span>
        </p>
      </div>
    )
  }
}

// 搜索组件类型检查
SearchBar.propTypes = {
  keywords: PropTypes.string,
}

SearchBar.defaultProps = {
  name: 'product'
}

// 过滤表格
class FilterTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let rows = [],
      lastCategory = '';
    this.props.data.forEach((item, index, arr) => {
      // 没找到符合条件，返回空
      if (item.name.indexOf(this.props.value) === -1) {
        return;
      }
      if (item.category !== lastCategory) {
        rows.push(<Title category={item.category} key={item.category} />);
      }
      if (this.props.select) {
        if (item.stocked) {
          rows.push(<Row product={item} key={item.id} />);
        }
      } else {
        rows.push(<Row product={item} key={item.id} />);
      }
      lastCategory = item.category;
    });
    return (
      <div className="filter-table">
        <table cellPadding="0" cellSpacing="0" border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    )
  }
}

// 表格标题
class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <tr>
        <td colSpan="2">{this.props.category}</td>
      </tr>
    )
  }
}

// 表格行
class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let name = !this.props.product.stocked ? <span style={{ color: 'red' }}>{this.props.product.name}</span> : this.props.product.name
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    )
  }
}

export default Product