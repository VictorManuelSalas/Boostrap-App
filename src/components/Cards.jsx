import React from 'react'

export const Cards = () => {
    return (
        <div className='m-5 conteiner row col d-flex justify-content-center'>
            <div className="card text-white bg-primary m-3" style={{ maxWidth: '20rem' }}>
                <div className="card-header">Header</div>
                <div className="card-body">
                    <h4 className="card-title">Primary card title</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div className="card text-white bg-secondary m-3" style={{ maxWidth: '20rem' }}>
                <div className="card-header">Header</div>
                <div className="card-body">
                    <h4 className="card-title">Secondary card title</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            
            <div className="card bg-light m-3" style={{ maxWidth: '20rem' }}>
                <div className="card-header">Header</div>
                <div className="card-body">
                    <h4 className="card-title">Light card title</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div className="card text-white bg-dark m-3" style={{ maxWidth: '20rem' }}>
                <div className="card-header">Header</div>
                <div className="card-body">
                    <h4 className="card-title">Dark card title</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>

    )
}
export default Cards