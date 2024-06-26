import { Environment } from 'vitest'

export default <Environment>(<unknown>{
  name: 'prisma',
  async setup() {
    console.log('Setup')

    return {
      async teardown() {
        console.log('Teardown')
      },
    }
  },
  transformMode: 'ssr',
})
