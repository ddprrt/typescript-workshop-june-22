type Circle = {
    kind: "circle", radius: number
}

type Triangle = {
    kind: "triangle", x: number, y: number
}

type Square = {
    kind: "square", x: number
}

type Shape = Square | Triangle | Circle

type Remove<T, U> = T extends U ? never : T;

type Z = [Square | Triangle | Circle] extends [Square] ? true : false

type Debug = Exclude<Shape, Square>

export {}