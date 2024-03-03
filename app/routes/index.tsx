import { createRoute } from 'honox/factory'
import Counter from '@islands/counter'
import { css } from '@styled-system/css'

export default createRoute((c) => {
  const name = c.req.query('name') ?? 'Hono'
  return c.render(
    <div class={css({ fontFamily: 'serif' })}>
      <h1>Hello, {name}!</h1>
      <Counter />
    </div>,
    { title: name }
  )
})
