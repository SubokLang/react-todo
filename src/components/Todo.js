import React, { Component } from 'react';

class Todo extends Component {
      render() {
          var {text} = this.props;
          var {id} = this.props;
        return (
          <div>
           {id}. {text}
          </div>
        );
      }
    }
    
    export default Todo;