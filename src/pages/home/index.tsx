import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div className={'HomePage'}>
      <ul>
        <li><Link to={'/props'}>Props</Link></li>
      </ul>
    </div>
  )
}