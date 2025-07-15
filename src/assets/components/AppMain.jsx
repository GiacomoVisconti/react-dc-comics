import Jumbotron from './Jumbotron'
import MainContent from './MainContent'

export default function Main(){
    return (
        
    
        <main>
            <Jumbotron/>
            <div className="bg-dark z-3 position-relative">
                <div className="container">
                    <MainContent/>
                </div>
                <div className="container">
                    <div className=" position-absolute top-0 translate-middle">
                        <button type="button" className="series_btn btn btn-primary fs-4 ">CURRENT SERIES</button>
                    </div>
                </div>
            </div>
            
        </main>
    
    )
}