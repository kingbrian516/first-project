interface Props {
  title: string;
  description: string;
  goal: number;
  raised: number;
}

export default function ProjectCard({ title, description, goal, raised }: Props) {
  const progress = (raised / goal) * 100;
  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="mb-2">{description}</p>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="text-sm mb-4">${raised} raised of ${goal} goal</p>
      <button className="bg-green-600 text-white px-4 py-2 rounded">Donate to This Project</button>
    </div>
  );
}