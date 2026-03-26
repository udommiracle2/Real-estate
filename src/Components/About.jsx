import aboutImg from '../Real-Estate-Images/wallpaper (1).jpg'

const About = () => {
    return (
        <div id='about' className='relative min-h-screen'>

            <img src={aboutImg} alt="" className='absolute inset-0 w-full h-full object-cover' />

            <div className='absolute inset-0 bg-black/50'></div>

            <div className='relative section grid lg:grid-cols-2 gap-10 items-center min-h-screen text-white'>

                <div>
                    <h2 className='text-4xl font-bold mb-4'>About Us</h2>

                    <p className='text-lg leading-relaxed max-w-lg'>
                        To redefine modern living through timeless architecture and thoughtful design.
                        RealEstatePro visualize spaces that inspires trust, comfort and lasting value.
                    </p>
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-3 gap-6'>

                    <div className='p-6 bg-black rounded-2xl text-center'>
                        <h4 className='text-xl font-bold'>640+</h4>
                        <p>Property Sold</p>
                    </div>

                    <div className='p-6 bg-black rounded-2xl text-center'>
                        <h4 className='text-xl font-bold text-green-500'>$430M+</h4>
                        <p>Total Transactions</p>
                    </div>

                    <div className='p-6 bg-black rounded-2xl text-center'>
                        <h4 className='text-xl font-bold'>99%</h4>
                        <p>Customer Satisfaction</p>
                    </div>

                    <div className='p-6 bg-black rounded-2xl text-center'>
                        <h4 className='text-xl font-bold'>25</h4>
                        <p>Years of Excellence</p>
                    </div>

                    <div className='p-6 bg-black rounded-2xl text-center'>
                        <h4 className='text-xl font-bold'>18</h4>
                        <p>Offices Around the World</p>
                    </div>

                    <div className='p-6 bg-black rounded-2xl text-center'>
                        <h4 className='text-xl font-bold'>340+</h4>
                        <p>Trustworthy Agents</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About