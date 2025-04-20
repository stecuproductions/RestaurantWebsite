export default function GuestNumberInput({
    label,
    value,
    onDecrease,
    onIncrease,
    min = 1,
    max = 20,
  }) {
    return (
      <div className="form-group flex flex-col gap-2">
        <label className="text-[#CCCCCC] text-sm">{label}</label>
        <div className="flex items-center bg-[#333333] rounded-sm overflow-hidden w-full">
          <button
            type="button"
            onClick={onDecrease}
            disabled={value <= min}
            className="px-3 py-2 text-secondary-color font-bold disabled:opacity-30"
          >
            –
          </button>
          <input
            type="number"
            readOnly
            value={value}
            className="w-full text-center text-white bg-transparent outline-none py-2"
          />
          <button
            type="button"
            onClick={onIncrease}
            disabled={value >= max}
            className="px-3 py-2 text-secondary-color disabled:opacity-30 font-bold"
          >
            +
          </button>
        </div>
      </div>
    );
  }
  