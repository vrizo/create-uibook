import UibookCase from 'uibook/case'
import Button from '../src/button.js'

const PROPS = {
  onClick: UibookCase.event('onClick')
}

const ButtonUibook = {
  component: Button,
  name: 'Button',
  cases: [
      locale => <UibookCase
        example='<Button onClick={ … }>Simple Button</Button>'
        props={{ ...PROPS }}
      >
        { locale === 'de' ? 'Einfacher Button' : 'Simple Button' }
      </UibookCase>,
      () => <UibookCase props={{ ...PROPS, isLarge: true }}>
        Large Button
      </UibookCase>,
      () => <UibookCase props={{ ...PROPS, isDisabled: true }}>
        Disabled Button
      </UibookCase>
  ]
}

export default ButtonUibook