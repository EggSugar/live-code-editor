import { useContext, useEffect, useState } from 'react'
import { Context } from '../context';

export const PreviewPanel = () => {
        const { state } = useContext(Context);
        const [ srcDoc, setSrcDoc ] = useState("");

      useEffect(() => {
        const timeout = setTimeout(() => {
          const srcDoc = `
            <html>
                <style>${state.css}</style>
                <body>${state.html}</body>
                <script>${state.js}</script>
            </html>
            `;
          setSrcDoc(srcDoc);
        }, 1000)

      return () => clearTimeout(timeout);
    }, [state.html, state.css, state.js]);

  return (
    <div className="border-bottom w-100">
        <iframe srcDoc={srcDoc} title="output" width="100%" height="100%" />
    </div>
  )
}
