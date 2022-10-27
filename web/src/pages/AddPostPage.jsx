import React from 'react';
import { FormCreate } from '../components/form/FormCreate';
import { HeaderGoBack } from '../components/headers/HeaderGoBack';

function AddPostPage() {
  return (
    <>
      <HeaderGoBack />
      <FormCreate />
    </>
  );
}

export default AddPostPage;
