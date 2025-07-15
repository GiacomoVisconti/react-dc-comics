
export default function IconLinks(){

    const icon_menu = [

        {
            id: 1,
            src: '/img/buy-comics-digital-comics.png',
            href:'#',
            name: 'DIGITAL COMICS'
        },
        {
            id: 2,
            src: '/img/buy-comics-merchandise.png',
            href:'#',
            name: 'DC MERCHANDISE'
        },
        {
            id: 3,
            src: '/img/buy-comics-subscriptions.png',
            href:'#',
            name: 'SUBSCRIPTION'
        },
        {
            id: 4,
            src: '/img/buy-comics-shop-locator.png',
            href:'#',
            name: 'COMIC SHOP LOCATOR'
        },
        {
            id: 5,
            src: '/img/buy-dc-power-visa.svg',
            href:'#',
            name: 'DC POWER VISA'
        }
    ]


    return(
        <div className="bg-primary z-3 position-relative">
            <div className="d-flex justify-content-between gap-4 container p-5">
                
                {/* <a className="text-light d-flex gap-3 align-items-center" href="#">
                    <img className="img-fluid w-25" src="/img/buy-comics-digital-comics.png" alt="Digital comics" />DIGITAL COMICS
                </a>
                <a className="text-light d-flex gap-3 align-items-center" href="#">
                    <img className="img-fluid w-25" src="/img/buy-comics-merchandise.png" alt="Digital comics" />DC MERCHANDISE
                </a>
                <a className="text-light d-flex gap-3 align-items-center" href="#">
                    <img className="img-fluid w-25" src="/img/buy-comics-subscriptions.png" alt="Digital comics" />SUBSCRIPTION
                </a>
                <a className="text-light d-flex gap-3 align-items-center" href="#">
                    <img className="img-fluid w-25" src="/img/buy-comics-shop-locator.png" alt="Digital comics" />COMIC SHOP LOCATOR
                </a>
                <a className="text-light d-flex gap-3 align-items-center" href="#">
                    <img className="img-fluid w-25" src="/img/buy-dc-power-visa.svg" alt="Digital comics" />DC POWER VISA
                </a>
             */}
                
                {icon_menu.map(({id, src, href, name})=>{
                    return <a key={id} className="text-light d-flex gap-3 align-items-center" href={href}>
                    <img className="img-fluid w-25" src={src} alt={name} />{name}
                </a>
                })}



            </div>
            


        </div>
    )
}