function MainContent() {
    return(
        <nav>
          <h1>Welcome to codedsun</h1>
          <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
    );
}

ReactDOM.render(
    <div>
        <MainContent/>
        </div>, document.getElementById("root"))