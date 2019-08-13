import React from 'react'

import Alert from './alert'

const initailState = {
  display: false,
  title: '',
  message: '',
  cancel: {},
  confirm: {},
}

const store = {
  state: initailState,
  listener: null,
}

const setState = newState => {
  store.state = { ...store.state, ...newState }

  store.listener(store.state)
}

export const alert = (title, message, options) => {
  let confirm = {}
  let cancel = {}

  if (!options) {
    options = []
  }

  if (options.length === 1) {
    cancel = !options[0] ? {} : options[0]
  } else if (options.length >= 2) {
    cancel = !options[0] ? {} : options[0]
    confirm = !options[1] ? {} : options[1]
  }

  setState({ display: true, title, message, cancel, confirm })
}

class AlertProvider extends React.Component {
  componentDidMount() {
    store.listener = this.setState.bind(this)
  }

  render() {
    let { children } = this.props
    let { display, title, message, confirm, cancel } = store.state

    return(
      <>
        {children}

        {display && (
          <Alert
            title={title}
            message={message}
            confirmTitle={confirm.text}
            onConfirm={() => {
              confirm.onClick && confirm.onClick()
              setState({ display: false })
            }}
            cancelTitle={cancel.text}
            onCancel={() => {
              cancel.onClick && cancel.onClick()
              setState({ display: false })
            }}
          />
        )}
      </>
    )
  }
}

export default AlertProvider
