type SubtitleList = {
    en: URL,
    de: URL,
    es: URL,
    fr: URL,
    pt: URL
}

type Animal = {
    description: string,
    age: number
}

type Split<T> = {
    [K in keyof T /* "en" | "de" | "es" | "fr" | "pt" */]: {
        [P in K] /* "en" */: T[P]
    }
}[keyof T] // "en" | "de" | "es" | "fr" | "pt"



type SubtitleTypes = SubtitleList[keyof SubtitleList]

//#region 
type SplitSubtitleList = Split<SubtitleList>

type SplitAnimal = Split<Animal>

//#endregion

function load(list: Split<SubtitleList>) {

}

load({
    de: new URL("..."),
})


export {}