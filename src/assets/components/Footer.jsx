import IconLinks from './IconLinks';

export default function Footer(){
    return (
        <>
            <IconLinks/>
            <footer className='z-2'>
                <div className="footer_top">
                    <div className="container d-flex justify-content-between">
                        <div className="links">
                            <div className="row">
                                <div className="col p-0 text-light">
                                    <h4>DC COMICS</h4>
                                    <ul className='list-unstyled'>
                                        <li><a href="#">lorem</a></li>
                                        <li><a href="#">lorem</a></li>
                                        <li><a href="#">lorem</a></li>
                                        <li><a href="#">lorem</a></li>
                                        <li><a href="#">lorem</a></li>
                                        <li><a href="#">lorem</a></li>
                                        <li><a href="#">lorem</a></li>
                                    </ul>
                                    <h4>SHOP</h4>
                                    <ul className='list-unstyled'>
                                        <li><a href="#">lorem</a></li>
                                        <li><a href="#">lorem</a></li>
                                        <li><a href="#">lorem</a></li>
                                    </ul>

                                </div>
                                <div className="col p-0 text-light">
                                
                                    <h4>DC COMICS</h4>
                                    <ul className='list-unstyled'>
                                        <li><a href="#">lorem</a></li>
                                        <li><a href="#">lorem</a></li>
                                        <li><a href="#">lorem</a></li>
                                        <li><a href="#">lorem</a></li>
                                        <li><a href="#">lorem</a></li>
                                        <li><a href="#">lorem</a></li>
                                        <li><a href="#">lorem</a></li>
                                        <li><a href="#">lorem</a></li>
                                        <li><a href="#">lorem</a></li>
                                        <li><a href="#">lorem</a></li>
                                    </ul>

                                </div>
                                <div className="col p-0 text-light"> 
                                    
                                    <h4>SHOP</h4>
                                    <ul className='list-unstyled'>
                                        <li><a href="#">lorem</a></li>
                                        <li><a href="#">lorem</a></li>
                                        <li><a href="#">lorem</a></li>
                                        <li><a href="#">lorem</a></li>
                                        <li><a href="#">lorem</a></li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <img className='z-1' src="/img/dc-logo-bg.png" alt="" />
                    </div>
                </div>
                <div className="footer_bottom z-3 position-relative bg-dark">
                    SIGN UP NOW
                </div>
            </footer>
        </>
    )
}