// 1. Bekannte Länge 
// 2. Der Typ jedes Elements im Tupel ist bekannt

type ATuple = [number, string]

function print_person(...args: ATuple) {

}

const arr = [1, 2, 3, 4, 5]
const stwenws = ["Hello", ...arr,"World"]

type StartsWithStringEndsWithString<T extends unknown[]> = [string, ...T, string]

type X1 = StartsWithStringEndsWithString<[]>
type X2 = StartsWithStringEndsWithString<[number, number]>

type CallbackFunction = (err: string | undefined, result: any) => void

type HasCallback<T extends unknown[]> = [...T, CallbackFunction]

type LoadFile = HasCallback<[string, "w" | "r" | "w+", string]>

function load_file(...args: LoadFile) {

}

function concat<
    T extends any[], 
    U extends any[]
>(array_1: [...T], array_2: [...U]): [...T, ...U] {
    return [...array_1, ...array_2]
}

const t1 = concat([1, 2, "3", 4, 5], [6, 7, 8])

function executeWorker(
    workerId: number, 
    payload: Record<string, string>, 
    workload: string, 
    multiThreaded: boolean) {
    return 2
}

type VariadicFn<
    Param extends any[], 
    ReturnValue
> = (...args: [...Param]) => ReturnValue

function curry<
    ParamList1 extends any[], 
    ParamList2 extends any[],
    ReturnValue
>(fn: (...args: [...ParamList1, ...ParamList2]) => ReturnValue, ...args_1: ParamList1) {
   return (...args_2: ParamList2) => fn(...args_1, ...args_2);
}

// fn --> executeWorker
// param_list = [1, {}, "console.log"]
// return: (param_list_2: [true | false]) => fn(...paramlist_1, ...paramlist_2)
function curry_2<
    ParamList1 extends any[],
    ParamList2 extends any[],
    ReturnValue
>(fn: (...args: [...ParamList1, ...ParamList2]) => void, ...param_list_1: ParamList1) {
    return (...param_list_2: ParamList2) => fn(...param_list_1, ...param_list_2) 
}

const num = curry_2(executeWorker, 1, {}, "", true)

const t = curry(executeWorker, 1, {}, "console.log")
t(true)
t(false)

const u = curry(executeWorker, 1, {})
u("console.log()", true)
u("alert()", false)

export {}