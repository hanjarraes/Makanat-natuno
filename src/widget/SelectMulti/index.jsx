import React from 'react';
import Select from 'react-select';
import RequiredMessage from '../RequiredMessage';

const SelectMulti = ({
  name,
  placeholder,
  options,
  selectedValue,
  onChangeDropdown,
  isLoading,
  className,
  title = null,
  required = false,
  messageRequired,
  messageParam = { messageShow: false, messageData: {}, messageCustom: {} },
  parentDivClassName,
}) => {


  const rerequired = required ? 'required' : '';
  return (
    <div className={parentDivClassName}>
      {!title ? null : <label className={`text-muted mb-0 ${rerequired}`}>{title}</label>}
      <Select
        isLoading={isLoading}
        onChange={(val) => onChangeDropdown(val)}
        placeholder={placeholder || title}
        required={required}
        defaultValue={selectedValue}
        isMulti
        name="colors"
        options={options}
        className={className}
        classNamePrefix="select"
      />

      {!messageRequired ? null : (
        <RequiredMessage
          column={name}
          messageShow={messageParam?.messageShow}
          columnText={title || placeholder}
          value={messageParam?.value}
          customMessage={messageParam?.messageCustom}
        />
      )}
    </div>
  );
};

export default SelectMulti;
