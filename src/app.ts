import express from "express"; // when "noResolve" === true, no error here...
import * as HTTP from "http-status-codes"; // but there is an error here (possibly because this includes a .d.ts and Express doesn't?)

import SubB from "./SubB";
let t = new SubB();
t.hello();
