# NProgress

By default, Next.js does not provide any loading indicator for client-side route transitions.

They recommend the use of NProgress, a small script that displays a loading bar at the top of the
browser frame.

It can be added to your app as such, within \_app.js

```typescript
import '@disco3/platform-util/nprogress/style.css';
import NProgress from '@disco3/platform-util/nprogress';
import Router from 'next/router';
```

```typescript
NProgress({ Router });
```

If you want to add some custom action to the route change's start, finish, or error states, you can
pass in functions that will run accordingly:

```typescript
import '@disco3/platform-util/nprogress/style.css';
import NProgress from '@disco3/platform-util/nprogress';
import Router from 'next/router';
```

```typescript
NProgress({
  Router,
  start: () => console.log('route change started'),
  finish: () => console.log('route change complete'),
  error: () => console.log('route change error'),
});
```

> It's worth noting that the finish handler will always automatically fire an analytics page event
> as long as the window.analytics object is present.
