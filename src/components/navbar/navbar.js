const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={require('../assets/logo.png')} alt="Logo" />
            </div>
            <ul className="nav-links">
                <li><a href="#about">소개</a></li>
                <li><a href="#about">가이드</a></li>
                <li><a href="#services">연합</a></li>
                <li><a href="#news">NEWS</a></li>
                <li><a href="#map">캠코더 맵</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;