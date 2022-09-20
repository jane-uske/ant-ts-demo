enum PromiseState {
  pending = "pending",
  resolve = "reslove",
  reject = "reject",
}
export class MyPromise {
  private static _state: PromiseState;
  private static _value: any;
  private static _resloveCallback: Function[];
  private static _rejectCallback: Function[];

  constructor(
    exector: (
      reslove: (value: any) => void,
      reject: (value: any) => void
    ) => any
  ) {
    MyPromise._state = PromiseState.pending;
    MyPromise._resloveCallback = [];
    MyPromise._rejectCallback = [];
    try {
      exector(MyPromise.reslove, MyPromise.reject);
    } catch (error) {
      MyPromise.reject(error);
    }
  }

  /** reslove */
  public static reslove = (value: any) => {
    setTimeout(() => {
      if (this._state === PromiseState.pending) {
        this._state = PromiseState.resolve;
        this._value = value;
        this._resloveCallback.forEach((callback) => {
          return callback(this._value);
        });
      }
      return 1
    });
  };

  /** reject */
  public static reject = (value: any) => {
    setTimeout(() => {
      if (MyPromise._state === PromiseState.pending) {
        MyPromise._state = PromiseState.reject;
        MyPromise._value = value;
        MyPromise._rejectCallback.forEach((callback) => {
          callback(MyPromise._value);
        });
      }
    });
  };

  /** then */
  public then = (
    onFUFILLED: (value: any) => any | undefined,
    onREJECT?: (value: any) => any | undefined
  ) => {
    onFUFILLED = typeof onFUFILLED === "function" ? onFUFILLED : () => {};
    onREJECT = typeof onREJECT === "function" ? onREJECT : () => {};

    if (MyPromise._state === PromiseState.pending) {
      MyPromise._resloveCallback.push(onFUFILLED);
      MyPromise._rejectCallback.push(onREJECT);
    }

    if (MyPromise._state === PromiseState.resolve) {
      setTimeout(() => {
        return onFUFILLED(MyPromise._value);
      });
    }
    if (MyPromise._state === PromiseState.reject) {
      setTimeout(() => {
        if (onREJECT) {
          return onREJECT(MyPromise._value);
        }
        return onFUFILLED(MyPromise._value);
      });
    }
  };

  /** catch */
  public catch = (onREJECT: (value: any) => any) => {
    onREJECT = typeof onREJECT === "function" ? onREJECT : () => {};
    if (MyPromise._state === PromiseState.pending) {
      MyPromise._rejectCallback.push(onREJECT);
    }
    if (MyPromise._state === PromiseState.resolve) {
      setTimeout(() => {
        onREJECT(MyPromise._value);
      });
    }
  };

  /** all*/
  private all = (myPromises: MyPromise[]) => {
    let results = [];
    let myPromisesCount = 0;
    let myPromiseLength = myPromises.length;
    return new MyPromise((reslove, reject) => {
      myPromises.forEach((myPromise, index) => {
        MyPromise.reslove(myPromise)
      });
    });
  };

  /** race*/
  private race = () => {};

  /** allSettled*/
  private allSettled = () => {};
}
