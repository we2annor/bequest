import React, { ChangeEvent, useState } from 'react';

interface ISearchAddressProps {
    getSearchTerm: (term:string) => void;
}

const SearchAddress:React.FC<ISearchAddressProps> = ({getSearchTerm}) =>{
    const [term, setTerm] = useState<string>('')

    const handleOnChange =(e:ChangeEvent<HTMLInputElement>)=>{
        setTerm(e.target.value)
        getSearchTerm(term)
    }

    return (
        <div className="addresses__search-box">
            <input 
            className="input input__field" 
            type="text" 
            placeholder="Search contact" 
            onChange={(e)=>handleOnChange(e)} 
            />
        </div>
    )
}

export default SearchAddress;