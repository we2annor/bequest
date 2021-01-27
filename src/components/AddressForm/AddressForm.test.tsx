import React from 'react';
import {render, cleanup} from '@testing-library/react';
import mockAxios from 'axios';
import AddressForm from './index';
import {InitialAddressValues} from '../../actions/types';

afterEach(cleanup);

describe('AddressForm', ()=>{
    test('renders with default props', ()=>{
        //arrange
        mockAxios.get
        render(<AddressForm selectedAddress={InitialAddressValues} postcode={'ha9 8rf'}/>)
    })
})