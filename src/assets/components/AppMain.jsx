import Jumbotron from './Jumbotron'
import MainContent from './MainContent'

export default function Main(props){
    
    
    return (
        
    
        <main>
            <Jumbotron/>
            <div className="bg-dark z-3 position-relative">
                <div className="container">
                    <MainContent comics={props.comics}/>
                </div>
                <div className="container position-relative z-3">
                </div>
            </div>
            
        </main>
    
    )
}