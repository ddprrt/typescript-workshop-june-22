type ToyBase = {
    name: string,
    description: string,
    stock: number
}

type Puzzle = ToyBase & {
    pieces: number,
    age: number,
    kind: "puzzle"
}

type Methods = "GET" | "POST" | "PUT"

type LayoutProps = {
    mode: "vertical" | "horizontal"
}



type Doll = ToyBase & {
    material: "plush" | "plastic",
    kind: "doll"
}

interface BoardGame extends ToyBase {
    players: number,
    kind: "boardgame"
}

interface Videogame extends ToyBase {
    system: "NES" | "SNES" | "PlayStation" | "Mega Drive"
    kind: "videogame"
}

type Bricks = ToyBase & {
    kind: "bricks",
    vendor: "Lego" | "Cada" | "MegaBlocks",
    pieces?: number
}

type RequiredBrick = {
    [K in keyof Bricks]-?: Bricks[K]
}
// Type Access Modifiers

type Toys = Puzzle | Doll | BoardGame | Videogame 

function assertNever(input: never) {
    throw Error("What, this can't be happening")
}

function printToy(toy: Toys) {
    switch(toy.kind) {
        case "boardgame":
            console.log(toy.players)
            break;
        case "puzzle":
            console.log(toy.pieces)
            break;
        case "doll":
            console.log(toy.material)
            break; 
        case "videogame":
            console.log(toy.system)
            break;
        default:
            assertNever(toy)
    }
}

type ToyKind = Toys["kind"]

type GroupedToys = {
    [K in ToyKind]: Toys[]
}

type MyObjProps = "name"

type Person = {
    name: string,
    age: number
}

type NotAGoodPerson = {

    // Mapped Types           Index Access Type
    [K in MyObjProps]:  Person[K] 
}

function groupBy(toys: Toys[]) {
    const groups: GroupedToys = {
        boardgame: [],
        videogame: [],
        doll: [],
        puzzle: [],
    }

    for(let toy of toys) {
        groups[toy.kind].push(toy)
    }

    return groups;
}
