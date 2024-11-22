import * as fs from "fs";
import * as path from "path";

describe('Context API conversion', () => {
  test('creates a custom context provider within the `SalesContext.js` file', () => {
    const componentPath = path.join(__dirname, "..", "src", "contexts", "SalesContext.js");
    const fnString = fs.readFileSync(componentPath, "utf-8");

    expect(fnString).toMatch(/createContext\(/i);
    expect(fnString).toMatch(/SalesContextProvider/i);
    expect(fnString).toMatch(/SalesContext.Provider/i);
  });
  
  test('uses the `useState()` hook within the `SalesContext.js` file', () => {
    const componentPath = path.join(__dirname, "..", "src", "contexts", "SalesContext.js");
    const fnString = fs.readFileSync(componentPath, "utf-8");

    expect(fnString).toMatch(/useState\(/i);
  });

  test('includes the custom `SalesContextProvider` within the `App` component', () => {
    const componentPath = path.join(__dirname, "..", "src", "App.js");
    const fnString = fs.readFileSync(componentPath, "utf-8");

    expect(fnString).toMatch(/SalesContextProvider/i);
  });
  
  test('uses the `SalesContext` within the `CurrentStats` component', () => {
    const componentPath = path.join(__dirname, "..", "src", "components", "CurrentStats.js");
    const fnString = fs.readFileSync(componentPath, "utf-8");

    expect(fnString).toMatch(/useContext\(/i);
    expect(fnString).toMatch(/SalesContext/i);
  });
  
  test('uses the `SalesContext` within the `Sales` component', () => {
    const componentPath = path.join(
      __dirname, "..", "src", "components", 
      "Dashboard", "Sales", "Sales.js"
    );
    const fnString = fs.readFileSync(componentPath, "utf-8");

    expect(fnString).toMatch(/useContext\(/i);
    expect(fnString).toMatch(/SalesContext/i);
  });
});
