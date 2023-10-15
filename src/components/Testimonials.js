import React, { useState } from "react";
import Card from "./Card";
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'


const Testimonials = (props) =>{
    let reviews = props.reviews;
    const[index,setindex]=useState(0);


    function leftshifthandler(){
        if(index-1<0){
            setindex(reviews.length-1);
        }
        else
        {
            setindex(index-1);
        }
    }

    function rightshifthandler(){
        if(index+1 >= reviews.length){
            setindex(0);
        }
        else{
            setindex(index+1);
        }
    }

    function suprisehandler(){
        let randomindex = Math.floor(Math.random()*reviews.length);

        setindex(randomindex);
    }
    return(
        <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center
        mt-10 p-10 transition-all duration-700 hover:shadow-2xl/" >
            <Card review={reviews[index]}></Card>

            <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold place-item-center mx-auto"> 
                <button 
                onClick={leftshifthandler}
                className="cursor-pointer hover:text-violet-500">
                    <FiChevronLeft/>
                </button>
                <button 
                onClick={rightshifthandler}
                className="cursor-pointer hover:text-violet-500">
                    <FiChevronRight/>
                </button>
            </div>

            <div>
                <button 
                onClick={suprisehandler}
                className="bg-violet-400 hover:bg-violet-600 transition-all duration-200 
                cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg ">
                    Suprise Me
                </button>
            </div>
        </div>
    )
}

export default Testimonials;