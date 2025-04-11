import Card from "./Card";



import { useState } from 'react'
function Tours({ tour, removeTour }) {
    return (
        <div className='container'>
            <div>
                <h2 className='Title'> Plan your trip</h2>

            </div>
            <div className="cards" >{
                tour?.map((tour) => {
                    return <Card  {...tour} removeTour={removeTour} />
                })
            }

            </div>
        </div>
    );
}
export default Tours;