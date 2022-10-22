import React, { useState } from "react";
import { useInput } from "../hooks/useInput";

export const Motrix = React.createContext();

export function GlobalState(props) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState([]);
  const [search, handleSearch] = useInput('');
  const [form, setForm] = useInput('');
  const params = {
    posts,
    setPosts,
    loading,
    setLoading,
    search,
    handleSearch,
    form,
    setForm,
  };
  return <Motrix.Provider value={params}>{props.children}</Motrix.Provider>;
}
