# Declarative Data: Why I Switched from useEffect to TanStack Query

_February 9, 2026_

---

> **Summary:** Moving beyond manual state management to build a more resilient and performant user experience by shifting from imperative fetching to declarative synchronization.

---

# Declarative Data: Why I Switched from useEffect to TanStack Query

As a developer with a background in **cinematography**, I’ve always viewed the user interface as a digital canvas. In film, timing and flow are everything. In web development, that same flow is often broken by poorly managed data fetching and endless "Loading..." spinners.

For a long time, my go-to pattern was the standard `useEffect` + `useState` combo. It worked fine in small projects. But as my projects grew—like my GRE preparation app (**GREP**)—the limitations became obvious.

## The Problem with the "Imperative" Way

When we use `useEffect`, we are telling React _how_ to fetch data step-by-step.

1. Create a loading state.
2. Create an error state.
3. Fire the fetch on mount.
4. Catch errors.
5. Toggle loading to false.

This is not “wrong”—it’s just too manual.

As the app grows, this pattern creates a lot of repeated code, and every screen ends up reinventing the same fetching logic. It also doesn’t handle **caching** or **stale data** gracefully.

That’s when you start seeing issues like:

- repeated API calls for the same data
- UI flickering when loading resets
- messy state spread across multiple components
- extra work for things like refetching and retrying

## Enter TanStack Query

TanStack Query changed my mental model from _fetching_ to _synchronizing_. Instead of manually managing loading, error, and data states, I describe the data I want and let the library handle the hard parts.

Instead of managing variables, I manage **Keys**.

A query key is basically the identity of the data:

- `["users"]` → list of users
- `["users", username]` → one specific user
- `["profile", userId]` → a user’s profile

This makes your data more organized, reusable, and predictable.

### The Anatomy of a Query

Here is how I implemented the search functionality in my latest project:

```javascript
const { data, isLoading } = useQuery({
  queryKey: ["users", username],
  queryFn: () => fetchUser(username),
  enabled: !!username, // Only runs when username exists
  staleTime: 1000 * 60 * 5, // 5 minutes of "fresh" data
});
```
