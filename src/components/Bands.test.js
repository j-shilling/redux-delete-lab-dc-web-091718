import React from 'react';
import { shallow } from 'enzyme';
import Bands from './Bands';
import Band from './Band';

describe('Bands', () => {
    it('should render Band components', () => {
        let mockBands = [
            { id: 1, name: 'Pat the Bunny' },
            { id: 2, name: 'Ramshackle Glory' }
        ];

        let wrapper = shallow(<Bands bands={mockBands}/>);
        expect(wrapper.find(Band).length).toBe(mockBands.length);
    });
});
