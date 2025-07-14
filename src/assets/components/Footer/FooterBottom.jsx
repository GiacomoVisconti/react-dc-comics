export default function FooterBottom(){
    return (
        <div className="footer_bottom z-3 position-relative bg-dark">
            <div className="container p-0 d-flex justify-content-between py-4">
                <div>
                    <button className="p-2 text-light bg-dark border-primary">SIGN-UP NOW!</button>
                </div>
                <div className="d-flex gap-3">
                    <span className="text-primary p-3">
                        FOLLOW US
                    </span>
                    <div className="d-flex gap-3 align-items-center">
                        <a href="#">
                            <img className="" src="/img/footer-facebook.png" alt="facebook" />
                        </a>
                        <a href="#">
                            <img className="" src="/img/footer-periscope.png" alt="facebook" />
                        </a>
                        <a href="#">
                            <img className="" src="/img/footer-pinterest.png" alt="facebook" />
                        </a>
                        <a href="#">
                            <img className="" src="/img/footer-twitter.png" alt="facebook" />
                        </a>
                        <a href="#">
                            <img className="" src="/img/footer-youtube.png" alt="facebook" />
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>

    )
}