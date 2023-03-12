<h1 align="center">Mastering React 18 ⚛</h1>

This is for my notes from all my journey with React 18, and throught time, all this information would change to just explain what my project is.

React is a **JavaScript library** for creating _dynamic apps_ with _beatifull UI_.

## Application Structure (folders) 📁

- **node_modules**: all third-party libraries are installed.
- **public**: public assets from our app exists, like images, videofiles, etc.
- **src**: source code for app; components.

## Type of casing code ✍

There are couple types of casing code, but in React with componentes it's a good practice to use **Pascal Casing**.

```JavaScript
function Message() {
    console.log('This funciton use Pascal Casing!');
}
```

All the components in **React** has to have a close tag.

```JavaScript
<Message></Message>
```

# How React Works 📂

- Virtual DOM:
  - div --- h1
  - App --- Message

The **StrictMode** _render_ component identify if there are potencial problems.

# React Ecosystem 🧪

There are differences between a Library and a Framework.

- **Library**: a tool that provides specific funcionality.
  - a _library_ is like a tool.
- **Framework**: a set of tools and guidelines for building apps.
  - a _framework_ is like a toolset.

The main purpose from **React** is to create amazing _UI_. For also for couple more:

- **Routing**: allow user to go from one page to another.
- **HTTP**.
- **Managing app state**.
- **Internationalization**.
- **Form validation**.
- **Animations**.

By convention, all the **components** should stay in a folder called _"components"_.

# Fragments 📚

A component _can't return more than one element_. There's a solution like **wrapping** all the elements inside a `<div>`, but there is even a better option, using the **Fragment** bracket option from _React itself_, and can be shorted with list _empty brackets_.

```Typescript
function ListGroup() {
  return (
    <>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </>
  );
}
```

All _children inside_ the _empty brackets_ are interpreted like using **Fragment** but without typing it.

# Rendering a List 📃

In React, when rendering a list of items using **.map()**, we have to assign them a _unique key_ to each one.

```Typescript
function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li> // This is the right way to do it
        ))}
      </ul>
    </>
  );
}
```

# Conditional Rendering 🕹

Functions are powerful with _parameters_, so if we create one to display a Message for example, we can display different Message depending on what we need.

If we don't need to show differents messages, is better to use it as a _constant_ instead of a **function**.

```Typescript
return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>} // Like this
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
```

# Handling Events ☝🏻

Event handling sometimes can be complex, that's why should be inside a **function**.

```Typescript
import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // better way to handle "Handling Events"
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          // using the Handling Event in "onClick" event
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
```

### Type Annotation

We can specify the the type of variables, parameters and so on.

```Typescript
const handleClick = (event: MouseEvent) => console.log(event); // event: MouseEvent
```

In this case we use **MouseEvent** but there's more, and _always_ have to import it to our application so we can use it properly.

```Typescript
import { MouseEvent } from "react";
```

# Managing States 🎮

To dynamically interact with items for example, we have to use a **Hook**, this means we need to use _useState_ function.

> this allows up to _tap in build-in features_ in React.

This tell React that _a component can have data or state_ that **will change over time**.

> each component is going to have its own state.

# Passing data via props 📚

Props are the inputs to our components

If we use a feature called **Interface**, we define the shape or interface of an object, name it what we need.

```Typescript
interface Props {
  items: string[];
  heading: string;
}
```

# Passing Functions via props 📚

If we need dynamically want to:

- show something to the user.
- filter list of objects.
- redirect to a new page when an item is selected.

Inside the component implementation from before, we have to add the function we gonna use later:

```Typescript
interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void;
}
```

We have to implement it in the _parent of the component_.

```Typescript
const handleSelectItem = (item: string) => {
    console.log(item);
  };
```

# State vs Props 🧠

- **State**: data managed by a component that can change over time, we have to treat them as **Mutable**. Mutable means that is not **read-only**.
  - similar to local _variables inside a function_.
- **Props**: input passed to a component, we have to treat them as **Inmmutable**. Inmutable means that is **read-only**.
  - similar to function args.

# Passing Children 🚸

This is like passing an item into a `<div>`. To implement this well enough, we need to use the **ReactNode** _class_ to use different types of data.

```Typescript
interface Props {
  children: ReactNode;
}
```

.
