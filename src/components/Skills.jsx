import React from 'react';

import Laravel from '../assets/Laravel.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Mongo from '../assets/mongo.png';
import PhpLogo from '../assets/php.png';
import PostgreLogo from '../assets/postgresql.png';
import ExpressLogo from '../assets/express.png';
import SequelizeLogo from '../assets/logo_sequelize.png';
import ComposeLogo from '../assets/logo_jcompose.png'
import VscodeLogo from '../assets/logo_vscode.png'
import AdsLogo from '../assets/logo_ads.png'
import KotlinLogo from '../assets/logo_kotlin.png'

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Interest</p>
                    <p className='py-4'>// These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-3 sm:grid-cols-6 gap-1 sm:gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={KotlinLogo} alt="Kotlin icon" />
                        <p className='my-4'>KOTLIN</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="JS icon" />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={PhpLogo} alt="Php icon" />
                        <p className='my-4'>PHP</p>
                    </div>
                    
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Laravel} alt="Laravel icon" />
                        <p className='my-4'>Laravel</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={GitHub} alt="Git icon" />
                        <p className='my-4'>GITHUB</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Node} alt="Node icon" />
                        <p className='my-4'>NODE.JS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Mongo} alt="Mongo icon" />
                        <p className='my-4'>MONGO DB</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={PostgreLogo} alt="Postgres icon" />
                        <p className='my-4'>POSTGRESQL</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ExpressLogo} alt="Express icon" />
                        <p className='my-4'>EXPRESS.JS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={SequelizeLogo} alt="Sequelize icon" />
                        <p className='my-4'>SEQUELIZE</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ComposeLogo} alt="Compose icon" />
                        <p className='my-4'>JETPACK COMPOSE</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={VscodeLogo} alt="VsCode icon" />
                        <p className='my-4'>VS CODE</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={AdsLogo} alt="ADS icon" />
                        <p className='my-4'>ANDROID STUDIO</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={FireBase} alt="Mongo icon" />
                        <p className='my-4'>FIREBASE</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                        <p className='my-4'>REACT</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;