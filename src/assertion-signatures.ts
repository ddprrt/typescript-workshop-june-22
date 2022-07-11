function assertIsNumber(val: any): asserts val is number {
    if(typeof val !== "number") {
        throw new Error("Not a number!")
    }
}

function multiply(x: any, y: any) {
    assertIsNumber(x);
    assertIsNumber(y);
    return x * y;
}

const x = {}


type InferValue<Key extends PropertyKey, Desc extends PropertyDescriptor> = 
    Desc extends { value: infer T } ? Record<Key, T> :
    Desc extends { get(): infer T } ? Record<Key, T> : never;

type DefineProperty<Key extends PropertyKey, Desc extends PropertyDescriptor> = 
    Desc extends { writeable: false, set(val: any): any } ? never :
    Desc extends { writeable: false } ? Readonly<InferValue<Key, Desc>> :
    Desc extends { writeable: true } ? InferValue<Key, Desc> :
    Readonly<InferValue<Key, Desc>>

function defineProperty<
    Obj extends object,
    Key extends PropertyKey,
    Desc extends PropertyDescriptor
>(obj: Obj, prop: Key, val: Desc): asserts obj is Obj & DefineProperty<Key, Desc> {
    Object.defineProperty(obj, prop, val);
}

defineProperty(x, "name", { value: "Stefan" })

x.name


export {}