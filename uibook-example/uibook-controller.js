import UibookStarter from 'uibook/starter'

import ButtonUibook from './button.uibook'
import Context from './Context'

export default UibookStarter({
  wrapper: (children, props) =>
    <Context.Provider value={ props }>
      { children }
    </Context.Provider>,
  values: {
    locale: ['en', 'de'],
    theme: ['light', 'dark']
  },
  pages: {
    Button: ButtonUibook,
  }
})
