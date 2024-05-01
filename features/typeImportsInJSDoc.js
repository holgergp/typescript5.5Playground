//import { SomeType } from "./typeImportsInJSDoc"; // ❌ runtime error!
import * as someModule from "./typeImportsInJSDoc";
/**
 * @param {SomeType} myValue
 */
//function doSomething1(myValue) {
    // ...
//}

/**
 * @param {someModule.SomeType} myValue
 */
function doSomething2(myValue) {
    // ...
}

/**
 * @param {import("./typeImportsInJSDoc").SomeType} myValue
 */
function doSomething3(myValue) {
    // ...
}
