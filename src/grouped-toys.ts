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

type Toys = Puzzle | Doll | BoardGame | Videogame 

type GroupBy<Groupable extends { [_ in Key]: string }, Key extends string> = {
    [K in Groupable[Key]]: Extract<Groupable, { [P in Key]: K } >[]
}

type GroupedToys = GroupBy<Toys, "kind">

declare const groups: GroupedToys

export {}