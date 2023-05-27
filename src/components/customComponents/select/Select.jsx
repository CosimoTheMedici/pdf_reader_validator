import PropTypes from "prop-types";

function Select({
  arrayData,
  defaultSelectText,
  onChange,
  value,
  name,
  id
}) {
  return (
        <select
          name={name}
          id={id}
          //type="select"
          onChange={onChange}
          value={value}
          class="form-control select"
          style={{maxheight:"3rem"}}
        >
          <option>
            {defaultSelectText
              ? `---------${defaultSelectText}--------`
              : "----------Select---------"}
          </option>
          {arrayData.map((data, index) => (
            <option key={index} value={data.value || data.label}>
              {data.label}
            </option>
          ))}
        </select>
  );
}

Select.propTypes = {
  labelText: PropTypes.string,
  defaultSelectText: PropTypes.string,
  arrayData: PropTypes.array.isRequired,
};
export default Select;