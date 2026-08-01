type FormFieldProps = {
  label: string;
  english: string;
  helper?: string;
  required?: boolean;
  type?: string;
  placeholder?: string;

  name?: string;
  value?: string;

  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

export default function FormField({
  label,
  english,
  helper,
  required = false,
  type = "text",
  placeholder = "",

  name,
  value,
  onChange,
}: FormFieldProps) {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-lg font-semibold text-[#241f35]">
          {label}
          {required && (
            <span className="ml-1 text-[#d11422]">*</span>
          )}
        </p>

        <p className="mt-1 text-xs uppercase tracking-[0.35em] text-[#241f35]/65">
          {english}
        </p>
      </div>

     <input
  name={name}
  value={value}
  onChange={onChange}
  type={type}
  placeholder={placeholder}
  className="
    w-full
    border-b
    border-[#241f35]/25
    bg-transparent
    py-4
    text-lg
    text-[#241f35]
    placeholder:text-[#241f35]/35
    outline-none
    transition-all
    duration-300
    focus:border-[#241f35]
  "
/>

      {helper && (
        <p className="text-sm leading-7 text-[#241f35]/70">
          {helper}
        </p>
      )}
    </div>
  );
}