/* @flow */

import SubA from "./SubA";
import BaseB from "./BaseB";

export default class SubB extends BaseB<SubA> {
    constructor() {
        super(SubA);
    }

    hello() {
        console.log("hello");
    }
}
