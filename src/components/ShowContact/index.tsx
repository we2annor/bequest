import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchContact } from '../../actions';
import { Address } from '../../actions/types';

interface IProps {
    contact: Address;
    fetchContact: (id:number)=> void;
    match: {
        params: {
            id: number;
        }
    };
}

const ShowContact:React.FC<IProps> =({contact, fetchContact, match})=>{
    useEffect(()=>{
        const fetchSelectedAddress =()=>{
            const {id} = match.params;
            fetchContact(id);
        }
        fetchSelectedAddress();
    },[fetchContact, match.params]);

    if(!contact){
        return <div>No contact</div>;
    }
    
    return (
        <div className="contact">
            <h2>Contact Id: {contact.id}</h2>
            <div className="contact__list">
                <div className="list-item"><span>Full name :</span>{contact.firstName} {contact.lastName}</div>
                <div className="list-item"><span>Address :</span>
                    {contact.houseNo}, 
                    {contact.streetName}, 
                    {contact.locality}
                </div>
                <div className="list-item"><span>City :</span>{contact.postTown}</div>
                <div className="list-item"><span>Country:</span>{contact.country}</div>
                <div className="list-item"><span>Post code:</span>{contact.postCode}</div>
            </div>
        </div>
    )
}

const mapPropsToState =(state: any, ownProps: any)=>{
    return { contact : state.addressBook[ownProps.match.params.id]}
}

export default connect(mapPropsToState, {fetchContact})(ShowContact);

