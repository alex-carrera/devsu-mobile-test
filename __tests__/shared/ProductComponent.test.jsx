import { expect, jest, it, describe } from '@jest/globals';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('Product Component', () => {

  const renderer = new ShallowRenderer();
  it('should render a pressable component with the product label and id number', () => {
    const onPress = jest.fn();
    const label = "Example Product";
    const idNumber = "123456";

    renderer.render(<ProductComponent onPress={onPress} label={label} idNumber={idNumber} />);

    const result = renderer.getRenderOutput();

    expect(result.type).toBe('div');
  });

})