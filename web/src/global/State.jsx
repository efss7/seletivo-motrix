import React, { useState } from "react";

export const Motrix = React.createContext();

export function GlobalState(props) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState([]);
  const params = {
    posts,
    setPosts,
    loading,
    setLoading,
  };
  return <Motrix.Provider value={params}>{props.children}</Motrix.Provider>;
}
