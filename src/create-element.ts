// Conditional Types
type AllElements = HTMLElementTagNameMap

type CreatedElement<Elem extends string> =
    Elem extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[Elem] : 
    Elem extends keyof MyWebComponentMap ? MyWebComponentMap[Elem] : HTMLElement;

declare class MyWebComponent extends HTMLElement {}

interface MyWebComponentMap {
    "my-webcomponent": MyWebComponent
}

type CreatedElementVideo = CreatedElement<"video">
type CreatedElementWebComponent = CreatedElement<"my-webcomponent">


declare function createElement<
    Elem extends string
>(elemName: Elem): CreatedElement<Elem>
    
createElement("video").src
createElement("a").href
createElement("my-webcomponent")

export {}