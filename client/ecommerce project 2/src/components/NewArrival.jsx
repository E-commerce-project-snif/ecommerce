import React from 'react';
import './NewArrival.css';

const NewArrival = () => {
    return (
        <div className="new-arrival">
            <div className="featured" style={{fontSize:'small'}}>Featured</div>
            <h1 ><b>New Arrival</b></h1>
            <div className="products">
                <div className="product large">
                    <img src="https://www.presse-citron.net/app/uploads/2021/05/PS5-Slim-Bis-1.jpg" alt="PlayStation 5" />
                    <div className="product-info">
                        <h2>PlayStation 5</h2>
                        <p>Black and White version of the PS5 coming out on sale.</p>
                        <a href="#">Shop Now</a>
                    </div>
                </div>
                <div className="product small">
                    <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTuCWXSw5pIw9EeJLBdapGAd-fW3c3c6ZhFZqsKnefcSISxRHST" alt="Women's Collections" />
                    <div className="product-info">
                        <h2>Women's Collections</h2>
                        <p>Featured woman collections that give you another vibe.</p>
                        <a href="#">Shop Now</a>
                    </div>
                </div>
                <div className="product small">
                    <img src="https://st2.depositphotos.com/34291616/43908/i/450/depositphotos_439086782-stock-photo-a-close-up-amazon-echo.jpg" alt="Speakers" />
                    <div className="product-info">
                        <h2>Speakers</h2>
                        <p>Amazon wireless speakers.</p>
                        <a href="#">Shop Now</a>
                    </div>
                </div>
                <div className="product small">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbgqFRIOuD-W-V4Qn87EUS_V-TORMlgXA_PZtBvVaWHy7YTo2Z" alt="Perfume" />
                    <div className="product-info">
                        <h2>Perfume</h2>
                        <p>GUCCI INTENSE OUD EDP.</p>
                        <a href="#">Shop Now</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewArrival;
