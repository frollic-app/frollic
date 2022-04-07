import React from 'React';
import { fireEvent, render, screen } from '@testing-library/react';
// added screen above
import '@testing-library/jest-dom';

import ResultCard from '../client/components/ResultCard';

// describe('Testing React components', () => {

    describe('ResultCard', () => {
        const props = {
            distance: "0.43",
            name: "Yellow House Cafe",
            url: "www.yelp.com",
            price: "$$$",
            rating: "4.3",
            address: "201 N Western Ave, Los Angeles, CA 90004",
            phone: "(323) 471-2116"
        };

        beforeAll(() => {
            render(<ResultCard {...props} />);
        });

        it('renders information from API from props object ', () => {
            expect(screen.getByTestId('distance-element')).toHaveTextContent('0.43');
            // expect(screen.getByTestId('name-element')).toHaveTextContent('Yellow House Cafe');
            // expect(screen.getByTestId('url-element')).toHaveTextContent('www.yelp.com');
            expect(screen.getByTestId('price-element')).toHaveTextContent('$$$');
            expect(screen.getByTestId('rating-element')).toHaveTextContent('4.3');
            expect(screen.getByTestId('address-element')).toHaveTextContent('201 N Western Ave, Los Angeles, CA 90004');
            expect(screen.getByTestId('phone-element')).toHaveTextContent('(323) 471-2116');
        });

        it('renders a button with copy link functionality ', () => {
            const buttonCopy = screen.getByTestId("buttonCopy");
            fireEvent.click(buttonCopy);

            
        });
       

    });
