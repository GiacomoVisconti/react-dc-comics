import logo from '/img/dc-logo.png'

export default function Header(){
    return(
        <header className='bg-light'>
            <div className='container d-flex justify-content-between'>
            <img className='' src={logo} alt="DC logo" />

            <div className='d-flex align-items-center'>
                <ul className='d-flex list-unstyled gap-5 text-dark'>
                    <li><a href="#">CHARACTERS</a></li>
                    <li><a className='active' href="#">COMICS</a></li>
                    <li><a href="#">MOVIES</a></li>
                    <li><a href="#">TV</a></li>
                    <li><a href="#">GAMES</a></li>
                    <li><a href="#">COLLECTIBLES</a></li>
                    <li><a href="#">VIDEOS</a></li>
                    <li><a href="#">FANS</a></li>
                    <li><a href="#">NEWS</a></li>
                    <li><a href="#">SHOP</a></li>
                </ul>
            </div>
            </div>
        
        </header>
    )
}