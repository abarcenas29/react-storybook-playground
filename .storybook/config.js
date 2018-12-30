import { configure } from '@storybook/react'

function loadStories() {
  require ('../Components/index.js')
}

configure(loadStories, module)
