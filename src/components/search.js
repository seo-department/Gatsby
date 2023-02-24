import React from 'react';
import { useSearchParams } from 'react-router-dom';


const Search = () => {

  const [searchParams1, setSearchParams2] = useSearchParams();
  const [searchParams2] = useSearchParams();

  const searchKeywordEmail = searchParams1.get('email');
  const searchKeywordPass = searchParams2.get('pass');

//   const [passvalue, passsetValue] = React.useState('');
//   const searchKeywordEmail = searchParams.get('email');
//   const searchKeywordPass = searchParams.get('pass');

  return (
    <div >
      <p>email: {searchKeywordEmail} : password {searchKeywordPass}</p>
    </div>
  );
};

export default Search;
