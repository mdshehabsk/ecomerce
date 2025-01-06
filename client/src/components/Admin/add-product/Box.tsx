'use client'
const Box: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="p-4 bg-[#F9F9F9] shadow-sm rounded-sm">{children}</div>
  );
export default Box