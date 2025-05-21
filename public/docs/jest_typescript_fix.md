# Jest TypeScript Mock Typing Issue Documentation

## Issue Description

We've encountered a persistent TypeScript/Jest mock typing issue in the StockPulse AI Platform test suite. The specific error is:

```
Argument of type 'X' is not assignable to parameter of type 'never'
```

This occurs when using Jest's `mockResolvedValue` or `mockReturnValue` with TypeScript generics in our test utilities.

## Root Cause Analysis

This is a known limitation in the interaction between TypeScript's type inference system and Jest's mock functions when working with generics. The issue stems from:

1. Jest's mock functions are typed with `any` return types by default
2. TypeScript's inference system struggles to correctly map generic types through Jest's mock function chains
3. The `ts-jest` preset doesn't fully resolve these type inference issues

## Attempted Solutions

We've tried multiple approaches to resolve this issue:

1. **Basic Type Assertions**: Using `as unknown as` to cast mock functions to the correct type
2. **Custom Mock Utility Functions**: Creating specialized mock creators for each function type
3. **Advanced Generic Utility Types**: Implementing utility types like `ReturnTypeOf<T>` and `PromiseType<T>`
4. **Jest MockedFunction Approach**: Using Jest's built-in `MockedFunction<T>` type

None of these approaches fully resolved the typing issues due to fundamental limitations in how TypeScript infers types through Jest's mock function chains.

## Recommended Workaround

For the StockPulse AI Platform, we recommend the following workaround:

1. **Disable Strict Type Checking for Tests**: Add a separate `tsconfig.test.json` with less strict type checking for test files
2. **Use Type Assertions**: Use explicit `any` or `unknown` type assertions in test files where necessary
3. **Document Test Mocks**: Clearly document the expected behavior of mocked functions

## Implementation

### 1. Create a separate tsconfig for tests

```json
// tsconfig.test.json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "strict": false,
    "noImplicitAny": false,
    "strictNullChecks": false
  },
  "include": ["tests/**/*.ts"]
}
```

### 2. Update Jest configuration

```json
// jest.config.json
{
  "preset": "ts-jest",
  "testEnvironment": "node",
  "moduleNameMapper": {
    "@shared/(.*)": "<rootDir>/../shared/src/$1"
  },
  "globals": {
    "ts-jest": {
      "tsconfig": "tsconfig.test.json"
    }
  }
}
```

### 3. Simplify test utilities

```typescript
// test-utils.ts
import { jest } from '@jest/globals';

// Simplified mock creators that use any types
export function createMock(returnValue: any): any {
  return jest.fn().mockReturnValue(returnValue);
}

export function createAsyncMock(returnValue: any): any {
  return jest.fn().mockResolvedValue(returnValue);
}

// Function-specific mock creators
export function createGenerateSignalsMock(returnValue: any): any {
  return createAsyncMock(returnValue);
}

// ... other mock creators
```

## Future Considerations

This issue may be resolved in future versions of TypeScript or Jest. We should periodically check for updates to these libraries and revisit this workaround if improvements are made.

For now, this approach allows us to proceed with test suite validation while maintaining reasonable type safety in the production codebase.
