import React, { Lazy } from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from '@storybook/react/demo'

storiesOf('Button', module).add('width text', () => (
  <Button>testing</Button>
))

