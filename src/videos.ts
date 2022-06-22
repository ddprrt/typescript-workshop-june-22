type VideoFormatURLs = {
    format360p: URL,
    format480p: URL,
    format720p: URL,
    format1080p: URL,
    format4k: URL,
    format120p: URL
}

type SubtitleURLs = {
    en: URL,
    de: URL,
    fr: URL,
    pt: URL
}

function isFormatAvailable(obj: VideoFormatURLs, key: string): key is keyof VideoFormatURLs {
    return key in obj
}

function isSubtitleAvailable(obj: SubtitleURLs, key: string): key is keyof SubtitleURLs {
    return key in obj
}


// Generic Constraints
function isAvailable<T extends object>(obj: T, key: PropertyKey): key is keyof T {
    return key in obj
}

type URLList = {
    [x: string]: URL
}

type Loaded<T> = {
    loaded: T
}

function loadFile<T extends URLList, K extends keyof T>(formatList: T, format: K): Loaded<K> {
    return {
        loaded: format
    }
}

declare const videos: VideoFormatURLs;

const loaded = loadFile(videos, "format4k")
loaded.loaded

// Generic Binding
function identity<T>(t: T): T {
    return t
}

const identity_of_ = identity("hello")

export {}