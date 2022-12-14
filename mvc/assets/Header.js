var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "header",
                { className: "d-flex flex-row align-item-center header justify-content-sb" },
                React.createElement(
                    "div",
                    null,
                    React.createElement("img", { src: "assets/img/logo.png", alt: "" })
                ),
                React.createElement("input", { type: "text", placeholder: "Rechercher", id: "width-600", className: "border-radius-max" }),
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "button",
                        { className: "btn btn-primary mr-15" },
                        React.createElement("i", { "class": "fa-solid fa-user mr-5" }),
                        "Mon compte"
                    ),
                    React.createElement("i", { "class": "fa-solid fa-bars" })
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var domContainer = document.querySelector("#header-component");
ReactDOM.render(React.createElement(Header, null), domContainer);