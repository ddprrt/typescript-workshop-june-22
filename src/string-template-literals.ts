function fillListItem(elem: string) {
    return `<li class="item">${elem}</li>`
}

type BrowserEvents = `on${string}`

function parseEvent(event: BrowserEvents) {

}

parseEvent("onMouseover")
parseEvent("onmouseout")
parseEvent("onchanged")


type UserInfo = {
    firstName: string,
    lastName: string,
    age: number
}

type ChangeEvent<T> = keyof T extends string ?  `${Capitalize<Lowercase<keyof T>>}Changed` : never;

function on<T>(obj: T, changeEvent: ChangeEvent<T>) {

}

declare const user: UserInfo

on(user, "AgeChanged")

export {}