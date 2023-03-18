import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import RequiredMessage from '../RequiredMessage';

const SelectItem = ({
  name,
  isEmpty,
  placeholder,
  options,
  selectedValue,
  onChangeDropdown,
  isLoading,
  className,
  onInputChange,
  title = null,
  minChar = 3,
  required = false,
  readOnly,
  messageRequired,
  showLabelOnly,
  messageParam = { messageShow: false, messageData: {}, messageCustom: {} },
  parentDivClassName,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isValue, setIsValue] = useState('');

  let newOptions = [];
  if (options?.length) {
    newOptions = options.map((data) => ({
      label: `${data?.label}`,
      value: data?.label,
      originLabel: data?.label,
    }));
  }

  const newSelectedValue = !showLabelOnly
    ? selectedValue
    : { label: selectedValue?.value, value: selectedValue?.value };

  useEffect(() => {
    if (selectedValue === 'empty') setIsOpen(true);
  }, [selectedValue, isEmpty]);

  useEffect(() => {
    if (isValue.length >= minChar) {
      if (onInputChange) onInputChange(isValue);
      if (document.getElementById('orderLines')) {
        document.getElementById('orderLines').scrollLeft -= 200;
      }
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [isValue, minChar, onInputChange]);

  const rerequired = required ? 'required' : '';
  return (
    <div className={parentDivClassName}>
      {!title ? null : <label className={`text-muted mb-0 ${rerequired}`}>{title}</label>}
      <Select
        isClearable={!readOnly}
        isSearchable={!readOnly}
        openMenuOnClick={!readOnly}
        value={newSelectedValue?.value ? newSelectedValue : false}
        options={newOptions && isOpen ? newOptions : []}
        getOptionLabel={(option) => option.label}
        isLoading={isLoading}
        onInputChange={(val) => setIsValue(val)}
        onChange={(val) => onChangeDropdown(val)}
        className={`${isOpen ? 'absolute' : null} ${className}`}
        placeholder={placeholder || title}
        required={required}
        styles={{
          option: (provided) => ({
            ...provided,
            textAlign: 'left',
          }),
          dropdownIndicator: (base, state) => ({
            ...base,
            transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
            display: readOnly || selectedValue?.value ? 'none' : 'flex',
          }),
          menu: (base) => ({
            ...base,
            maxHeight: 210,
            top: 'relative',
            width: 'inherit',
            marginTop: 0,
          }),
          menuList: (base) => ({
            ...base,
            maxHeight: 210,
          }),
          control: (provided) => ({
            ...provided,
            backgroundColor: readOnly ? '#e4e7ea !important' : 'white',
            pointerEvents: readOnly ? 'none' : 'auto',
            border: readOnly ? 0 : '',
            borderColor: '#e4e7ea !important',
            height: 50,
            boxShadow: 'none',
            borderRadius: '0.25rem',
          }),
        }}
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

export default SelectItem;
