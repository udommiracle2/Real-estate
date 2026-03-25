import React, { useState } from 'react'

const Feedback = () => {

    const [stars, setStar] = useState(0);

    return (
        <div className='section border-t-2' id='feedback'>
            <div>
                <h2>Feedback</h2>
            </div>

            <div>
                <p className='font-semibold'>Rate Our Services</p>
                <div>
                    {[1, 2, 3, 4, 5].map((star) =>(
                        <span key={star} onClick={() => setStar(star)} className={star <= stars ? "text-yellow-400 text-[40px] cursor-pointer" : "text-(--fontColor) text-[40px] cursor-pointer"}>
                        ★
                    </span>
                    ))}
                </div>

                <form action="" method="post" className=''>

                    <textarea placeholder="Message" className="border p-2 rounded w-[70%] lg:w-[50%] h-[144px]"></textarea><br />

                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Feedback