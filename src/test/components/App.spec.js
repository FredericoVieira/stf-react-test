import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from '../../components/App'

Enzyme.configure({ adapter: new Adapter() })

describe('<App />', () => {
  it('renders app element', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('p').length).toBe(1)
  })
})
