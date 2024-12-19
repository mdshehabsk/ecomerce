


import { useEffect, useRef, useState } from "react";


type TProps = {
    isOpen: boolean,
    children: JSX.Element | JSX.Element[],
    onClose : (arg1: boolean) => void
}

const Popover : React.FC<TProps> = ({ isOpen = false , children, onClose }) => {
  const [popoverOpen, setPopoverOpen] = useState(isOpen);
  const popoverRef = useRef<HTMLDivElement >(null);

  useEffect(() => {
    setPopoverOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event : MouseEvent ) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        onClose(false)
      }
    };

    if (popoverOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popoverOpen]);

  return (
    <div
      ref={popoverRef}
      className={` absolute ${popoverOpen ? 'block' : 'hidden'} `}
    >
      {children}
    </div>
  );
};

export default Popover;
