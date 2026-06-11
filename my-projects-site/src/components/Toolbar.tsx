import "../styles/toolbar.css";

type ToolbarProps = {
  projectCount: number;
};

export function Toolbar({ projectCount }: ToolbarProps) {
  return (
    <section className="toolbar" id="projects">
      <p>Viser {projectCount} projekter</p>

      <div className="toolbar-actions">
        <button>Filtre</button>
        <button>Sorter efter</button>
      </div>
    </section>
  );
}