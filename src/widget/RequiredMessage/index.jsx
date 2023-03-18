import React, { useEffect, useState } from 'react';
import './style.scss';

const RequiredMessage = ({ messageShow, column, columnText, value, customMessage, style, checkDateTo }) => {
  const [message, setMessage] = useState(null);
  useEffect(() => {
    setMessage('');
    if (column === 'qty') {
      // if column qty logic
      if (value < 1) setMessage('Qty cannot be 0');
    }

    if (column === 'OrderLines') {
      // if column order lines logic
      if (value < 1) setMessage('At least one line is required to continue');
      else setMessage('');
    }

    // if empty
    if (!value) {
      setMessage(`${columnText} must be entered`);
      if (column === 'product') {
        setMessage(customMessage);
      }
    }

    if (column === 'orderType') {
      if (customMessage) {
        setMessage(customMessage);
      } else {
        setMessage(`${columnText} must be entered`);
      }
    }

    if (column === 'orderNo') {
      if (customMessage) {
        setMessage(customMessage);
      } else if (!value) {
        setMessage(`${columnText} must be entered`);
      }
    }

    if (column === 'validDates') {
      if (!value && !checkDateTo) {
        setMessage(`${columnText} must be entered`);
      }
      if (checkDateTo !== undefined && value) {
        setMessage('Please select a valid date');
      }
    }
  }, [columnText, value, customMessage, column, checkDateTo]);

  return (
    <div className={messageShow ? 'text-error' : null}>
      {messageShow ? (
        <p className={`pl-0 text-danger font-12 ${column === 'validDates' ? style : null}`}>{message}</p>
      ) : (
        <p
          style={{ color: 'transparent !important' }}
          className={`pl-0 text-tranparent font-12 ${column === 'validDates' ? style : null}`}
        >
          a
        </p>
      )}
    </div>
  );
};

export default RequiredMessage;
