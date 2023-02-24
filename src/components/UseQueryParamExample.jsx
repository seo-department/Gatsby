import React from "react";
import { useQueryParam, NumberParam, StringParam } from "use-query-params";

const UseQueryParamExample = () => {
  // something like: ?x=123&foo=bar in the URL
  const [num, setNum] = useQueryParam("name", NumberParam);
  const [foo, setFoo] = useQueryParam("pass", StringParam);

  return (
    <div>
      <h1>num is {num}</h1>
      <button onClick={() => setNum(`str${Math.random()}`)}>Change</button>
      <h1>foo is {foo}</h1>
      <button onClick={() => setFoo(`str${Math.random()}`)}>Change</button>
    </div>
  );
};

export default UseQueryParamExample;