import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SORT_KEYS from '../date/sortKeys';

const Dropdown = ({ setSortKey, sortKey }) => {
  const navigate = useNavigate();
  const [key, setKey] = useState(sortKey);
  console.log('key', key);

  useEffect(() => {
    const nav = `?sort=${key}`;
    navigate(nav);
    setSortKey(key);
  }, [key]);

  return (
    <select
      className="dropdown"
      value={key}
      onChange={(event) => {
        console.log('value', event.target.value);
        setKey(event.target.value);
      }}
    >
      <option key="default" value="defaultValue">
        Default
      </option>
      {SORT_KEYS.map((el, index) => (
        <option key={index} value={el}>
          {el}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
