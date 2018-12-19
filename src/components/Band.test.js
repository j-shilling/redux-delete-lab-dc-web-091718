import React from 'react';
import { shallow } from 'enzyme';

import Band from './Band';

let mockProps = {
    id: 1,
    name: 'Pat the Bunny',
    deleteBand: jest.fn()
};

describe ('Band', () => {
    let wrapper = shallow(<Band {...mockProps}/>);
    
    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('handles click', () => {
        wrapper.find('button').simulate('click');
        expect(mockProps.deleteBand).toBeCalledWith(mockProps.id);
    });

});
