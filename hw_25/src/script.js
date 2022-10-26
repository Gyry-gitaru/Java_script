const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);

const animals = [
    {type: `turtle`, icon: `🐢`},
    {type: `octopus`, icon: `🐙`},
    {type: `fish`, icon: `🐠`},
    {type: `flamingo`, icon: `🦩`},
    {type: `penguin`, icon: `🐧`}
];

const getRandomInt = (max, min=0) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

class List extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            list: this.props.list ? JSON.parse(JSON.stringify(this.props.list)) : [],
            indexItem: [], 
            indexAnimals: this.props.list.map((item, index) => index),
            border: ''
        }

        const colorItem = setInterval(() => {    
            let randomIndex = getRandomInt(this.state.indexAnimals.length);
            let randomElementIndex = this.state.indexAnimals[randomIndex];

            this.state.indexAnimals.splice(randomIndex, 1);
            this.state.indexItem.push(randomElementIndex);

            this.setState({});

            if(this.state.indexItem.length === Math.floor(this.state.list.length/2)) {
                this.state.border = '10px solid orange';
            };

            if(this.state.indexAnimals.length === 0) {
                clearInterval(colorItem);
                this.state.border = '20px solid orange';
            };
        
        }, 2000);
    }

    render() {
        return <table style={{border: this.state.border}}>
            <tbody>
                {this.state.list.map((item, index) => <tr className={this.state.indexItem.indexOf(index) !== -1 ? 'active' : undefined}
                key={index}>
                    {Object.keys(item).map(key => <td key={key}>{item[key]}</td>)}
                </tr>)}
            </tbody>
        </table>

    }
}

root.render(
    <React.Fragment>
        <List list={animals}></List>
    </React.Fragment>
);