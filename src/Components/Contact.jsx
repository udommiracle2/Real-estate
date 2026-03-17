import React from 'react'

const Contact = () => {
    return (
        <div className='section bg-(--btnBackground) text-(--btnColor)' id='contact'>
            <h2 className='text-center'>
                Contact Us
            </h2>
                <p className='text-center'>RealEstatePro are readily available round the clock. Our services travels beyond national boundaries</p>
            <div className='mt-5'>
                <p><span className='font-semibold text-[22px]'>Email: </span>RealEstatePro@gmail.com</p>
                <p><span className='font-semibold text-[22px]'>Address: </span>26, Nowhere Avenue, DE, 110543. Nigeria</p>
                <p><span className='font-semibold text-[22px]'>Telephone: </span>+1 045 321 899</p>
            </div>

            <div className='mt-5'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16288.83138092414!2d18.049278956986218!3d59.31452161248777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f763119640bcb%3A0xa80d27d3679d7766!2sStockholm%2C%20Sweden!5e0!3m2!1sen!2sng!4v1773781168483!5m2!1sen!2sng"
                    width="600"
                    height="450"
                    style={{border:0}}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className='w-full rounded-lg'></iframe>
            </div>

            <div className="logo mt-5 text-center">
                <h3>RealEstatePro</h3>
            </div>
        </div>

        
    )
}

export default Contact
