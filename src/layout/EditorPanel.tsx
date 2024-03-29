import { useContext } from "react";
import MEditor from "@monaco-Editor/react";
import { 
    editorOptions, 
} from "../config";
import { Context } from "../context";

export const EditorPanel = () => {
        const { state, dispatch } = useContext(Context)
    return (
        <div className="h-100 postion-relative">
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                        className="nav-link active rounded-0" 
                        id="html-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#html"
                        type="button"
                        role="tab"
                        aria-controls="html"
                        aria-selected="true"
                    >
                        HTML
                    </button>
                    <button
                        className="nav-link rounded-0 px-4" 
                        id="css-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#css"
                        type="button"
                        role="tab"
                        aria-controls="css"
                        aria-selected="false"
                    >
                        CSS
                    </button>
                    <button
                        className="nav-link rounded-0" 
                        id="js-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#js"
                        type="button"
                        role="tab"
                        aria-controls="js"
                        aria-selected="false"
                    >
                        JS
                    </button>
                </div>
            </nav>
            <div className="tab-content h-100" id="nav-tabContent">
                <div
                    className="tab-pane show active h-100"
                    id="html"
                    role="tabpanel"
                    aria-labelledby="html-tab"
                    tabIndex={0}
                >
                    <MEditor 
                        defaultLanguage="html" 
                        options={editorOptions} 
                        height="100%"
                        value={state.html}
                        onChange={(value) => 
                            dispatch(prevState => ({
                            ...prevState,
                            html: value ? value : '',
                            }))
                        }
                        theme={state.theme === "dark" ? "vs-dark" : state.theme}
                     />
                </div>
                <div
                    className="tab-pane h-100"
                    id="css"
                    role="tabpanel"
                    aria-labelledby="css-tab"
                    tabIndex={0}
                >
                    <MEditor 
                        defaultLanguage="css" 
                        options={editorOptions} 
                        height="100%"
                        value={state.css}
                        onChange={(value) => 
                            dispatch(prevState => ({
                            ...prevState,
                            css: value ? value : '',
                            }))
                        }
                        theme={state.theme === "dark" ? "vs-dark" : state.theme}
                    />
                </div>
                <div
                    className="tab-pane h-100"
                    id="js"
                    role="tabpanel"
                    aria-labelledby="js-tab"
                    tabIndex={0}
                >
                    <MEditor 
                        defaultLanguage="javascript" 
                        options={editorOptions} 
                        height="100%"
                        value={state.js}
                        onChange={(value) => 
                            dispatch(prevState => ({
                            ...prevState,
                            js: value ? value : '',
                            }))
                        }
                        theme={state.theme === "dark" ? "vs-dark" : state.theme}
                    />
                </div>
            </div>
        </div>
    );
};