var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
    _inherits(Footer, _React$Component);

    function Footer() {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
    }

    _createClass(Footer, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "footer",
                { className: "d-flex flex-row align-items-center justify-content-center justify-content-sb p-20 footer" },
                React.createElement(
                    "p",
                    { className: "d-flex flex-column" },
                    "Contact",
                    React.createElement(
                        "a",
                        { href: "mailto:Solarys@fakemail.com" },
                        "Email"
                    )
                ),
                React.createElement(
                    "p",
                    { className: "d-flex flex-column" },
                    "Qui-sommes-nous"
                ),
                React.createElement(
                    "p",
                    { className: "d-flex flex-column" },
                    "CGU"
                ),
                React.createElement(
                    "p",
                    { className: "d-flex flex-column" },
                    "Pr\xE9f\xE9rences de cookie"
                ),
                React.createElement(
                    "p",
                    { className: "d-flex flex-column" },
                    "@Solarys",
                    React.createElement(
                        "p",
                        null,
                        React.createElement("i", { "class": "fa-brands fa-instagram mr-15" }),
                        React.createElement("i", { "class": "fa-brands fa-facebook" })
                    ),
                    React.createElement(
                        "p",
                        null,
                        React.createElement("i", { "class": "fa-brands fa-twitter mr-15" }),
                        React.createElement("i", { "class": "fa-brands fa-tiktok" })
                    )
                )
            );
        }
    }]);

    return Footer;
}(React.Component);

var domContainer = document.querySelector("#footer-component");
ReactDOM.render(React.createElement(Footer, null), domContainer);