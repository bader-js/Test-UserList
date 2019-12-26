import React, { Component } from "react";
import axios from "axios";


export default class Details extends Component {
  state = {
    list: []
  };

  getOneDetail = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.match.params.id}`).then(res =>
        this.setState({
          list: res.data
        })
      );
  };
  componentDidMount() {
    this.getOneDetail();
  }
  render() {
    return (
      <div className="details">
        {this.state.list.map((el, key) => (
          <div key={key} class="card">
            <div class="card-body">
              <h5 class="card-title">{el.body}</h5>
            </div>

    
            
          </div>
        ))}
      </div>
    );
  }
}