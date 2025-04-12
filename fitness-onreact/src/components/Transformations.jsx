import React from 'react'
import { TransformationsData } from './TransformationsData'
import TransformationsItem from './TransformationsItem'
export default function Transformations() {
    return (
        <div>
            <div className="row">
                {TransformationsData.map((transformation) => (
                    <TransformationsItem transformation={transformation} />
                ))}
            </div>

        </div>
    )
}




