import { parse } from "@vue/compiler-sfc"

export function parseComponent(code: string){
    return parse(code).descriptor
}

export { parse }