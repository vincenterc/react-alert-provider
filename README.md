# react-alert-provider

A example that you can call `alert`, like `Alert.alert` in React Native, everywhere to display an alert dialog.

# Example

Use AlertProvider when you render the root component:
```js
import React from 'react'
import { render } from 'react-dom'

import AlertProvider from './components/alert-provider'
import App from './components/App'

render(
  <AlertProvider>
    <App />
  </AlertProvider>,
  document.getElementById('root')
)
```

Call `alert` everywhere you need an alert dialog.
```js
import { alert } from '../components/alert-provider'
```

```js
alert(
  'Cancel the process?',
  'You would need to start again if you cancel, continue?',
  [
    {
      text: 'No',
    },
    {
      text: 'Yes, Cancel',
      onClick: () => {
        window.alert('cancelled')
      },
    },
  ]
)
```
