# `disco3/omit`

> tiny omit

### Usage

```typescript
import { omit } from '@disco3/omit';

const source = {
  foo: 'foo',
  bar: 'bar',
};

const only_foo = omit(source, ['bar']);
```