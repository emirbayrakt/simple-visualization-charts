const FormError = ({ message }: { message?: string }) => {
  if (!message) return null;
  return <p className="mt-1 text-xs text-red-600 font-semibold">{message}</p>;
};

export default FormError;
