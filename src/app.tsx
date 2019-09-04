import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Roulette from 'react-roulette';

interface AppPropsInterface{

}
interface AppStateInterface{
	items: string[],
	colors: string[]
}

class App extends React.Component<AppPropsInterface, AppStateInterface>{
	constructor(props){
		super(props);
		this.state = {
			items: [],
			colors: []
		}
		this.insert_todo = this.insert_todo.bind(this);
		this.delete_todo = this.delete_todo.bind(this);
	}
	randomColor(){
		return "#" + Math.floor(Math.random() * 16777215).toString(16);
	}
	insert_todo(){
		let todo_value:string = (document.querySelector('#todo') as HTMLInputElement).value
		if(this.state.items.length > 0){
			this.setState({
				items: [...this.state.items,todo_value],
				colors: [...this.state.colors, this.randomColor()]
			});
		}else{
			this.setState({
				items: [todo_value],
				colors: [this.randomColor()]
			});
		}
		console.log(this.state);
	}
	delete_todo(event: React.MouseEvent<HTMLLIElement, MouseEvent>){
		console.log(event);
	}
	render(){
		console.log(this.state);
		let li = this.state.items.map((x, i) => <li key={i} onClick={this.delete_todo}>{x}</li>)
		return (
				<div>
				todo:<input type="text" id="todo" />
			<ul>
				{li}
			</ul>
				<button onClick={this.insert_todo}>insert</button>
				<Roulette items={this.state.items} colors={this.state.colors}
			onChange={(selected) => alert(selected)} />
			</div>
		)
	}
}
ReactDOM.render(
		<App />,
	document.querySelector("#app")
);
