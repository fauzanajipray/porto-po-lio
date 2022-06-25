import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name="home" className="w-full h-screen bg-[#0A192F]">
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-pink-600">Hi,</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#CCD6F6]">I'm Fauzan Aji Prayoga 🦍</h1>
                <h2 className="text-4xl sm:text-7xl font-bold text-[#8892B0]">Software Engineer</h2>
                <p className="text-[#8892b0] py-4 max-w-[700px]">I'm a software engineer that love exploring around software development stuff especially kotlin and javascript</p>
                <div>
                    <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-300">
                        <Link to="work" smooth={true} duration={500}>
                            Checkout my work
                        </Link>
                        <span className="group-hover:rotate-90 duration-300">
                            <HiArrowNarrowRight className="ml-3" />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home