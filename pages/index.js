import React from 'react';
import Link from 'next/link';

const Home = () => {
    return (
        <main className="main-home">
            <div className="home-text-container">
                <h1>Tucu Bleich - <span style={{color: '#fab71c'}}>Sauvage</span></h1>
                <div id="home-links-container">
                    <Link href="/player"><a>Asculta albumul Sauvage</a></Link>
                </div>
            </div>
        </main>
    )
}

export default Home;