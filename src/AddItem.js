import React from 'react';

export default class AddItem extends React.Component {
  constructor(props) {
    super(props)
    this.addTodoItem = this.addTodoItem.bind(this);
  }

  addTodoItem(e) {
    e.preventDefault()
    let item = document.getElementById("todo_subject").value;
    if(!item){
      alert("To-do Subject cannot be empty!");
    }else{
      this.props.addTodoItem(item);
      item = "";
      document.getElementById("todo_subject").value="";
    }
  }

  render(){
    return (
      <form onSubmit={this.addTodoItem}>
        <div id="text_boxes">
          <p>
            <input type = "text"
                   id = "todo_subject"
                   maxlength = "36"
                   placeholder = "Subject"/>
            <textarea id = "todo_description"
                      rows = "7"
                      cols = "50" 
                      maxlength = "140"
                      placeholder = "Type description here."></textarea>
          </p>
        </div>
        <div id = "btn_div">
          <button id = "add_btn">Add</button>
        </div>
      </form>
    )
  }
}