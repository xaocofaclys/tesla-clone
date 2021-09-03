import React from 'react'
import Sections from "./Sections"

function Home() {
    return (
        <div>
            <Sections 
                title = "Model S"
                description = "Order Online for Touchless Delivery"
                backgroundImg = "model-s.jpg"
                leftBtnText = "Custom order"
                rightBtnText = "Existing Inventory"
            
            />
            <Sections 
                title = "Model X"
                description = "Order Online for Touchless Delivery"
                backgroundImg = "model-x.jpg"
                leftBtnText = "Custom order"
                rightBtnText = "Existing Inventory"
            
            />
            <Sections 
                title = "Model Y"
                description = "Order Online for Touchless Delivery"
                backgroundImg = "model-y.jpg"
                leftBtnText = "Custom order"
                rightBtnText = "Existing Inventory"
            
            />
            <Sections 
                title = "Model 3"
                description = "Order Online for Touchless Delivery"
                backgroundImg = "model-3.jpg"
                leftBtnText = "Custom order"
                rightBtnText = "Existing Inventory"
            
            />
        </div>
    )
}

export default Home
