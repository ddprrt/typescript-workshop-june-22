type Square = {
    x: number,
    kind: "square"
}

type Circle = {
    radius: number,
    kind: "circle"
}

type Triangle = {
    x: number,
    y: number,
    kind: "triangle"
}

type Rectangle = {
    x: number,
    y: number,
    kind: "rectangle"
}

type Shape = Square | Circle | Triangle | Rectangle;


function area(shape: Shape) {
    if(shape.kind === "circle") {
        return Math.PI * shape.radius * shape.radius
    } else if (shape.kind === "triangle") {
        return (shape.x * shape.y) / 2;
    } else if (shape.kind === "square") {
        return shape.x * shape.x
    } else {
        return shape.x * shape.y
    }
}

