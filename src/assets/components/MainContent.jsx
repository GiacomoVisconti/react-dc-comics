import comics from "../data/comics"

export default function MainContent(){
    return (

        <>

                    
            <h5 type="button" className="btn btn-primary fs-4 ">CURRENT SERIES</h5>
                    
            <div className="py-5 text-light">
                <div className="row d-flex">

                    {comics.map(({id, title, series, thumb})=>{

                        return (
                            <div className="col-lg-2 col-md-4 col-sm-6 gap-4">
                                <div className="comics_card">
                                    
                                    <img key={id} className="comics_img" src={thumb} alt={title} /> 
                                    
                                    <div className="bg-dark text-light py-2">
                                        <p className="card-title fs-6">{series.toUpperCase()}</p>
                                
                                    </div>
                                </div>
                            </div>
                        )

                    })}

                </div>
            </div>
        </>

    )
}