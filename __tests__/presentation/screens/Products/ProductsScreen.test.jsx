import React from "react";
import { render } from "react-dom";
import { ProductFormScreen } from "./ProductFormScreen";

describe('Product Screen', () => {

    // Renders a TextInput component with a placeholder "Search..." and an initial empty value.
    it('should render a TextInput component with a placeholder "Search..." and an initial empty value', () => {
        const wrapper = shallow(<ProductsScreen />);
        const textInput = wrapper.find(TextInput);

        expect(textInput.prop('placeholder')).toBe('Search...');
        expect(textInput.prop('value')).toBe('');
    });

    // Renders a TextInput component with a long initial value.
    it('should render a TextInput component with a long initial value', () => {
        const longInitialValue = 'This is a long initial value';
        const wrapper = shallow(<ProductsScreen />);
        wrapper.setState({ search: longInitialValue });
        const textInput = wrapper.find(TextInput);

        expect(textInput.prop('value')).toBe(longInitialValue);
    });

})