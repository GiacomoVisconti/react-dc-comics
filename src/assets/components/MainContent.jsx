import comics from "../data/comics"

export default function MainContent(){
    return (

        <>
            <div className="py-5 text-light">
                <div className="row">

                    {comics.map(({id, title, series, thumb})=>{

                        return (
                            <div className="col-lg-2 col-md-4 col-sm-6 g-4">
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