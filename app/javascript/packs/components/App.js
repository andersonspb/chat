import React from 'react'
import MessageListContainer from '../containers/MessageListContainer'
import HeaderContainer from '../containers/HeaderContainer'

const App = () => (
  <div>
    <div class="row">
      <div class="col-sm-12">
        <HeaderContainer />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <MessageListContainer />
      </div>
    </div>
  </div>
)

export default App
