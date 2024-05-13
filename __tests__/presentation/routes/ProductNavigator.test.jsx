import { expect, jest, it, describe } from '@jest/globals';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('ProductNavitation', () => {

    it('should render HomeScreen as default screen', () => {
        const wrapper = shallow(<ProductsNavigator />);
        expect(wrapper.find(HomeScreen)).toHaveLength(1);
      });

      it('should handle case where HomeScreen is not found', () => {
        const wrapper = shallow(<ProductsNavigator />);
        expect(wrapper.find(HomeScreen)).toHaveLength(0);
      });

      it('should render the correct number of screens', () => {
        const wrapper = shallow(<ProductsNavigator />);
        expect(wrapper.find(Screen)).toHaveLength(3);
      });

      it('should pass the correct props to each screen', () => {
        const wrapper = shallow(<ProductsNavigator />);
        const screens = wrapper.find(Screen);
        screens.forEach(screen => {
          expect(screen.props()).toHaveProperty('navigation');
          expect(screen.props()).toHaveProperty('route');
        });
      });

})