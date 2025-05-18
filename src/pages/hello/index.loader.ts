// pages/hello/index.loader.ts
import { helloService } from '../../service/hello.service'

export async function loader() {
  return helloService()
}