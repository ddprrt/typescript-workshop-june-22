type TPerson = {
    age: number,
    name: string
}

interface IPerson {
    age: number,
}

interface IPerson {
    name: string
}

function send(data: any, headers: Record<string, string>) {

}

send({ hello: "World" }, {
    Cookie: "shdfldsfsd",
    Accept: "text/html"
})

interface HttpHeaders {
    Accept: string,
    Cookie: string
}

declare const headers: HttpHeaders;

// send({ hello: "World" }, headers)

export {}