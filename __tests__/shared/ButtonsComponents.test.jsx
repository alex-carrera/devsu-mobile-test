import { expect, jest, test, describe } from '@jest/globals';
import { render } from "@testing-library/react-native";

import { PrimaryButton } from "../../src/components/shared/ButtonsComponents";

let component;
describe('Prueba Componente de Botones', () => {

  test('should call the onPress function when pressed', () => {
    const onPress = jest.fn();
    const label = "Click me";
    const { getByText } = render(<PrimaryButton onPress={onPress} label={label} />);
    fireEvent.press(getByText(label));
    expect(onPress).toHaveBeenCalled();
  });


  test('should have the correct label text', () => {
    const onPress = jest.fn();
    const label = "Click me";
    const { getByText } = render(<PrimaryButton onPress={onPress} label={label} />);
    expect(getByText(label)).toBeDefined();
  });

  test('should not throw an error when onPress function is not provided', () => {
    const label = "Click me";
    expect(() => render(<PrimaryButton label={label} />)).not.toThrow();
  });
})


