import './card.css'
export default function FeatureCard(props) {
  let  {icon,caption}=props;
  return (
    <div className="card">
      <div className="flex justify-center items-center cardcontent text-center">
        <span className="icon">{icon}</span>
        <span className="caption">{caption}</span>
      </div>
    </div>
  );
}