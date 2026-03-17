import React from 'react'

const About = () => {
    return (
        <div id='about' className='section bg-(--btnBackground) text-(--btnColor) md:flex justify-between items-center lg:flex justify-between items-center'>
            <div className='md:w-[50%] lg:w-[50%]'>
                <h2>
                    About Us
                </h2>

                <p>To redefine modern living through timeless architecture and thoughtful design.
                    RealEstatePro visualize spaces that inspires trust, comfort and lasting value.
                </p>
            </div>

            <div className='flex justify-center items-center gap-5 mt-8'>
                <div>
                    <h4>640+</h4>
                    <p>Property Sold</p>
                </div>
                <div>
                    <h4 className='text-green-600'>$430M+</h4>
                    <p>Total Transactions</p>
                </div>
                <div>
                    <h4>99%</h4>
                    <p>Customer Satisfaction</p>
                </div>
            </div>
        </div>
    )
}

export default About
