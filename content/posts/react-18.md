---
title: "What\u2019s New in React 18"
date: '2022-06-29'
image: 'react-18.png'
excerpt: 'React 18 is a major release, that includes improvements to server-side rendering performance as well as improvements on the client-side. With the new concurrent rendering mechanism, you can prepare multiple versions of the UI at the same time. You can easily upgrade to React 18.'
isFeatured: true
---

# What’s New in React 18

React v18.0 was released earlier this year. With the focus being on performance improvements, the major addition is Concurrent React. Also, new features were introduced such as Automatic Batching and Transitions. You should definitely check the new concepts from the [official release notes](https://tr.reactjs.org/blog/2022/03/29/react-v18.html)

## How To Update

All you have to do to upgrade to React 18 is simply:

        npm install react@18 react-dom@18

And then, in your root entry file, typically index.js, update ReactDOM.render to ReactDOM.createRoot and render your app using root:

        const root = ReactDOM.createRoot(document.getElementById(‘root’));
        root.render(<App />);

Note that, new features in React 18 don’t work without createRoot.

![React 18](react-18.png)

## Concurrency

The most important new concept is Concurrent React, which is a behind-the-scenes mechanism to help with <strong>state update prioritization</strong>. When you first upgrade to React 18, without adding any concurrent features, updates are rendered synchronously, as before. So, once an update starts rendering, it is interruptable. This means, if there is a lot of data to be processed, the UI can get slow, especially on slower devices. However, in concurrent rendering, it is not the case.

## Transitions

Urgent state updates can be prioritized over others. With Concurrent React, previously known as Async React, you can achieve this by using startTransition() method in places where hooks can’t be used. In functional components, you can use useTransition(), which is a hook that lets you access concurrent mode features. This is a way to inform React which updates are urgent and which may be handled with lower priority.

### Example: useTransition

useTransition hook returns an array with two elements. A boolean value that indicates the transition is pending or not, and startTransition function which allows you to mark UI updates as transitions. You could also import this function if you couldn’t use the hook. But we don’t need that in functional components.

State updates can be wrapped with startTransition(), if they should have lower priority.

        import { useTransition } from 'react';

        function App() {
            const [isPending, startTransition] = useTransition();
            const [results, setResults] = useState([]);

            const someEventHandler = (event) => {
                startTransition(() => {
                setResults(event.target.value);
                });
            }

            return (
                <div>
                {isPending && <Spinner />}
                <MyComponent results={results} />
                </div>
            );
        }

## New Hooks

With another new hook, useDeferredValue(), an older value can be displayed until the new one is ready, instead of waiting. So, you can defer re-rendering the non-urgent part. It is similar to startTransition(), but it can be used in cases like when you are receiving a stateful value as props, where you don’t have the full control over the state update.

### Example: useDeferredValue

Whereas useTransition() wraps the code that updates the state, useDeferredValue() wraps a value which is affected by the state update. But their goal is the same.

        const deferredValue = useDeferredValue(value);

All in all, useTransition() and useDeferredValue() can be considered if the component can’t be optimized with pagination, lazy loading etc. or if there is a complex UI.

## Automatic Batching

Besides these new hooks and functions, there are also some changes for existing features, like State Batching. It’s about grouping multiple state updating calls together, so that they can be executed as one, to not to re-evaluate the component unnecessarily.

In React 17, this feature worked inside of synchronous React event handler functions. Updates inside of promises, setTimeout and native event handlers were not batched. For example, the state updates were not batched together where you had a function which is triggered because a timer expired.

Now, it works no matter where you make your state updates. To see the updated state batch and behavior, you can disable strict mode by removing <React.StrictMode> from index.js. Because during development, Strict Mode can log extra warnings and double-invoke functions that are expected to be idempotent.

### Example: Automatic Batching

        function App() {
            const [count, setCount] = useState(0);
            const [clicked, setClicked] = useState(false);

            const handleClick = () => {
                setCount(count => count + 1); // Does not re-render yet
                setClicked(clicked => !clicked); // Does not re-render yet
                // Only re-render once at the end
            }

            const handleTimeOutClick = () => {
                setTimeout(() => {
                setClicked(clicked => !clicked);
                setCount(count => count + 1);
                // Only re-render once at the and﻿
                });
            };
            return (
                <div>
                <button onClick={handleClick}>Next</button>
                <h1 style={{ color: clicked ? "gray" : "black" }}>{count}</h1>
                <button onClick={handleTimeoutClick}> Timeout Handler </button>
                </div>
            );
        }

You might want to [check this discussion.](https://github.com/reactwg/react-18/discussions/21)

## New Strict Mode Behaviors

Starting from React 18, React does not suppress any logs. Also, a new development-only check is introduced, which will immediately unmount and re-mount the component. So, the component will mount, unmount and re-mount again. On the second mount, the state will be restored from the first mount by React. This will simulate the user tabbing away from a screen and back for example. As a result, it will ensure that the code can handle the state restoration properly.

## Suspense On The Server

Another important change is about the Suspense component. This component can be used to help with UI updates related to data fetching. You can delay the component rendering and show a fallback component while waiting, until the code for a lazily loaded component is downloaded. Previously, Suspense could only be used on the client with React.lazy API. With React 18, you can also use Suspense if you use server side rendering. Which means, you can use this component in Next.js for example.

        function App() {
            return (
                <Suspense fallback={“Loading...”}>
                <ComponentThatFetchesData />
                </Suspense>
            );
        }

## Conclusion

React 18 is a major release, that includes improvements to server-side rendering performance as well as improvements on the client-side. With the <strong>new concurrent rendering mechanism</strong>, you can prepare multiple versions of the UI at the same time. startTransition(), useTransition(), useDeferredValue() and Full Suspense Support are the new concurrent features. For basic applications, you can easily upgrade to React 18.

## Resources

[The Official Release Blog Post](https://tr.reactjs.org/blog/2022/03/29/react-v18.html)

[React 18 — What’s New, What Changed & Upgrade Guide by Maximillian Schwarzmüller on Academind](https://www.youtube.com/watch?v=N0DhCV_-Qbg&ab_channel=Academind)

[React 18 New Features — Concurrent Rendering, Automatic Batching, and More by Shruti Kapoor on freeCodeCamp](https://www.freecodecamp.org/news/react-18-new-features/)

## Read This Article On Medium

[What's New in React 18 - Medium post by me](https://medium.com/@ilkyaz.arabaci/whats-new-in-react-18-b98c9c2b0f76)

Cheers,

ilkyaz
