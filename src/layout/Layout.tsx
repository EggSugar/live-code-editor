import Split from "react-split";
import { EditorPanel } from "./EditorPanel";
import { PreviewPanel } from "./PreviewPanel";

export const Layout = () => {
    return (
        <Split className="split" sizes={[40, 60]} minSize={300}>
            <EditorPanel />
            <PreviewPanel />
        </Split>
    );
};