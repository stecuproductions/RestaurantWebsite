export default function StandardFormInput({
  label,
  value,
  onChange,
  type = "text",
  placeholder = "",
  required = false,
  disabled = false,
  ...props

}) {
  return (
    <div className="form-group flex flex-col gap-2">
      <label className="text-[#CCCCCC] text-sm  ">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className="form-control outline-none text-white px-2 rounded-sm py-2 tex-sm bg-[#333333] "
        {...props}
      />
    </div>
  );
}