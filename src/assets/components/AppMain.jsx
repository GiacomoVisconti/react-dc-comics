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
                <div className="container position-relative z-3">
                   
                </div>
            </div>
            
        </main>
    
    )
}