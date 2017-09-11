/* @flow */

import BaseA from "./BaseA";

export default class B<T: BaseA> {
    _AClass: Class<T>;

    constructor(AClass: Class<T>) {
        this._AClass = AClass;
    }
}
