// controller/hello.controller.ts
import { helloService } from '../service/hello.service'

export default {
  method: 'get',
  path: '/hello',
  handler: () => {
    return helloService()
  },
}