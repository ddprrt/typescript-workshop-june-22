const app = {
    get
}

type HTTPMethods = 
    "GET" | "POST" | "PUT" | "DELETE" | "OPTIONS" |
    "HEAD" | "CONNECT" | "TRACE" | "PATCH";

//#region 
type StatusCode =
    | 100
    | 101
    | 102
    | 200
    | 201
    | 202
    | 203
    | 204
    | 205
    | 206
    | 207
    | 208
    | 226
    | 300
    | 301
    | 302
    | 303
    | 304
    | 305
    | 306
    | 307
    | 308
    | 400
    | 401
    | 402
    | 403
    | 404
    | 405
    | 406
    | 407
    | 408
    | 409
    | 410
    | 411
    | 412
    | 413
    | 414
    | 415
    | 416
    | 417
    | 418
    | 420
    | 422
    | 423
    | 424
    | 425
    | 426
    | 428
    | 429
    | 431
    | 444
    | 449
    | 450
    | 451
    | 499
    | 500
    | 501
    | 502
    | 503
    | 504
    | 505
    | 506
    | 507
    | 508
    | 509
    | 510
    | 511
    | 598
    | 599;
//#endregion

type ServerRequest<
    Method extends HTTPMethods = HTTPMethods,
    Params extends string = never
> = {
    method: Method,
    params: Record<Params, string>
}

type ServerResponse = {
    status: (code: StatusCode) => ServerResponse
    send: (body?: any) => void
}

type CallbackFn<
    Method extends HTTPMethods = HTTPMethods,
    Params extends string = never
> = (req: ServerRequest<Method, Params>, res: ServerResponse) => void

function get<Route extends string>(path: Route, cb: CallbackFn<"GET", RouteParams<Route>>) {
    // todo
}

type IsPromise<T> = T extends Promise<infer R> ? R : never;

type TestPromise = Promise<string>
type TestIsPromise = IsPromise<Promise<{}>>


type RouteParams<Route extends string> = 
    Route extends `${string}/:${infer Param}/${infer Rest}` ? Param | RouteParams<`/${Rest}`> :
             //      /user  /:  userid      /  :orderid
    Route extends `${string}/:${infer Param}` ? Param : never
             //      /user  /:  userid"

type Test = RouteParams<"/user/:userid/:orderid">

app.get("/user/:userid", (req, res) => {
    res.status(200).send("Hello " + req.params.userid)
})

app.get("/user/:userId/:orderId/status/:page", (req, res) => {
    req.params.orderId
})

const callbackfn: CallbackFn = (req, res) => {
    switch(req.method) {
        case "GET":
            res.send(1);
        case "POST":
            res.send(2);
        default:
            res.send(3);
    }
}

app.get("demo", callbackfn)

export {}