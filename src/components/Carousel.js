import React from 'react'
import Carousel from 'react-bootstrap/Carousel' 

const BootstrapCarousel = () => {  
        return (  
            <div>  
                <div className='container' > 
                    <div className='row' > 
                        <div className='col-sm-8 m-auto' >
                            <Carousel>  
                                <Carousel.Item style={{'height':"300px"}} >  
                                    <img style={{'height':"300px"}}  
                                    className="d-block w-100"  
                                    src={"https://source.unsplash.com/PtCmDqF8nXc/700x400"} alt="Arches National Park" />  
                                    <Carousel.Caption>  
                                        <h3>Arches National Park </h3> 
                                        <p>Grand County, Utah</p> 
                                    </Carousel.Caption>  
                                </Carousel.Item  >  
                                <Carousel.Item style={{'height':"300px"}}>  
                                    <img style={{'height':"300px"}}  
                                    className="d-block w-100"  
                                    src={"https://source.unsplash.com/vIEJB5ZQD3g/700x400"} alt="Acadia National Park" />  
                                    <Carousel.Caption>  
                                        <h3>Acadia National Park</h3>
                                        <p>Maine</p> 
                                    </Carousel.Caption>  
                                </Carousel.Item>  
                                <Carousel.Item style={{'height':"300px"}}>  
                                    <img style={{'height':"300px"}}  
                                        className="d-block w-100"  
                                        src={"https://source.unsplash.com/Hwd6xMr1xng/700x400"} alt="Point Lobos State Natural Reserve" />  
                                    <Carousel.Caption>  
                                        <h3>Point Lobos State Natural Reserve</h3>
                                        <p>Carmel, California</p> 
                                    </Carousel.Caption>  
                                    </Carousel.Item>  
                                <Carousel.Item style={{'height':"300px"}}>  
                                    <img style={{'height':"300px"}}  
                                        className="d-block w-100"  
                                        src={"https://source.unsplash.com//dvtc1AU0CjI/700x400"} alt="Escola State Park"/>  
                                    <Carousel.Caption>  
                                        <h3>Ecola State Park</h3>
                                        <p>Cannon Beach, Oregon</p>  
                                    </Carousel.Caption>  
                                </Carousel.Item>  
                            </Carousel>
                        </div>
                    </div>
                </div>  
            </div>  
        )  
     
}  

export default BootstrapCarousel  