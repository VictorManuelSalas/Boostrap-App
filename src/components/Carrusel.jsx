import React from 'react'

const Carrusel = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="http://dotnettipoftheday.org/wp-content/uploads/2022/02/react-native-735x400.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://blog.desafiolatam.com/wp-content/uploads/2019/04/react-galaxia.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://cdn-images-1.medium.com/max/2000/1*qXcjSfRj0C0ir2yMsYiRyw.jpeg" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>


    )
}

export default Carrusel