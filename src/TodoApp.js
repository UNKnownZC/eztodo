import React from 'react';
import AddItem from './AddItem';
import TodoList from './TodoList';

export default class TodoApp extends React.Component {
	constructor(props) {
		super(props);
    	this.state = { items: [
                          {"id": "1", "item": "Graduate from University", status:"completed"},
                          {"id": "2", "item": "Create a react app", status:"incompleted"},
                          {"id": "3", "item": "Interview", status:"incompleted"},
                          {"id": "4", "item": "Have breakfast", status:"completed"},
                          {"id": "5", "item": "More coding", status:"incompleted"}]};
    	this.handleAddTodoItem = this.handleAddTodoItem.bind(this);
    	this.handleFinishItem = this.handleFinishItem.bind(this);
    	this.handleDeleteItem = this.handleDeleteItem.bind(this);
	}

	render() {
	return (
		<div id = "app_container">
		<section id = "section_left">
			<TodoList items={this.state.items} 
					finishItem={this.handleFinishItem} 
                    deleteItem={this.handleDeleteItem}/>
        </section>
		<section id = "section_right">
        	<AddItem addTodoItem={this.handleAddTodoItem}/>
        </section>
		</div>
		)
	}

  handleAddTodoItem(item){
  	var length = this.state.items.length + 1;
   	let newItem = {
    		id: length,
     		item
  	}
  	let items = this.state.items;
  	items = items.concat([newItem]);
  	this.setState({items});
  }

  handleFinishItem(itemId){
    let items = this.state.items;
    for(let item of items)
    {
      if(item.id === itemId)
      {
        if(item.status === "completed")
        {
          item.status = "incompleted";
        }else{
          item.status = "completed";
        }
      }
    }
    this.setState({items});
  }

  handleDeleteItem(itemId){
    let items = this.state.items;
    let targetItem = items.find(function(item){return item.id === itemId});
    if(targetItem.status === "completed"){
      	items = items.filter(function(item){return item !== targetItem});
      	for (let item of items){
        	if (item.id !== (items.indexOf(item)+1)){
          		item.id = (items.indexOf(item)+1);
        	}
        }
    }else{
    	alert("Incompleted Task cannot be deleted");
    }
    this.setState({items});
  }
}