import { expect, jest, it, describe } from '@jest/globals';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('Home Component', () => {

      // Renders a View component with style 'globaStyles.container'
      it('should render a View component with style globaStyles.container', () => {
        const wrapper = shallow(<HomeScreen />);
        expect(wrapper.find(View).prop('style')).toEqual(globaStyles.container);
      });

      it('should render correctly when data in ProductsScreen is empty', () => {
        const wrapper = shallow(<HomeScreen />);
        expect(wrapper.find(ProductsScreen).prop('data')).toEqual([]);
      });

})