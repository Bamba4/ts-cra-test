import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import Stories from './Story'

const Wrapper = styled.div`
  /* Concur font */
  font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, sans-serif;
  margin: auto;
  width: 800px;
  position: relative;
`

storiesOf('Concur Extension.Components.Requirements Restrictions V2.ProviderItem', module)
  .addDecorator((story) => <Wrapper>{story()}</Wrapper>)
  .add('default', () => <Stories />)
