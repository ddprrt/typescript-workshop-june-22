type MyPartial<T> = {
    [K in keyof T]?: T[K]
}

type MyRequired<T> = {
    [K in keyof T]-?: T[K]
}

type MyRecord<T extends PropertyKey, U> = {
    [K in T]: U
}

type Obj = MyRecord<"a" | "b" | "c", unknown>

type MapOut<T> = {
    [K in keyof T]: T[K]
}

type User = MapOut<{
    id: number
} & { 
    name: string
}>

type User2 = MyRequired<MyPartial<User>>

type PickedId = MyPick<User, "name">

type MyPick<T, P extends keyof T> = {
    [K in P]: T[K]
}

function createIdObject(user: User): Pick<User, "id"> {
    return {
        id: user.id
    }
}

type Config = {
    src: string,
    dest: string,
    overwrite: boolean
}

const defaultConfig: Config = {
    src: "src",
    dest: "dest",
    overwrite: false
}

function copy(config: Partial<Config>) {

}

copy({ overwrite: true })

export {}