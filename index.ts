/**
 * Variables de tipo primitivo
 */
let flag: boolean; //Declaración explícita
let yes = true; //Declaración implícita
let no = false; //Declaración implícita

flag = true;

console.log('Variables de tipo primitivo')
console.log(flag)
console.log(yes)
console.log(no)

/**
 * Variables de tipo numérico
 */

let x: number; //Declaración explicita
x = 10
let y = 0; //Declaración implicita
let z: number = 123.456; //Declaración explicita
//let big: bigint = 100n;

console.log('Variables de tipo numérico')
console.log(x)
console.log(y)
console.log(z)


/**
 * Variables de tipo cadena
 */
let firstName: string = "Sergio";
let sentence: string = `My name is ${firstName}.
    I am new to TypeScript.`;
console.log(sentence);

/**
 * Enumeraciones
 */

enum ContractStatus {
    Permanent = 1,
    Temp,
    Apprentice
}

let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log('Enumeraciones')
console.log(employeeStatus);

console.log(ContractStatus[employeeStatus]);

/**
 * Tipos any y unkonwn
 */

let randomValue: any = 10;
randomValue = 'Mateo';   // OK
randomValue = true;      // OK
console.log('Variables de tipo any')
console.log(randomValue)

let unknownValue: unknown = 10;
unknownValue = true;
unknownValue = 'Mateo';
console.log('Variables de tipo unknown')
console.log(unknownValue)

/**
 * Tipos de unión
 */
let multiType: number | boolean;
multiType = 20;         //* Valido
multiType = true;       //* Valido

function add(x: number | string, y: number | string) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(add('one', 'two'));  //* Returns "onetwo"
console.log(add(1, 2));          //* Returns 3

/**
 * Tipos de intersección
 */

interface Employee {
    employeeID: number;
    age: number;
  }
  interface Manager {
    stockPlan: boolean;
  }
  type ManagementEmployee = Employee & Manager;
  let newManager: ManagementEmployee = {
      employeeID: 12345,
      age: 34,
      stockPlan: true
  };

  console.log(newManager)

/**
 * Tipos de literales
 */

type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete";    //* Valid
myResult = "pass";          //* Valid
//myResult = "failure";       //* Invalid type failure is not assignable to type testResult

type dice = 1 | 2 | 3 | 4 | 5 | 6;
let diceRoll: dice;
diceRoll = 1;    //* Valid
diceRoll = 2;    //* Valid
//diceRoll = 7;    //* Invalid type is not assigable to type dice

/**
 * Matrices
 */

let list: number[] = [1, 2, 3];
console.log(list)

let listTwo: Array<number> = [1, 2, 3];
console.log(listTwo)

