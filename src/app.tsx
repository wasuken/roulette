import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ReactRouletteSlot, RouletteSlotDataItem} from 'react-roulette-slot';

interface AppInterface{

}

class App extends React.Component<AppInterface,{}>{
	colors: string[] = ["Black", "Gray", "Magenta", "Olive", "Silver", "Yellow"
						, "Blue", "Green", "Maroon", "Purple", "Teal"
						, "Cyan", "Lime", "Navy", "Red", "White"]
	action = (cb) => {
		cb({ data: 1000 });
	};
	createData(labels: string[]): RouletteSlotDataItem[]{
		let data = [];
		let cnt = 0;
		let ls = JSON.parse(JSON.stringify(labels))
		for(let x in labels){
			data.push({id: cnt, img: "/dist/img/" + this.colors[cnt] + ".jpg",
					   label: ls[0]});
			ls.splice(0, 1);
			cnt++;
		}
		console.log(data)
		return data;
	}
	constructor(props){
		super(props);
	}
	render(){
		return (
				<div>
				<ReactRouletteSlot
			data={this.createData(["test", "dayo", "koreha",
								   "test2", "dayo2", "koreha2",
								   "test3", "dayo3", "koreha3",
								   "test4", "dayo4", "koreha4"
								  ])}
			action={this.action}
			width={300}
			height={300}
				/>
			</div>
		)
	}
}
ReactDOM.render(
		<App />,
	document.querySelector("#app")
);
