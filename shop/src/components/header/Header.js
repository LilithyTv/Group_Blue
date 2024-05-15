

export default function Header({ children }) {
  return (
    <div style={{ backgroundColor: '#E6E1D0', borderColor: '#ccc' }} className="flex justify-center border-[1px] p-4">
      {children}
    </div>
  );
}
