type ResizeObserverBoxOptions2 =
  "border-box" | 
  "content-box" |
  "device-pixel-content-box";

interface ResizeObserverOptions2 {
  box?: ResizeObserverBoxOptions2;
}

interface ResizeObservation2 {
  readonly lastReportedSizes: ReadonlyArray<ResizeObserverSize2>;
  readonly observedBox: ResizeObserverBoxOptions2;
  readonly target: Element;
}

declare var ResizeObservation2: {
  prototype: ResizeObservation2;
  new(target: Element): ResizeObservation2;
};

interface ResizeObserver2 {
  disconnect(): void;
  observe(target: Element, options?: ResizeObserverOptions2): void;
  unobserve(target: Element): void;
}

export declare var ResizeObserver2: {
  prototype: ResizeObserver2;
  new(callback: ResizeObserverCallback2): ResizeObserver2;
};

interface ResizeObserverEntry2 {
  readonly borderBoxSize: ReadonlyArray<ResizeObserverSize2>;
  readonly contentBoxSize: ReadonlyArray<ResizeObserverSize2>;
  readonly contentRect: DOMRectReadOnly;
  readonly devicePixelContentBoxSize: ReadonlyArray<ResizeObserverSize2>;
  readonly target: Element;
}

declare var ResizeObserverEntry2: {
  prototype: ResizeObserverEntry2;
  new(): ResizeObserverEntry2;
};

interface ResizeObserverSize2 {
  readonly blockSize: number;
  readonly inlineSize: number;
}

declare var ResizeObserverSize2: {
  prototype: ResizeObserverSize2;
  new(): ResizeObserverSize2;
};

interface ResizeObserverCallback2 {
  (entries: ResizeObserverEntry2[], observer: ResizeObserver2): void;
}

declare global {
    var ResizeObserver2: {
        prototype: ResizeObserver2
        new(callback: ResizeObserverCallback2): ResizeObserver2
    } | undefined

    interface Window {
        _ga: {
            event(msg: string, payload: object): void
        }
    }
}