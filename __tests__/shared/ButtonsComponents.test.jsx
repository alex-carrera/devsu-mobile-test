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

  it('should render a pressable component with a label', () => {
    const onPress = jest.fn();
    const label = "Click me";
    render(<SecondaryButton onPress={onPress} label={label} />);

    const pressableComponent = screen.getByRole('button');
    const labelText = screen.getByText(label);

    expect(pressableComponent).toBeInTheDocument();
    expect(labelText).toBeInTheDocument();
  });

  it('should render a disabled state when disabled prop is true', () => {
    const onPress = jest.fn();
    const label = "Click me";
    render(<PrimaryButton onPress={onPress} label={label} disabled={true} />);

    const pressableComponent = screen.getByRole('button');
    const labelText = screen.getByText(label);

    expect(pressableComponent).toBeInTheDocument();
    expect(labelText).toBeInTheDocument();
    expect(pressableComponent).toBeDisabled();
  });

  it('should not render the label text when label prop is an empty string', () => {
    const onPress = jest.fn();
    const label = "";
    render(<PrimaryButton onPress={onPress} label={label} />);

    const pressableComponent = screen.getByRole('button');

    expect(pressableComponent).toBeInTheDocument();
    expect(screen.queryByText(label)).toBeNull();
  });

});




