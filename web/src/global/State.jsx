import React, { useState } from "react";
import useForm from "../hooks/useForm";
import { useInput } from "../hooks/useInput";

export const Motrix = React.createContext();

export function GlobalState(props) {
  const [posts, setPosts] = useState([]);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState([]);
  const [search, handleSearch] = useInput('');
  const { form, onChange, clear } = useForm({
    title: '',
    body: '',
  });
  const [modalSuccess, setModalSuccess] = useState(false);
  const [modalError, setModalError] = useState(false);
  const [modalServerError, setModalServerError] = useState(false);
  const [serverMessageError, setServerMessageError] = useState("");

  function handleModalSuccess() {
    setModalSuccess(!modalSuccess);
  }
  function handleModalError() {
    setModalError(!modalError);
  }
  function handleModalServerError() {
    setModalServerError(!modalServerError);
  }

  const params = {
    posts,
    setPosts,
    loading,
    setLoading,
    search,
    handleSearch,
    form,
    onChange,
    clear,
    modalSuccess,
    setModalSuccess,
    modalError,
    setModalError,
    modalServerError,
    setModalServerError,
    serverMessageError,
    setServerMessageError,
    handleModalSuccess,
    handleModalError,
    handleModalServerError,
    history,
    setHistory,
  };
  return <Motrix.Provider value={params}>{props.children}</Motrix.Provider>;
}
