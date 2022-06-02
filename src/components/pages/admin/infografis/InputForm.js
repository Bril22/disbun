import React from 'react';
import { Icon } from '@iconify/react';

function InputForm({
  titleForm = '',
  titleName = '',
  onChange,
  onBlur,
  values,
  type,
  iconPassword = '',
  iconEmail = '',
  phoneNumber = '',
  onClick = () => {},
  icon = '',
  placeholder = '',
  className = '',
  classes = '',
  star = false,
  margin = 'mb-2',
  textArea = '',
  selectionArea = '',
  radioName = '',
  radioId = '',
  radioValue = '',
  label = '',
  radioButton = '',
  id = '',
}) {
  return (
    <>
      <div>
        <div className={`${margin} text-sm font-semibold text-black`}>
          {titleForm}
          {star && <span className="text-red-400">*</span>}
        </div>
        {iconEmail && (
          <input
            name={titleName}
            onChange={onChange}
            onBlur={onBlur}
            value={values}
            type={type}
            placeholder={placeholder}
            className={`${className}`}
            id={id}
          />
        )}
        {iconPassword && (
          <div className={`${classes}`}>
            <input
              name={titleName}
              onChange={onChange}
              onBlur={onBlur}
              value={values}
              type={type}
              placeholder={placeholder}
              className={`${className}`}
            />
            <Icon
              onClick={onClick}
              icon={icon}
              style={{
                fontSize: '24px',
                color: 'rgba(158, 158, 158, 1)',
              }}
              className="ml-3 cursor-pointer"
            />
          </div>
        )}
        {phoneNumber && (
          <div className="flex gap-3">
            <div className="flex items-center justify-center rounded-md border bg-white-2 py-3 px-4 text-sm">
              +62
            </div>
            <input
              name={titleName}
              onChange={onChange}
              onBlur={onBlur}
              value={values}
              type={type}
              placeholder={placeholder}
              className={`${className}`}
            />
          </div>
        )}
        {textArea && (
          <textarea className={`${className}`} placeholder={placeholder} />
        )}
        {selectionArea && (
          <select
            class="form-select 
                    m-0
                    block
                    w-full
                    rounded
                    border
                    border-solid
                    border-gray-300 bg-white-2 bg-clip-padding
                    bg-no-repeat px-6 py-3
                    text-base
                    text-gray-400
                    transition
                    ease-in-out
                    focus:border-primary-green focus:bg-white focus:text-gray-700 focus:outline-none"
            aria-label="Default select example"
          >
            <option disabled selected hidden>
              {placeholder}
            </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        )}
        {radioButton && (
          <>
            <input
              className="form-radio mr-2 h-4 w-4 rounded-full border border-primary-gray-3 text-primary-green"
              type="radio"
              name={radioName}
              id={radioId}
              value={radioValue}
              onClick={onClick}
            />
            <label className="">{label}</label>
          </>
        )}
        {/* {textArea && (
          <textarea>S</textarea>
        )} */}
      </div>
    </>
  );
}

export default InputForm;
