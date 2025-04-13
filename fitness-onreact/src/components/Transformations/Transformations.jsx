import React from 'react'
import { TransformationsData } from './TransformationsData'
import TransformationsItem from './TransformationsItem'
import '../../assets/css/homepage.css';
export default function Transformations() {
    return (
        <div>
            <div className="text-box-2 text-center">
                <h1 className="text-white" data-aos="fade-up" data-aos-duration="2000">
                    <b>ТРАНСФОРМАЦИИ <br />НА НАШИ </b>
                    <br />
                    <b id="text-box-text">КЛИЕНТИ</b>
                </h1>


            </div>
            <div className="row">
                {TransformationsData.map((transformation) => (
                    <TransformationsItem transformation={transformation} />
                ))}
            </div>

        </div>
    )
}




