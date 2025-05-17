// controller/hello.controller.ts
export default {
  method: 'get',
  path: '/hello',
  handler: () => {
    return { message: 'Hello from Refraim controller!' }
  },
}