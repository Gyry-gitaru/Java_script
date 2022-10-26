var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var domContainer = document.querySelector('#root');
var root = ReactDOM.createRoot(domContainer);

var animals = [{ type: 'turtle', icon: '\uD83D\uDC22' }, { type: 'octopus', icon: '\uD83D\uDC19' }, { type: 'fish', icon: '\uD83D\uDC20' }, { type: 'flamingo', icon: '\uD83E\uDDA9' }, { type: 'penguin', icon: '\uD83D\uDC27' }];

var getRandomInt = function getRandomInt(max) {
    var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

var List = function (_React$Component) {
    _inherits(List, _React$Component);

    function List(props) {
        _classCallCheck(this, List);

        var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));

        _this.state = {
            list: _this.props.list ? JSON.parse(JSON.stringify(_this.props.list)) : [],
            indexItem: [],
            indexAnimals: _this.props.list.map(function (item, index) {
                return index;
            }),
            border: ''
        };

        var colorItem = setInterval(function () {
            var randomIndex = getRandomInt(_this.state.indexAnimals.length);
            var randomElementIndex = _this.state.indexAnimals[randomIndex];

            _this.state.indexAnimals.splice(randomIndex, 1);
            _this.state.indexItem.push(randomElementIndex);

            _this.setState({});

            if (_this.state.indexItem.length === Math.floor(_this.state.list.length / 2)) {
                _this.state.border = '10px solid orange';
            };

            if (_this.state.indexAnimals.length === 0) {
                clearInterval(colorItem);
                _this.state.border = '20px solid orange';
            };
        }, 2000);
        return _this;
    }

    _createClass(List, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                'table',
                { style: { border: this.state.border } },
                React.createElement(
                    'tbody',
                    null,
                    this.state.list.map(function (item, index) {
                        return React.createElement(
                            'tr',
                            { className: _this2.state.indexItem.indexOf(index) !== -1 ? 'active' : undefined,
                                key: index },
                            Object.keys(item).map(function (key) {
                                return React.createElement(
                                    'td',
                                    { key: key },
                                    item[key]
                                );
                            })
                        );
                    })
                )
            );
        }
    }]);

    return List;
}(React.Component);

root.render(React.createElement(
    React.Fragment,
    null,
    React.createElement(List, { list: animals })
));