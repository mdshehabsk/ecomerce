'use client'
import React from 'react';
import dynamic from 'next/dynamic';
const NoSSRReactQuill = dynamic(() => import('react-quill'),{ssr: false})

// @ts-ignore
// import ImageResize from 'quill-image-resize-module-react';
import "react-quill/dist/quill.snow.css";
import classNames from 'classnames'; // Import classnames package
// Define the props type
interface QuillProps {
  value: string; // The editor's content
  setValue: (value: string) => void; // Function to update the editor's content
  className?: string; // Optional className for custom styling
}


const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons

    ['link', 'video', 'formula'],
  
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
  
    ['clean']                                         // remove formatting button
  ];
const ReactQuill: React.FC<QuillProps> = ({ value, setValue, className  }) => {
    const editorClass = classNames(
        "w-full custom-ql ", // Default styles
        className // Custom styles passed via props
      );

  return (
   <React.Fragment>

     <NoSSRReactQuill
      theme="snow"
      value={value}
      onChange={setValue}
      placeholder={'Start typing...'}
      className={editorClass}
      modules={{
        toolbar: toolbarOptions,
      }}
    />
   </React.Fragment>
  );
};

export default ReactQuill;

// {/* <style jsx global>{`
//   .custom-ql .ql-container {
//     font-size: 16px; /* Set the font size */
//     line-height: 1.5; /* Optional: Adjust line height */
//   }
// `}</style> */}