import React from "react";

const Blogs = () => {
  return (
    <div className="mx-10 my-3 text-xl">
      <h1 className="text-info">
        How will you improve the performance of a React Application?
      </h1>
      <p>
        Ans:1.Use Immutable Data Structures: Data immutability is not an
        architecture or design pattern, it's an opinionated way of writing code.
        This forces you to think about how you structure your application data
        flow.
      </p>
      <p>2. Avoid Inline Function Definition in the Render Function.</p>
      <p>3. Avoid using Index as Key for map</p>
      <p>4. Spreading props on DOM elements</p>
      <h1 className="text-info mt-4">
        What are the different ways to manage a state in a React application?
      </h1>
      <p>
        Ans: Global state: Global state is data we manage across multiple
        components.Global state is necessary when we want to get and update data
        anywhere in our app, or in multiple components at least.
      </p>
      <p>
        Server state: Data that comes from an external server that must be
        integrated with our UI state. Server state is a simple concept, but can
        be hard to manage alongside all of our local and global UI state.
      </p>
      <p>
        URL state: Data that exists on our URLs, including the pathname and
        query parameters.
      </p>
      <h1 className="text-info mt-4">
        How does prototypical inheritance work?
      </h1>
      <p>
        The Prototypal Inheritance is a feature in javascript used to add
        methods and properties in objects. It is a method by which an object can
        inherit the properties and methods of another object.
      </p>
      <h1 className="text-info mt-4">
        You have an array of products. Each product has a name, price,
        description, etc. How will you implement a search to find products by
        name?
      </h1>
      <p>`product.filter(name)`</p>
      <h1 className="text-info mt-4">
        What is a unit test? Why should write unit tests?
      </h1>
      <p>
        unit test is a software testing where individual unit or components are
        tested for a software. Unit Testing is done during the development of an
        application by the developers. Unit testing allows software developers
        to actually think through the design of the software and what has to be
        done before they write the code. This can help them to stay focused and
        can also help them to create much better designs.
      </p>
    </div>
  );
};

export default Blogs;
