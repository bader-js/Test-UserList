import React, { Component } from "react";
import axios from "axios";
import { Link,  } from "react-router-dom";
import '../App.css';

export default class UserCard extends Component {
  state = {
    list: []
  };
  getUsers = () => {
    axios.get("http://jsonplaceholder.typicode.com/users").then(res =>
      this.setState({
        list: res.data
      })
    );
  };
  
  componentDidMount() {
    this.getUsers();
  }


  render() {
    return (
      <div className="user">
        {this.state.list.map((el, key) => (
          <div key={key} class="card">
            <div class="card-body">
              <h5 class="card-title">{el.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{el.username}</h6>
              <h6 class="card-subtitle mb-2 text-muted">{el.email}</h6>
            </div>
            <Link to={`/posts/${el.id}`}>
              <button type="button" class="btn btn-primary">
            
              Describ
            </button>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}
             
         
      
  
  
