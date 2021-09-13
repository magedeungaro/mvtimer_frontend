import { mount } from '@vue/test-utils'
import NuxtLogo from '~/components/WhiteLogo.vue'

describe('NuxtLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(NuxtLogo)
    expect(wrapper.vm).toBeTruthy()
  })
})
