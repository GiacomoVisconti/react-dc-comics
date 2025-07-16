export default function Card(props){

    return (

        <div className="col-lg-2 col-md-4 col-sm-6 gap-4">
            <div className="comics_card">
                
                <img key={props.is} className="comics_img" src={props.thumb} alt={props.title} /> 
                
                <div className="bg-dark text-light py-2">
                    <p className="card-title fs-6">{props.series.toUpperCase()}</p>
            
                </div>
            </div>
        </div>
    )

}