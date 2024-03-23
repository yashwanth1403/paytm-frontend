import { Link } from "react-router-dom";

export default function Bottomwarnig({ label, route, link }) {
  return (
    <div className="flex gap-2 items-center justify-center mb-3">
      <div className="">{label}</div>
      <Link to={route} className="underline">
        {link}
      </Link>
    </div>
  );
}
