class Header extends React.Component{
render() {
        return(
    <header className="d-flex flex-row align-item-center header justify-content-sb">
    <div>
        <img src="assets/img/logo.png" alt ="" />
    </div>
    <input type="text" placeholder="Rechercher" id="width-600" className="border-radius-max"/>
    <ul>
        <button className="btn btn-primary mr-15">
            <i class="fa-solid fa-user mr-5"></i>
            Mon compte
        </button>
        <i class="fa-solid fa-bars"></i>
    </ul>
    </header>
    )
}
}

const domContainer = document.querySelector("#header-component");
ReactDOM.render(<Header/>, domContainer); 