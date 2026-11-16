import React, {useId} from 'react';

const Input = React.forwardRef(function input ({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    const id = useId();

    return (
      <div className='w-full'>
        {label && <label className='font-semibold block mb-1' htmlFor={id}>
            {label}
            </label>}
        <input
        type={type}
        className={` px-3 py-2 rounded-lg bg-white focus:bg-gray-50 duration-200 border text-black outline-none w-full font-medium ${className}`} 
        ref = {ref}
        {...props} 
        id = {id}     
        />
      </div>
    )
})

export default Input