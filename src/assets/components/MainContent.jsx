
import Card from "./Card"

export default function MainContent(props){
    return (

        <>

                    
            <h5 className="comics_section_title btn btn-primary fs-4 ">CURRENT SERIES</h5>
                    
            <div className="py-3 text-light">
                <div className="row d-flex">

                    {props.comics.map(({id, title, series, thumb})=>{

                        return (
                            <Card key={id} title={title} series={series} thumb={thumb} />
                        )

                    })}

                </div>
            </div>

            <div className="d-flex justify-content-center align-items-center py-5">
                <button className="btn btn-primary fs-6">LOAD MORE</button>
            </div>
        </>

    )
}