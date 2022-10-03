class Footer extends React.Component {
    render(){
        return(
            <footer className="d-flex flex-row align-items-center justify-content-center justify-content-sb p-20 footer">
                <p className="d-flex flex-column">Contact
                    <a href="mailto:Solarys@fakemail.com">Email</a>
                </p>
                <p className="d-flex flex-column">Qui-sommes-nous</p>
                <p className="d-flex flex-column">CGU</p>
                <p className="d-flex flex-column">Préférences de cookie</p>
                <p className="d-flex flex-column">@Solarys
                    <p>
                        <i class="fa-brands fa-instagram mr-15"></i>
                        <i class="fa-brands fa-facebook"></i>
                    </p>
                    <p>
                        <i class="fa-brands fa-twitter mr-15"></i>
                        <i class="fa-brands fa-tiktok"></i>
                    </p>
                </p>
            </footer>
        )
    }
}

const domContainer = document.querySelector("#footer-component");
ReactDOM.render(<Footer/>, domContainer); 